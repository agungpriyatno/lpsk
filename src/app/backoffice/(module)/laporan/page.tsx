import { DataTable } from "@/components/ui/data-table"
import db from "@/lib/db"
import { findManyPubCategory } from "@/services/publication-service"
import { findAllRole } from "@/services/role-service"

import { columnSubCategory } from "./colums"
import { Input } from "@/components/ui/input"
import { Create } from "./create"

type UserPageProps = {
    searchParams: {
        take?: string,
        skip?: string,
        search?: string,
    }
}

const UserPage = async ({ searchParams: { skip, take, search } }: UserPageProps) => {
    const data = await db.report.findMany({
        skip: isNaN(Number(skip)) ? 0 : Number(skip),
        take: isNaN(Number(take)) ? 10 : Number(take),
        where: {
            OR: [
                { name: { contains: search } },
                { email: { contains: search } },
                { phone: { contains: search } },
            ]
        }
    })

    const total = await db.report.count({
        where: {
            OR: [
                { name: { contains: search } },
                { email: { contains: search } },
                { phone: { contains: search } },
            ]
        }
    })

    return (
        <div className="space-y-3 py-3">
            <div className="flex flex-col xl:flex-row xl:justify-between gap-3">
                <h1 className="text-2xl font-bold">Manajemen Biro</h1>
                <Create />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                <div className="bg-background px-3 py-2 rounded">
                    <h3 className="text-base">Total Laporan</h3>
                    <span className=" text-2xl font-bold">{total}</span>
                </div>
            </div>
            <DataTable columns={columnSubCategory} data={data} options={{ skip, search, take, total }} />
        </div>
    )
}

export default UserPage