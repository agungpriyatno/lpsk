import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import db from "@/lib/db"
import { findManyDraftService } from "@/services/draft-service"
import { $Enums } from "@prisma/client"
import Link from "next/link"
import { columns } from "./colums"
import { TabMenu } from "./tab"


type PageProps = {
    searchParams: {
        take?: string,
        skip?: string,
        search?: string,
        status?: $Enums.StatusDraft,
    }
}

const Page = async ({ searchParams: { skip, take, search, status } }: PageProps) => {
    const data = await db.draft.findMany({
        skip: isNaN(Number(skip)) ? 0 : Number(skip),
        take: isNaN(Number(take)) ? 10 : Number(take),
        orderBy: {createdAt: "desc"},
        include: { selected: true },
        where: {
            AND: [
                { NOT: { status: "PROCESS" } },
                { OR: [{ title: { contains: search } }, { content: { contains: search } }] },
                status === "ACCEPT" ? { status, NOT: { selected: null } } :
                    status === "PROCESS" ? { status: "ACCEPT", selected: null } : { status }
            ]
        }
    })

    const total = await db.draft.count({ where: { AND: [{ NOT: { status: "PROCESS" } }] } })
    const rejected = await db.draft.count({ where: { status: "REJECT" } })
    const processed = await db.draft.count({ where: { AND: [{ status: "ACCEPT" }, { selected: null }] } })
    const accepted = await db.draft.count({ where: { AND: [{ status: "ACCEPT" }, { NOT: { selected: null } }] } })
    const selectedTotal = status === "ACCEPT" ? accepted : status === "PROCESS" ? processed : status === "REJECT" ? rejected : total

    return (
        <div className="space-y-3 py-3">
            <div className="flex flex-col xl:flex-row xl:justify-between gap-3 place-items-center">
                <h1 className="text-2xl font-bold">Manajemen Persetujuan Draft</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                <div className="bg-background px-3 py-2 rounded">
                    <h3 className="text-base">Semua Pengajuan</h3>
                    <span className=" text-2xl font-bold">{total}</span>
                </div>
                <div className="bg-background px-3 py-2 rounded">
                    <h3 className="text-base">Diajukan</h3>
                    <span className=" text-2xl font-bold">{processed}</span>
                </div>
                <div className="bg-background px-3 py-2 rounded">
                    <h3 className="text-base">Diterima</h3>
                    <span className=" text-2xl font-bold">{accepted}</span>
                </div>
                <div className="bg-background px-3 py-2 rounded">
                    <h3 className="text-base">Ditolak</h3>
                    <span className=" text-2xl font-bold">{rejected}</span>
                </div>
            </div>
            <DataTable columns={columns} data={data} options={{ skip, search, take, total: selectedTotal }}>
                <TabMenu />
            </DataTable>
        </div>
    )
}

export default Page