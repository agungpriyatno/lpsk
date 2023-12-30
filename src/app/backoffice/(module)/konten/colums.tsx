"use client"

import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/ui/data-table-header"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Draft, Publication } from "@prisma/client"

import { ColumnDef } from "@tanstack/react-table"
import { FileSearchIcon, MoreHorizontal } from "lucide-react"
import { DeleteUser } from "./delete"
import Link from "next/link"


export type PublicationColumn = Publication & { selected: Draft | null }

export const columns: ColumnDef<PublicationColumn>[] = [
    {
        id: "Judul",
        accessorKey: "selected.title",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Judul" />,
    },
    {
        id: "Konten",
        accessorKey: "selected.content",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Konten" />,
        cell: ({ row }) => {
            const data: string = row.original.selected?.content.slice(0, 50) + "..."
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
        id: "Tanggal",
        accessorKey: "selected.publishedAt",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Tanggal" />,
        cell: ({ row }) => {
            const data: Date | undefined = row.original.selected?.publishedAt ?? row.original.selected?.createdAt
            return <div className="text-left font-medium">{data?.toDateString()}</div>
        },
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
                        <DropdownMenuItem className="space-x-2" asChild>
                            <Link shallow href={"/backoffice/konten/" + data.id}>
                                <div className="flex gap-2">
                                    <FileSearchIcon size={20} /> <span>Detail</span>
                                </div>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
