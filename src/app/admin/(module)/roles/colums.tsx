"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/ui/data-table-header"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Role, RoleModule, User } from "@prisma/client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Trash2Icon } from "lucide-react"
import { UpdateUser } from "./update"
import { DeleteUser } from "./delete"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type RoleTable = Role & {
    _count: { modules: number }
}

export const roleColums: ColumnDef<RoleTable>[] = [
    // {
    //     id: "select",
    //     header: ({ table }) => (
    //         <Checkbox
    //             checked={
    //                 table.getIsAllPageRowsSelected() ||
    //                 (table.getIsSomePageRowsSelected() && "indeterminate")
    //             }
    //             onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //             aria-label="Select all"
    //         />
    //     ),
    //     cell: ({ row }) => (
    //         <Checkbox
    //             checked={row.getIsSelected()}
    //             onCheckedChange={(value) => row.toggleSelected(!!value)}
    //             aria-label="Select row"
    //         />
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    // },
    {
        id: "Name",
        accessorKey: "name",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Name" />,
    },
    {
        id: "Deskripsi",
        accessorKey: "deskription",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Deskripsi" />,
    },
    {
        id: "Modul",
        accessorKey: "_count.module",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Modul" />,
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
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className=" space-x-2"><UpdateUser name={data.name} id={data.id} /></DropdownMenuItem>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className=" text-destructive space-x-2"><DeleteUser id={data.id} /></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
