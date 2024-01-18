import { DataTable } from "@/components/ui/data-table"
import db from "@/lib/db"

import { columnSubCategory } from "./colums"

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
        orderBy: {createdAt: "desc"},
        where: {
            OR: search != undefined ?  [
                { name: { contains: search } },
                { email: { contains: search } },
                { phone: { contains: search } },
            ] : undefined
        }
    })

    const total = await db.report.count({
        where: {
            OR: search ?  [
                { name: { contains: search } },
                { email: { contains: search } },
                { phone: { contains: search } },
            ] : undefined
        }
    })

    return (
        <div className="space-y-3 py-3">
            <div className="flex flex-col xl:flex-row xl:justify-between gap-3">
                <h1 className="text-2xl font-bold">Manajemen Laporan</h1>
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