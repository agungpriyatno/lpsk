"use client"

import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/ui/data-table-header"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Draft } from "@prisma/client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { DeleteUser } from "./delete"


export type DraftTable = Draft

export const columns: ColumnDef<DraftTable>[] = [
    {
        id: "Judul",
        accessorKey: "title",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Judul" />,
    },
    {
        id: "Konten",
        accessorKey: "content",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Konten" />,
        cell: ({ row }) => {
            const data: string = row.original.content.slice(0, 50) + "..."
            return <div className="text-left font-medium">{data}</div>
        },
    },
    {
        id: "Status",
        accessorKey: "status",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Status" />,
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
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className=" text-destructive space-x-2"><DeleteUser id={data.id} /></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
