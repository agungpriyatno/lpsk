"use client"

import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/ui/data-table-header"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Role } from "@prisma/client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { DeleteRole } from "./delete"
import { UpdateRole } from "./update"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type RoleTable = Role & {
    _count: {
        modules: number;
        users: number;
    };
    modules: {
        roleId: string;
        moduleCode: string;
    }[];
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
        accessorKey: "descriptions",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Deskripsi" />,
    },
    {
        id: "Total Modul",
        accessorKey: "_count.modules",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Total Modul" />,
    },
    {
        id: "Total Pengguna",
        accessorKey: "_count.users",
        header: ({ column }) =>
            <DataTableColumnHeader column={column} title="Total Pengguna" />,
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
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className=" text-destructive space-x-2"><DeleteRole id={data.id} /></DropdownMenuItem>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className=" space-x-2"><UpdateRole id={data.id} name={data.name} descriptions={data.descriptions ?? ""} modules={data.modules} /></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
