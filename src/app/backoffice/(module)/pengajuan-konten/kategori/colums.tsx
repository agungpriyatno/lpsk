"use client"

import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/ui/data-table-header"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PublicationCategory } from "@prisma/client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { DeleteUser } from "./delete"

export type CategoryTable = PublicationCategory & {
    _count: { subs: number, draft: number }
}

export const columnSubCategory: ColumnDef<CategoryTable>[] = [
    {
        id: "Name",
        accessorKey: "name",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Name" />,
    },
    {
        id: "Total Sub",
        accessorKey: "_count.subs",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Total Sub" />,
    }, 
    {
        id: "Total Pengajuan",
        accessorKey: "_count.draft",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Total Pengajuan" />,
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
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className=" text-destructive space-x-2"><DeleteUser id={data.code} /></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
