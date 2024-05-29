"use client";

import { Button } from "@/components/ui/button";
import { DataTableColumnHeader } from "@/components/ui/data-table-header";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Draft, Publication, PublicationCategory } from "@prisma/client";

import { ColumnDef } from "@tanstack/react-table";
import { Edit2Icon, FileSearchIcon, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { DeleteContent } from "./delete";

type DraftFull = Draft & { category: any };
export type PublicationColumn = Publication & {
  selected?: DraftFull | null;
};

export const columns: ColumnDef<PublicationColumn>[] = [
  {
    id: "Judul",
    accessorKey: "selected.title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Judul" />
    ),
  },
  {
    id: "Konten",
    accessorKey: "selected.content",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Konten" />
    ),
    cell: ({ row }) => {
      const data: string =
        row.original.selected?.content
          ?.replace(/(<([^>]+)>)/gi, "")
          .slice(0, 50) + "...";
      return <div className="text-left font-medium">{data}</div>;
    },
  },
  {
    id: "Status",
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    id: "Tanggal",
    accessorKey: "selected.publishedAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tanggal" />
    ),
    cell: ({ row }) => {
      // row.original.selected?.category
      const data: Date | undefined =
        row.original.selected?.publishedAt ?? row.original.selected?.createdAt;
      return (
        <div className="text-left font-medium">{data?.toDateString()}</div>
      );
    },
  },
  {
    id: "Kategori",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Kategori" />
    ),
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">
          {row.original.selected?.category?.name ?? "Tanpa Kategori"}
        </div>
      );
    },
  },
  {
    header: "Aksi",
    id: "actions",
    cell: ({ row }) => {
      const data = row.original;
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
            {data.status == "TAKEDOWN" && <DeleteContent id={data.id} />}
            <DropdownMenuItem className="space-x-2" asChild>
              <Link href={"/backoffice/konten/" + data.id}>
                <div className="flex gap-2">
                  <FileSearchIcon size={20} /> <span>Detail</span>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="space-x-2" asChild>
              <Link href={`/backoffice/konten/ubah/${data.selected?.id}`}>
                <div className="flex gap-2">
                  <Edit2Icon size={20} /> <span>Ubah</span>
                </div>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
