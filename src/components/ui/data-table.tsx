"use client"

import {
    ColumnDef,
    SortingState,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { FormEvent, useState } from "react"
import { DataTableViewOptions } from "./data-table-column-toggle"
import { DataTablePagination } from "./data-table-pagination"
import { Input } from "./input"
import { Button } from "./button"
import { SearchIcon } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { Skeleton } from "./skeleton"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    options: TableOptions,
}

type TableOptions = {
    take?: string,
    skip?: string,
    total?: number,
    search?: string,
}

export function DataTable<TData, TValue>({
    columns,
    data,
    options
}: DataTableProps<TData, TValue>) {
    const router = useRouter()
    const pathname = usePathname()
    const [sorting, setSorting] = useState<SortingState>([])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
        },
    })

    const onSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const value = (event.currentTarget.elements[0] as HTMLInputElement).value
        router.push(pathname + "?" + `search=${value}`)
    }

    return (
        <div className="bg-background p-5 space-y-5 rounded">

            <div className="flex justify-between">
                <form className="flex gap-2" onSubmit={onSearch}>
                    <Input placeholder="Cari Data" />
                    <Button size={'sm'} variant={'outline'} className="h-full"><SearchIcon size={20} /></Button>
                </form>
                <DataTableViewOptions table={table} />
            </div>
            <div className="">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <DataTablePagination options={options} />
        </div>
    )
}

export const DataTableLoading = () => {
    return (
        <Skeleton className=" bg-background p-5 space-y-5">
            <div className="flex justify-between">
                <Skeleton className=" bg-muted-foreground h-10 w-56" />
                <Skeleton className=" bg-muted-foreground h-10 w-24" />
            </div>
            <div className="w-full space-y-3">
                <Skeleton className=" bg-muted-foreground h-10 w-full" />
                <Skeleton className=" bg-muted-foreground h-10 w-full" />
                <Skeleton className=" bg-muted-foreground h-10 w-full" />
                <Skeleton className=" bg-muted-foreground h-10 w-full" />
            </div>
        </Skeleton>
    )
}