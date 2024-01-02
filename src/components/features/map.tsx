"use client"
import * as d3 from "d3";
import { geoPath } from "d3-geo";
import { useEffect, useRef, useState } from "react";
import colors from "tailwindcss/colors";

import { cn } from "@/lib/utils";
import { AspectRatio } from "../ui/aspect-ratio";
import { motion } from "framer-motion";

function generateNumber(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

type ColorType = {
  50: '#fff7ed'
  100: '#ffedd5'
  200: '#fed7aa'
  300: '#fdba74'
  400: '#fb923c'
  500: '#f97316'
  600: '#ea580c'
  700: '#c2410c'
  800: '#9a3412'
  900: '#7c2d12'
  950: '#431407'
}

const colorList: (keyof ColorType)[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const selectColor = (value: number) => {
  const select = Math.floor(value / 10)
  if (select < 0) return 0
  if (select > 9) return 9
  return select
}


const IDMap = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<{ id: number, provinsi: string, value: number } | null>(null)
  const [{ height, width }, setSize] = useState({ height: 0, width: 0 })
  const [{ data, generator }, setData] = useState<{ data: any[], generator: d3.GeoPath<any, d3.GeoPermissibleObjects> | null }>({ data: [], generator: null })

  useEffect(() => {
    setSize({ height: ref.current?.offsetHeight ?? 0, width: ref.current?.offsetWidth ?? 0 })
    console.log({ height: ref.current?.offsetHeight ?? 0, width: ref.current?.offsetWidth ?? 0 });

    d3.json("/geo/indonesia.json").then((geoJson: any) => {
      const features = geoJson.features as any[]
      const projection = d3.geoMercator().fitSize([ref.current?.offsetWidth ?? 0, ref.current?.offsetHeight ?? 0], geoJson)
      const generate = geoPath().projection(projection)
      setData({ data: features.map(({ properties, ...item }) => { return { ...item, properties: { ...properties, value: generateNumber(0, 100) } } }), generator: generate })
    })
  }, [])

  return (
    <div className="p-5 bg-background rounded">
      <div className="flex flex-col justify-center place-items-center h-full gap-2">
        <h1 className=" text-xl font-bold text-center">PETA PAPARAN LAPORAN</h1>
        <div className=" w-56 h-5 bg-gradient-to-r from-orange-50 via-orange-500 to-orange-900 rounded"></div>
      </div>
      <AspectRatio ref={ref} ratio={2 / 1} >
        {generator && data.length > 0 ? (
          <svg height={height} width={width}>
            <g>
              {data.map((item) => (
                <path
                  className="stroke-slate-900/25 dark:stroke-slate-50/50 hover:opacity-75"
                  id={item.properties.id}
                  key={item.properties.id}
                  onClick={() => {
                    console.log(item.properties.value)
                    setSelected({ id: item.properties.id, provinsi: item.properties.provinsi, value: item.properties.value })
                    setOpen(true)
                  }}
                  d={generator(item) ?? undefined}
                  style={{ fill: colors.orange[colorList[selectColor(item.properties.value)]] }}
                ></path>
              ))}
            </g>
          </svg>
        ) : (
          <div></div>
        )}
        {open && <motion.div
          className="bg-slate-800/50 fixed left-0 top-0 h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex h-full justify-center place-items-center" onClick={() => setOpen(false)}>
            <div className="bg-background p-5 rounded" onClick={(e) => e.stopPropagation()}>
              <h1>ID: {selected?.id}</h1>
              <h1>Nama Provinsi: {selected?.provinsi}</h1>
              <h1>Jumlah Laporan: {selected?.value}</h1>
            </div>
          </div>
        </motion.div>}
        <div className=" absolute left-0 bottom-0 flex gap-2">

        </div>
      </AspectRatio>
    </div>

  )
}


export default IDMap

