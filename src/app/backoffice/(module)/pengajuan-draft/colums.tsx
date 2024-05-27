"use client"

import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/ui/data-table-header"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Draft } from "@prisma/client"

import { ColumnDef } from "@tanstack/react-table"
import { Edit2Icon, FileSearchIcon, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { DeleteContent } from "./delete"
import { da, ro } from "date-fns/locale"


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
            const data: string = row.original.content?.replace(/(<([^>]+)>)/ig, '').slice(0, 50) + "..."
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
                       {
                        data.status != "ACCEPT" &&  <DropdownMenuItem onSelect={(e) => e.preventDefault()} className=" text-destructive space-x-2"><DeleteContent id={data.id} /></DropdownMenuItem>
                       }
                        <DropdownMenuItem className="space-x-2" asChild>
                            <Link  href={"/backoffice/pengajuan-draft/" + data.id}>
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
