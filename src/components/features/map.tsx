"use client"
import * as d3 from "d3";
import { geoPath } from "d3-geo";
import React, { useEffect, useRef, useState } from "react";
import colors from "tailwindcss/colors";

import { cn } from "@/lib/utils";
import { AspectRatio } from "../ui/aspect-ratio";
import { motion } from "framer-motion";
import { PathTooltip } from "react-path-tooltip"
import { CardReport, CardSection } from "./card-section";
import { ChartSection } from "./chart-section";
import { ScrollArea } from "../ui/scroll-area";
import { BarChart, pelayananPublik, perlindunganSaksiKorban } from "../ui/chart";

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
  const svgRef = React.createRef<SVGSVGElement>()
  const pathRef = React.createRef<SVGCircleElement>()

  const [hover, setHover] = useState<{ x: number, y: number, message: string } | null>()
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<any | null>(null)
  const [{ height, width }, setSize] = useState({ height: 0, width: 0 })
  const [{ data, generator }, setData] = useState<{ data: any[], generator: d3.GeoPath<any, d3.GeoPermissibleObjects> | null }>({ data: [], generator: null })

  useEffect(() => {
    setSize({ height: ref.current?.offsetHeight ?? 0, width: ref.current?.offsetWidth ?? 0 })
    console.log({ height: ref.current?.offsetHeight ?? 0, width: ref.current?.offsetWidth ?? 0 });

    d3.json("/geo/indonesia.json").then((geoJson: any) => {
      const features = geoJson.features as any[]
      const projection = d3.geoMercator().fitSize([ref.current?.offsetWidth ?? 0, ref.current?.offsetHeight ?? 0], geoJson)
      const generate = geoPath().projection(projection)
      setData({ data: features.map(({ properties, ...item }) => { return { ...item, properties: { ...properties } } }), generator: generate })
    })
  }, [])



  return (
    <div className="p-5 bg-background rounded">
      <div className="flex flex-col justify-center place-items-center h-full gap-2">
        <h1 className=" text-xl font-bold text-center">SEBARAN PERLINDUNGAN SAKSI DAN KORBAN TINDAK PIDANA</h1>
        <div className=" w-56 h-5 bg-gradient-to-r from-orange-50 via-orange-500 to-orange-900 rounded"></div>
      </div>
      <AspectRatio ref={ref} ratio={2 / 1} className="relative" >
        {generator && data.length > 0 ? (
          <svg height={height} width={width} ref={svgRef}>
            {data.map((item) => (
              <>
                <path
                  className="stroke-slate-900/25 dark:stroke-slate-50/50 hover:opacity-75"
                  id={item.properties.id}
                  key={item.properties.id}
                  onClick={(e) => {
                    setSelected(item.properties)
                    console.log(item.properties)
                    setOpen(true)
                  }}
                  onMouseMove={(e) => {
                    const x = e.pageX - 200
                    const y = e.pageY - 100;
                    setHover({ x, y, message: item.properties.total ?? 0 })
                  }}
                  onMouseLeave={() => setHover(null)}
                  d={generator(item) ?? undefined}
                  style={{ fill: colors.orange[colorList[selectColor(item.properties.total ?? 0)]] }}
                  ref={pathRef}
                ></path>
                <div>data</div>
                <div className=" absolute px-3 py-2 rounded bg-primary left-0 right-0 z-50" style={{ left: 0, top: 0 }}>Hello</div>
              </>
            ))}
          </svg>
        ) : (
          <div></div>
        )}
        {hover != null && (
          <div className=" absolute px-3 py-2 rounded bg-muted" key={1} style={{ left: hover.x, top: hover.y }}>{hover.message}</div>
        )}
        {open && <motion.div
          key={2}
          className="bg-slate-800/50 fixed left-0 top-0 h-full w-full z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex h-full justify-center place-items-center py-16" onClick={() => setOpen(false)}>
            <div className="bg-background p-5 rounded max-w-[800px] h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <h1>ID: {selected?.id}</h1>
              <h1>Nama Provinsi: {selected?.provinsi}</h1>
              <h1>Jumlah Laporan: {selected?.total}</h1>
              {/* <div className="gap-3 xl:gap-5 w-full">
                    <div className='flex flex-col gap-3 text-center'>
                        <h4 className='text-lg font-bold'>Pelayan Publik</h4>
                        <BarChart data={pelayananPublik} />
                    </div>
                    <div className='flex flex-col gap-3 text-center'>
                        <h4 className='text-lg font-bold'>Perlindungan Saksi dan Korban Kejahatan</h4>
                        <BarChart data={perlindunganSaksiKorban} />
                    </div>
                </div> */}
              <div className=" grid grid-cols-2 gap-2 mt-3">
                <div className="flex w-full flex-row border px-3 py-2 justify-between place-items-center rounded gap-3">
                  <h1 className="text-base font-semibold">
                    Tindak Pidana HAM Berat
                  </h1>
                  <h4>{selected.ham ?? 0}</h4>
                </div>
                <div className="flex w-full flex-row border px-3 py-2 justify-between place-items-center rounded gap-3">
                  <h1 className="text-base font-semibold">
                    Tindak Pidana Narkotika
                  </h1>
                  <h4>{selected.narkotika ?? 0}</h4>
                </div>
                <div className="flex w-full flex-row border px-3 py-2 justify-between place-items-center rounded gap-3">
                  <h1 className="text-base font-semibold">
                    Tindak Pidana Penganiayaan Berat
                  </h1>
                  <h4>{selected.penganiayaan ?? 0}</h4>
                </div>
                <div className="flex w-full flex-row border px-3 py-2 justify-between place-items-center rounded gap-3">
                  <h1 className="text-base font-semibold">
                    Tindak Pidana Penyiksaan
                  </h1>
                  <h4>{selected.penyiksaan ?? 0}</h4>
                </div>
                <div className="flex w-full flex-row border px-3 py-2 justify-between place-items-center rounded gap-3">
                  <h1 className="text-base font-semibold">
                    Tindak Pidana Perdagangan Orang
                  </h1>
                  <h4>{selected.perdagangan ?? 0}</h4>
                </div>
                <div className="flex w-full flex-row border px-3 py-2 justify-between place-items-center rounded gap-3">
                  <h1 className="text-base font-semibold">
                    Tindak Pidana Seksual
                  </h1>
                  <h4>{selected.seksual ?? 0}</h4>
                </div>
                <div className="flex w-full flex-row border px-3 py-2 justify-between place-items-center rounded gap-3">
                  <h1 className="text-base font-semibold">
                    Tindak Pidana Terorisme
                  </h1>
                  <h4>{selected.terorisme ?? 0}</h4>
                </div>
              </div>
            </div>
          </div>
        </motion.div>}
      </AspectRatio>
    </div>

  )
}


export default IDMap

