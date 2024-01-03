import { DataTable } from "@/components/ui/data-table"
import db from "@/lib/db"
import { findManyPubCategory } from "@/services/publication-service"
import { findAllRole } from "@/services/role-service"
import { CreateUser } from "./create"
import { columnSubCategory } from "./colums"

type UserPageProps = {
    searchParams: {
        take?: string,
        skip?: string,
        search?: string,
    }
}

const UserPage = async ({ searchParams: { skip, take, search } }: UserPageProps) => {
    const data = await findManyPubCategory({ query: { search: (search ?? ""), skip: Number(skip), take: Number(take) } })
    const total = await db.publicationCategory.count()

    return (
        <div className="space-y-3 py-3">
            <div className="flex flex-col xl:flex-row xl:justify-between gap-3">
                <h1 className="text-2xl font-bold">Manajemen Kategori Konten</h1>
                {/* <CreateUser /> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                {
                    data.map((item) => (
                        <div className="bg-background px-3 py-2 rounded" key={item.code}>
                            <h3 className="text-base">{item.name}</h3>
                            <span className=" text-2xl font-bold">{item._count.draft}</span>
                        </div>
                    ))
                }
            </div>
            <DataTable columns={columnSubCategory} data={data} options={{ skip, search, take, total }} />
        </div>
    )
}

export default UserPage