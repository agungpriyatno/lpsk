"use client"
import * as d3 from "d3";
import { geoPath } from "d3-geo";
import { useEffect, useRef, useState } from "react";
import colors from "tailwindcss/colors";

import { cn } from "@/lib/utils";
import { AspectRatio } from "../ui/aspect-ratio";

function generateNumber(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const colorList = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const selectColor = (value: number) => {
  const select = Math.floor(value / 10)
  if (select < 0) return 0
  if (select > 10) return 9
  return select - 1
}


const IDMap = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<number | null>(null)
  const [{ height, width }, setSize] = useState({ height: 0, width: 0 })
  const [{ data, generator }, setData] = useState<{ data: any[], generator: d3.GeoPath<any, d3.GeoPermissibleObjects> | null }>({ data: [], generator: null })

  useEffect(() => {
    setSize({ height: window.innerHeight, width: window.innerWidth })
    d3.json("https://raw.githubusercontent.com/superpikar/indonesia-geojson/master/indonesia-province-simple.json").then((geoJson: any) => {
      const features = geoJson.features as any[]
      const projection = d3.geoMercator().fitSize([window.innerWidth, window.innerHeight], geoJson)
      const generate = geoPath().projection(projection)
      setData({ data: features.map(({ properties, ...item }) => { return { ...item, properties: { ...properties, value: generateNumber(0, 100) } } }), generator: generate })
    })
  }, [])

  return (
    <AspectRatio ratio={2/1}>
      {generator && data.length > 0 ? (
        <svg height={height} width={width}>
          <g>
            {data.map((item) => (
              <path
                id={item.properties.ID}
                key={item.properties.ID}
                onClick={() => {
                  console.log(item.properties.ID === selected);

                  console.log(item.properties.ID)
                  setSelected(item.properties.ID)
                }}
                d={generator(item) ?? undefined}
                className={cn("fill-blue-500", { "fill-blue-600": item.properties.ID === selected })}
              ></path>
            ))}
          </g>
        </svg>
      ) : (
        <div></div>
      )}
    </AspectRatio>

  )
}


export default IDMap

