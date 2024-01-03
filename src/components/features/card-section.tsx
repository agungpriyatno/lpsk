"use client"

import { Button } from "@/components/ui/button"
import { AppContainer } from "@/components/ui/container"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from "react"
import axios, { AxiosError } from "axios";
import { Loader2Icon } from "lucide-react"

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

export type TTotalData = {
    title?: string
    data: { label: string, value: string }[]
}



export enum EStatus {
    INITIAL,
    LOADING,
    ERROR,
}


export const fetcher = (url: string) => axios.get(url)

export const AppSelect = ({ valueKey, labelKey, fetchUrl, placeholder, defaultValue, onValueChange, onFetched }: AppSelectProps) => {

    const [state, setState] = useState<EStatus>(EStatus.INITIAL)
    const [list, setList] = useState<any[]>([])

    const fetching = async () => {
        setState(EStatus.LOADING)
        try {
            const { data } = await axios.get(fetchUrl)
            onFetched ? setList(onFetched(data)) : setList(data)
            setState(EStatus.INITIAL)
        } catch (error) {
            setState(EStatus.ERROR)
        }
    }

    return (
        <Select onOpenChange={fetching} onValueChange={onValueChange}>
            <SelectTrigger className="w-fit">
                <SelectValue placeholder={placeholder} defaultValue={defaultValue} />
            </SelectTrigger>
            <SelectContent>
                {state == EStatus.INITIAL && list.map((item, i) => (
                    <SelectItem value={item[valueKey]} key={i}>{item[labelKey]}</SelectItem>
                ))}
                {state == EStatus.LOADING && (
                    <div className="w-full py-3 flex justify-center place-items-center">
                        <Loader2Icon size={15} />
                    </div>
                )}
                {state == EStatus.ERROR && (
                    <div className="flex flex-col h-full justify-center place-items-center gap-1 py-2">
                        <small className="text-xs">Gagal</small>
                        <Button variant={'default'} size={'sm'} onClick={fetching}>Ulangi</Button>
                    </div>
                )}
            </SelectContent>
        </Select>
    )
}

const CardReport = ({ url }: { url: string }) => {

    const [state, setState] = useState<EStatus>(EStatus.INITIAL)
    const [month, setMonth] = useState<string | null>(null)
    const [year, setYear] = useState<string | null>(null)
    const [data, setData] = useState<TTotalData | null>()
    const [more, setMore] = useState(false)

    const fetching = async () => {
        setState(EStatus.LOADING)
        try {
            const { data } = await axios.get(url)
            setData(data)
            setState(EStatus.INITIAL)
        } catch (error) {
            setState(EStatus.ERROR)
        }
    }

    useEffect(() => {
        fetching()
    }, [year, month])


    return (
        <div className=" bg-background rounded p-5 transition-all duration-300 h-full">
            <div className=" space-y-3">
                <div className="flex justify-between w-full place-items-center gap-2">
                    <h1 className=" text-lg font-bold">{data?.title}</h1>
                    <div className="flex gap-2">
                        {year != null && (
                            <AppSelect
                                fetchUrl="/json/months.json"
                                valueKey="value"
                                labelKey="label"
                                placeholder="Bulan"
                                onValueChange={setMonth}
                                defaultValue={month ?? undefined}
                            />
                        )}
                        <AppSelect
                            fetchUrl="/json/years.json"
                            valueKey="value"
                            labelKey="label"
                            placeholder="Tahun"
                            onValueChange={setYear}
                            defaultValue={year ?? undefined}
                            onFetched={(val) => val.data}
                        />
                    </div>
                </div>
                <div className=" space-y-2">
                    {state == EStatus.INITIAL &&
                        data?.data.map((item, i) => (i < 5 || more) && (
                            <div className="flex place-items-center gap-3" key={i + 1}>
                                <div className=" h-14 w-14 bg-muted rounded flex justify-center place-items-center">
                                    <h2 className="text-xl font-bold">{i + 1}</h2>
                                </div>
                                <p className="flex-1">{item.label}</p>
                                <div className="flex flex-col justify-center place-items-center">
                                    <p>{item.value}</p>
                                    <small>Laporan</small>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {state == EStatus.LOADING && (
                    <div className="w-full py-3 flex justify-center place-items-center">
                        <Loader2Icon size={15} />
                    </div>
                )}
                {state == EStatus.ERROR && (
                    <div className="flex flex-col h-full justify-center place-items-center gap-1 py-2">
                        <small className="text-xs">Gagal</small>
                        <Button variant={'default'} size={'sm'} onClick={fetching}>Ulangi</Button>
                    </div>
                )}
                {!more && (
                    <div className="flex w-full justify-center place-items-center">
                        <Button onClick={() => setMore(true)} variant={'link'}>Selengkapnya</Button>
                    </div>
                )}
                {more && (
                    <div className="flex w-full justify-center place-items-center">
                        <Button onClick={() => setMore(false)} variant={'link'}>Lebih Sedikit</Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export const CardSection = () => {
    return (
        <div className="w-full">
            <AppContainer className="py-5">
                <div className=" gap-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    <CardReport url="/json/pelanggaran/ham-berat.json" />
                    <CardReport url="/json/pelanggaran/korupsi.json" />
                    <CardReport url="/json/pelanggaran/sexual.json" />
                    <CardReport url="/json/pelanggaran/penyiksaan.json" />
                    <CardReport url="/json/pelanggaran/narkotika.json" />
                    <CardReport url="/json/pelanggaran/perdagangan-manusia.json" />
                    <CardReport url="/json/pelanggaran/pencucian-uang.json" />
                    <CardReport url="/json/pelanggaran/terorisme.json" />
                    <CardReport url="/json/pelanggaran/penganiayaan-berat.json" />
                    <CardReport url="/json/pelanggaran/lainnya.json" />
                </div>
            </AppContainer>
        </div>
    )
}
