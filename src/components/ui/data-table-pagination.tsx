"use client"
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
} from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter, useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"

interface DataTablePaginationProps<TData> {
    options: TableOptions
}

type TableOptions = {
    take?: string,
    skip?: string,
    total?: number,
    search?: string,
}

export function DataTablePagination<TData>({
    options: { skip, take, total, search }
}: DataTablePaginationProps<TData>) {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const skipNumber = isNaN(Number(skip)) ? 0 : Number(skip)
    const takeNumber = isNaN(Number(take)) ? 10 : Number(take)
    const totalNumber = isNaN(Number(total)) ? 0 : Number(total)
    const maxPage = Math.ceil(totalNumber / takeNumber)
    const currentPage = Math.ceil(skipNumber / takeNumber) + 1

    const onSetTake = (data: number) => {
        const searchParams: string[] = []
        if (search) searchParams.push(`search=${search}`)
        searchParams.push(`take=${data}`)
        if (skip) searchParams.push(`skip=${skip}`)
        const path = pathname + "?" + searchParams.join("&")
        router.push(path)
    }

    const onSetSkip = (direction: "next" | "previous" | "last" | "first") => {
        const params: string[] = []
        if (search) params.push(`search=${search}`)
        if (take) params.push(`take=${take}`)

        if (direction === "next") {
            const value = skipNumber + takeNumber
            params.push(`skip=${currentPage >= maxPage ? ((maxPage - 1) * takeNumber) : value}`)
        }

        if (direction === "previous") {
            const value = skipNumber - takeNumber
            params.push(`skip=${value < 0 ? 0 : value}`)
        }

        if (direction === "last") {
            params.push(`skip=${((maxPage - 1) * takeNumber)}`)
        }

        if (direction === "first") {
            params.push(`skip=${0}`)
        }
        
        const path = pathname + "?" + params.join("&")
        router.push(path)
    }


    return (
        <div className="flex items-center justify-end px-2">
            <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">Batas</p>
                    <Select
                        value={`${takeNumber}`}
                        onValueChange={(value) => {
                            onSetTake(Number(value))
                        }}
                    >
                        <SelectTrigger className="h-8 w-[70px]">
                            <SelectValue placeholder={`${takeNumber}`} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[10, 20, 30, 40, 50].map((pageSize) => (
                                <SelectItem key={pageSize} value={`${pageSize}`}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex  items-center justify-center text-sm font-medium">
                    Halaman {currentPage} dari {maxPage}
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        className="hidden h-8 w-8 p-0 lg:flex"
                        onClick={() => onSetSkip("first")}
                        disabled={currentPage <= 1}

                    >
                        <span className="sr-only">Pergi ke Halaman Pertama</span>
                        <DoubleArrowLeftIcon className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => onSetSkip("previous")}
                        disabled={currentPage <= 1}

                    >
                        <span className="sr-only">Pergi ke Halaman Sebelumnya</span>
                        <ChevronLeftIcon className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => onSetSkip("next")}
                        disabled={currentPage >= maxPage}
                    >
                        <span className="sr-only">Pergi ke Halaman Berikutnya</span>
                        <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        className="hidden h-8 w-8 p-0 lg:flex"
                        onClick={() => onSetSkip("last")}
                        disabled={currentPage >= maxPage}
                    >
                        <span className="sr-only">Pergi ke Halaman Terakhir</span>
                        <DoubleArrowRightIcon className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
