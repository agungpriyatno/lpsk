import { DataTable } from "@/components/ui/data-table"
import db from "@/lib/db"
import { findManyPublicationService } from "@/services/publication-service"
import { $Enums } from "@prisma/client"
import { columns } from "./colums"
import { CreateUser } from "./create"
import { TabMenu } from "./tab"

type PageProps = {
    searchParams: {
        take?: string,
        skip?: string,
        search?: string,
        status?: $Enums.StatusPublication,
    }
}

const Page = async ({ searchParams: { skip, take, search, status } }: PageProps) => {
    const data = await findManyPublicationService({ query: { search: (search ?? ""), skip: Number(skip), take: Number(take) }, status })
    const total = await db.publication.count()
    const publish = await db.publication.count({ where: { status: "PUBLISH" } })
    const takedown = await db.publication.count({ where: { status: "TAKEDOWN" } })
    const totalStatus = status === "PUBLISH" ? publish : status === "TAKEDOWN" ? takedown : total
    return (
        <div className="space-y-5 py-5">
            <div className="flex flex-col xl:flex-row xl:justify-between gap-3">
                <h1 className="text-2xl font-bold">Manajemen Konten</h1>
                {/* <CreateUser /> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                <div className="bg-background px-3 py-2 rounded">
                    <h3 className="text-base">Konten</h3>
                    <span className=" text-2xl font-bold">{total}</span>
                </div>
                <div className="bg-background px-3 py-2 rounded">
                    <h3 className="text-base">Konten Dinaikan</h3>
                    <span className=" text-2xl font-bold">{publish}</span>
                </div>
                <div className="bg-background px-3 py-2 rounded">
                    <h3 className="text-base">Konten Diturunkan</h3>
                    <span className=" text-2xl font-bold">{takedown}</span>
                </div>
            </div>
            <DataTable columns={columns} data={data} options={{ skip, search, take, total: totalStatus }}>
                <TabMenu />
            </DataTable>
        </div>
    )
}

export default Page