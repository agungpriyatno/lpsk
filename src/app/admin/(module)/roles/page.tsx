import { DataTable } from "@/components/ui/data-table"
import db from "@/lib/db"
import { findManyUser } from "@/services/user-service"
import {  roleColums } from "./colums"
import { CreateUser } from "./create"
import { findManyRole } from "@/services/role-service"

type UserPageProps = {
    searchParams: {
        take?: string,
        skip?: string,
        search?: string,
    }
}

const UserPage = async ({ searchParams: { skip, take, search } }: UserPageProps) => {
    // await delayer(1000000)
    const data = await findManyRole({ query: { search: (search ?? ""), skip: Number(skip), take: Number(take) } })
    const total = await db.role.count()

    return (
        <div className="space-y-5 py-5">
            <div className="flex flex-col xl:flex-row xl:justify-between gap-3">
                <h1 className="text-2xl font-bold">Manajemen Pengguna</h1>
                <CreateUser/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                <div className="bg-background px-3 py-2 rounded">
                    <h3 className="text-base">Pengguna Aktif</h3>
                    <span className=" text-2xl font-bold">{0}</span>
                </div>
                <div className="bg-background px-3 py-2 rounded">
                    <h3 className="text-base">Pengguna Non Aktif</h3>
                    <span className=" text-2xl font-bold">{0}</span>
                </div>
            </div>
            <DataTable columns={roleColums} data={data} options={{ skip, search, take, total }} />
        </div>
    )
}

export default UserPage