import { DataTable } from "@/components/ui/data-table"
import db from "@/lib/db"
import { findManyRole } from "@/services/role-service"
import { roleColums } from "./colums"
import { CreateRole } from "./create"

type UserPageProps = {
    searchParams: {
        take?: string,
        skip?: string,
        search?: string,
    }
}

const UserPage = async ({ searchParams: { skip, take, search } }: UserPageProps) => {
    const data = await findManyRole({ query: { search: (search ?? ""), skip: Number(skip), take: Number(take) } })
    const total = await db.role.count()

    return (
        <div className="space-y-5 py-5">
            <div className="flex flex-col xl:flex-row xl:justify-between gap-3">
                <h1 className="text-2xl font-bold">Manajemen Hak Akses</h1>
                <CreateRole />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {data.map((item, i) => (
                    <div className="bg-background px-3 py-2 rounded flex flex-col gap-2" key={i}>
                        <h3 className="text-base">{item.name}</h3>
                        <div className="flex flex-col">
                            <span className=" text-2xl font-bold">{item._count.users}</span>
                            <span className=" text-xs">pengguna</span>
                        </div>
                    </div>
                ))}
            </div>
            <DataTable columns={roleColums} data={data} options={{ skip, search, take, total }} />
        </div>
    )
}

export default UserPage