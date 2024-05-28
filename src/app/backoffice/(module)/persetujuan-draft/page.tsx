import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import db from "@/lib/db"
import { findManyDraftService } from "@/services/draft-service"
import { $Enums } from "@prisma/client"
import Link from "next/link"
import { columns } from "./colums"
import { TabMenu } from "./tab"
import { sessionService } from "@/services/auth"


type PageProps = {
    searchParams: {
        take?: string,
        skip?: string,
        search?: string,
        status?: $Enums.StatusDraft,
    }
}

const Page = async ({ searchParams: { skip, take, search, status } }: PageProps) => {
    // const data = await findManyDraftService({ query: { search: (search ?? ""), skip: Number(skip), take: Number(take) }, status })
    const session = await sessionService()

    const data = await db.draft.findMany({
        include: { author: true },
        orderBy: { createdAt: "desc" },
        skip: isNaN(Number(skip)) ? 0 : Number(skip),
        take: isNaN(Number(take)) ? 10 : Number(take),
        where: {
            AND: [
                { status },
                { OR: [{ title: { contains: search, mode: "insensitive" } }, { content: { contains: search, mode: "insensitive" } }]] },
                { author: { biroId: session.biroId ?? "" } }
            ]
        },
    })

    const totalPage = await db.draft.count({
        where: { AND: [{ status }, { OR: [{ title: { contains: search, mode: "insensitive" } }, { content: { contains: search, mode: "insensitive" } }]] }, { author: { biro: { id: session.biroId ?? "" } } }] },
    })

    const total = await db.draft.count({ where: { author: { biro: { id: session.biroId ?? "" } } } })
    const process = await db.draft.count({ where: { AND: [{ status: "PROCESS" }, { author: { biro: { id: session.biroId ?? "" } } }] } })
    const rejected = await db.draft.count({ where: { AND: [{ status: "REJECT" }, { author: { biro: { id: session.biroId ?? "" } } }] } })
    const accepted = await db.draft.count({ where: { AND: [{ status: "ACCEPT" }, { author: { biro: { id: session.biroId ?? "" } } }] } })

    const selectedTotal = status === "ACCEPT" ? accepted : status === "PROCESS" ? process : status === "REJECT" ? rejected : total

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
                    <h3 className="text-base">Pengajuan Diproses</h3>
                    <span className=" text-2xl font-bold">{process}</span>
                </div>
                <div className="bg-background px-3 py-2 rounded">
                    <h3 className="text-base">Pengajuan Diterima</h3>
                    <span className=" text-2xl font-bold">{accepted}</span>
                </div>
                <div className="bg-background px-3 py-2 rounded">
                    <h3 className="text-base">Pengajuan Ditolak</h3>
                    <span className=" text-2xl font-bold">{rejected}</span>
                </div>
            </div>
            <DataTable columns={columns} data={data} options={{ skip, search, take, total: totalPage }}>
                <TabMenu />
            </DataTable>
        </div>
    )
}

export default Page