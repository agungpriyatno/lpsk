"use client"

import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/ui/data-table-header"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Biro, PublicationCategory } from "@prisma/client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Delete } from "./delete"
import { Update } from "./update"

export type CategoryTable = Biro & {
    _count: { draft: number, users: number }
}

export const columnSubCategory: ColumnDef<CategoryTable>[] = [
    {
        id: "Name",
        accessorKey: "name",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Name" />,
    },
    {
        id: "Total Pengguna",
        accessorKey: "_count.users",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Total Sub" />,
    },
    {
        id: "Total Draft",
        accessorKey: "_count.draft",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Total Draft" />,
    },
    {
        header: "Aksi",
        id: "actions",
        cell: ({ row }) => {
            const data = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {/* <DropdownMenuItem onSelect={(e) => e.preventDefault()} className=" space-x-2"><UpdateUser name={data.name} id={data.id} role={data.roleId ?? ""} /></DropdownMenuItem> */}
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-destructive space-x-2"><Delete id={data.id} /></DropdownMenuItem>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-destructive space-x-2"><Update id={data.id} name={data.name} /></DropdownMenuItem>
                        {/* <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-destructive space-x-2"><CreateUser id={data.code} /></DropdownMenuItem> */}
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
