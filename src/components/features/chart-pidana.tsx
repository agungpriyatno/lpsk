"use client"


import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import { Loader2Icon } from "lucide-react"
import { useState } from "react"
import { Bar, BarChart, Cell, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { AppContainer } from "../ui/container"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { HeaderSection } from "../ui/typography"

type TTotal = { name: string, data: { name: number, value: number }[] }
type TSaluran = { name: string, data: { year: number, list: { name: string, value: string }[] }[] }

const fetchTotal = async (url: string) => {
    const res = await fetch(url);
    return (await res.json()) as TTotal;
};

const fetchSaluran = async (year?: string) => {
    const res = await fetch("/json/grafik/saluran.json");
    const data = (await res.json()) as TSaluran
    const final = data.data.find((item) => item.year === (isNaN(Number(year)) ? 2021 : Number(year)))
    return final;
};

const fetchPelanggaran = async (year?: string) => {
    const res = await fetch("/json/grafik/pelanggaran.json");
    const data = (await res.json()) as TSaluran
    const final = data.data.find((item) => item.year === (isNaN(Number(year)) ? 2021 : Number(year)))
    console.log(final);
    
    return final;
};

const queryClient = new QueryClient()

export const ChartPidana = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <section className="w-full">
                <AppContainer className="space-y-5 bg-background py-5">
                    <HeaderSection>STATISTIK PIDANA PERLINDUNGAN SAKSI DAN KORBAN</HeaderSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-around gap-3 xl:gap-5">
                        <ChartTotal url="/json/grafik/pelanggaran/seksual.json"/>
                        <ChartTotal url="/json/grafik/pelanggaran/ham-berat.json"/>
                        <ChartTotal url="/json/grafik/pelanggaran/terorisme.json"/>
                        <ChartTotal url="/json/grafik/pelanggaran/cuci.json"/>
                        <ChartTotal url="/json/grafik/pelanggaran/korupsi.json"/>
                        <ChartTotal url="/json/grafik/pelanggaran/penyiksaan.json"/>
                        <ChartTotal url="/json/grafik/pelanggaran/perdagangan.json"/>
                        <ChartTotal url="/json/grafik/pelanggaran/narkotika.json"/>
                        <ChartTotal url="/json/grafik/pelanggaran/penganiayaan.json"/>
                        <ChartTotal url="/json/grafik/pelanggaran/lain.json"/>
                    </div>
                </AppContainer>
            </section>
        </QueryClientProvider>

    )
}

export const ChartPelanggaran = () => {
    const [year, setYear] = useState("2021")
    const { data, isLoading, refetch } = useQuery({ queryKey: [year, "pelanggaran"], queryFn: ({queryKey}) => fetchPelanggaran(queryKey[0]) })

    if (isLoading) {
        return (
            <div className='flex flex-col gap-3 text-center col-span-1 md:col-span-2 xl:col-span-4 justify-center place-items-center p-3'>
                <Loader2Icon />
            </div>
        )
    }

    return (
        <div className='flex flex-col gap-3 text-center col-span-1 md:col-span-2  xl:col-span-4 h-[400px]'>
            <div className="flex w-full justify-between place-items-center">
                <h4 className='text-lg font-bold'>Jumlah Permohonan Perlindungan Berdasarkan Tindak Pidana {year}</h4>
                <Select onValueChange={setYear}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Tahun" defaultValue={year} />
                    </SelectTrigger>
                    <SelectContent defaultValue={year}>
                        <SelectItem value="2019">2019</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <BarChartCustom data={data?.list ?? []} keyLabel="name" keyValue="value" />
        </div>
    )
}

export const ChartTotal = ({url}:{url: string}) => {
    // const queryClient = useQueryClient()
    const { data, isLoading } = useQuery({ queryKey: ['todos', url], queryFn: () => fetchTotal(url) })

    if (isLoading) {
        return (
            <div className='flex flex-col gap-3 text-center col-span-1 md:col-span-2 justify-center place-items-center p-3'>
                <Loader2Icon />
            </div>
        )
    }

    return (
        <div className='flex flex-col gap-3 text-center col-span-1 md:col-span-2 h-[400px]'>
            <h4 className='text-lg font-bold'>{data?.name}</h4>
            <BarChartCustom data={data?.data ?? []} keyLabel="name" keyValue="value" />
        </div>
    )
}

export const ChartSaluran = () => {
    const [year, setYear] = useState("2021")
    const { data, isLoading, refetch } = useQuery({ queryKey: [year], queryFn: ({queryKey}) => fetchSaluran(queryKey[0]) })

    if (isLoading) {
        return (
            <div className='flex flex-col gap-3 text-center col-span-1 md:col-span-2 justify-center place-items-center p-3'>
                <Loader2Icon />
            </div>
        )
    }

    return (
        <div className='flex flex-col gap-3 text-center col-span-1 md:col-span-2 h-[400px]'>
            <div className="flex w-full justify-between place-items-center">
                <h4 className='text-lg font-bold'>Saluran LPSK {year}</h4>
                <Select onValueChange={setYear}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Tahun" defaultValue={year} />
                    </SelectTrigger>
                    <SelectContent defaultValue={year}>
                        <SelectItem value="2019">2019</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <BarChartCustom data={data?.list ?? []} keyLabel="name" keyValue="value" />
        </div>
    )
}


export const BarChartCustom = ({ data, keyLabel, keyValue }: { data: any[], keyLabel: string, keyValue: string }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey={keyLabel} className='text-xs' />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey={keyValue} fill="orange" activeBar={<Rectangle fill="orange" />} >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} className='text-xs' />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>

    )
}
