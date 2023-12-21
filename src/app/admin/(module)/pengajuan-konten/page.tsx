import { DataTable } from "@/components/ui/data-table"
import { UserTable, columns } from "./colums"
import { payments } from "@/data/table-dummy"
import db from "@/lib/db"
import { findManyUser } from "@/services/user-service"
import { Button } from "@/components/ui/button"
import { CreateUser } from "./create"
import { delayer } from "@/helpers/delay"
import { findAllRole, findManyRole } from "@/services/role-service"

type UserPageProps = {
    searchParams: {
        take?: string,
        skip?: string,
        search?: string,
    }
}

const UserPage = async ({ searchParams: { skip, take, search } }: UserPageProps) => {
    const data = await findManyUser({ query: { search: (search ?? ""), skip: Number(skip), take: Number(take) } })
    const total = await db.user.count()
    const active = await db.user.count({ where: { NOT: { account: { verifiedAt: null } } } })
    const deactive = await db.user.count({ where: { account: { verifiedAt: null } } })
    const roles = await findAllRole()

    return (
        <div className="space-y-5 py-5">
            <div className="flex flex-col xl:flex-row xl:justify-between gap-3">
                <h1 className="text-2xl font-bold">Manajemen Pengajuan Konten</h1>
                <CreateUser />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                <div className="bg-background px-3 py-2 rounded">
                    <h3 className="text-base">Pengguna Aktif</h3>
                    <span className=" text-2xl font-bold">{active}</span>
                </div>
                <div className="bg-background px-3 py-2 rounded">
                    <h3 className="text-base">Pengguna Non Aktif</h3>
                    <span className=" text-2xl font-bold">{deactive}</span>
                </div>
            </div>
            <DataTable columns={columns} data={data} options={{ skip, search, take, total }} />
        </div>
    )
}

export default UserPage