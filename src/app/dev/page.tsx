"use client"

import { Button } from "@/components/ui/button"
import { AppContainer } from "@/components/ui/container"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from "react"
import axios, { AxiosError } from "axios";
import { Loader2Icon } from "lucide-react"

const months: { key: string, value: string }[] = [
    { "key": "Januari", "value": "1" },
    { "key": "Februari", "value": "2" },
    { "key": "Maret", "value": "3" },
    { "key": "April", "value": "4" },
    { "key": "Mei", "value": "5" },
    { "key": "Juni", "value": "6" },
    { "key": "Juli", "value": "7" },
    { "key": "Agustus", "value": "8" },
    { "key": "September", "value": "9" },
    { "key": "Oktober", "value": "10" },
    { "key": "Desember", "value": "11" },
]

const years: { key: string, value: string }[] = [
    { key: "2024", value: "1" },
    { key: "2023", value: "2" },
    { key: "2022", value: "3" },
    { key: "2021", value: "4" },
    { key: "2020", value: "5" },
]

const data = [
    { title: "Data A", value: 10 },
    { title: "Data A", value: 10 },
]


export type AppSelectProps = {
    labelKey: string,
    valueKey: string,
    fetchUrl: string,
    placeholder?: string,
    defaultValue?: string,
    onValueChange?: (value: string) => void,
    onFetched?: (value: any) => any,
}

export type AppSelectOptions = {
    data: { key: string, value: string }[]
    selected?: string
    loading: boolean,
    error?: Error,
}

export enum AppSelectState {
    INITIAL,
    LOADING,
    ERROR,
}


export const fetcher = (url: string) => axios.get(url)

export const AppSelect = ({ valueKey, labelKey, fetchUrl, placeholder, defaultValue, onValueChange, onFetched }: AppSelectProps) => {

    const [state, setState] = useState<AppSelectState>(AppSelectState.INITIAL)
    const [list, setList] = useState<any[]>([])

    const fetching = async () => {
        setState(AppSelectState.LOADING)
        try {
            const { data } = await axios.get(fetchUrl)
            onFetched ? setList(onFetched(data)) : setList(data)
            setState(AppSelectState.INITIAL)
        } catch (error) {
            setState(AppSelectState.ERROR)
        }
    }

    return (
        <Select onOpenChange={fetching} onValueChange={onValueChange}>
            <SelectTrigger className="w-fit">
                <SelectValue placeholder={placeholder} defaultValue={defaultValue} />
            </SelectTrigger>
            <SelectContent>
                {state == AppSelectState.INITIAL && list.map((item, i) => (
                    <SelectItem value={item[valueKey]} key={i}>{item[labelKey]}</SelectItem>
                ))}
                {state == AppSelectState.LOADING && (
                    <div className="w-full py-3 flex justify-center place-items-center">
                        <Loader2Icon size={15} />
                    </div>
                )}
                {state == AppSelectState.ERROR && (
                    <div className="flex flex-col h-full justify-center place-items-center gap-1 py-2">
                        <small className="text-xs">Gagal</small>
                        <Button variant={'default'} size={'sm'} onClick={fetching}>Ulangi</Button>
                    </div>
                )}
            </SelectContent>
        </Select>
    )
}

const Page = () => {

    const [month, setMonth] = useState<string | null>(null)
    const [year, setYear] = useState<string | null>(null)


    return (
        <div className="w-full">
            <AppContainer className="py-5">
                <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    <div className=" bg-background rounded p-5">
                        <div className="">
                            <div className="flex justify-between w-full place-items-center">
                                <h1 className=" text-lg font-bold">Data Statistik A</h1>
                                <div className="flex gap-2">
                                    {year != null && (
                                        <AppSelect
                                            fetchUrl="/json/months.json"
                                            valueKey="value"
                                            labelKey="label"
                                            placeholder="Bulan"
                                            onValueChange={setMonth}
                                        />
                                    )}
                                    <AppSelect
                                        fetchUrl="/json/years.json"
                                        valueKey="value"
                                        labelKey="label"
                                        placeholder="Tahun"
                                        onValueChange={setYear}
                                        onFetched={(val) => val.data}
                                    />
                                </div>
                            </div>
                            {/* <div className="flex w-full justify-center place-items-center">
                                <span className="text-sm">Tidak ada data.</span>
                            </div> */}
                            <div className="flex w-full justify-center place-items-center">
                                <Button variant={'link'}>Selengkapnya</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContainer>
        </div>
    )
}

export default Page