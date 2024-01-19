import { ReChartBar2, ReChartPie } from "@/components/ui/rechart";
import db from "@/lib/db";
import { sessionService } from "@/services/auth";

const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Augustus", "September", "Oktober", "November", "Desember"
];

const getDate = () => {
    const now = new Date()
    const data = []
    const currentMonth = now.getMonth()
    for (let i = 0; i < 6; i++) {
        const first = new Date(new Date(now.setDate(1)).setMonth(currentMonth - i))
        const last = new Date(new Date(new Date(new Date().setFullYear(first.getFullYear())).setMonth(first.getMonth() + 1)).setDate(-1))
        data.push({ first, last })
    }
    return data
}

const getData = async () => {
    const dateList = getDate()
    const list: { name: string, value: number }[] = []
    for (let i = 0; i < dateList.length; i++) {
        const { first, last } = dateList[i];
        const count = await db.user.count({
            where: {
                createdAt: { lte: last, gte: first },
            }
        })
        list.push({
            name: monthNames[first.getMonth()],
            value: count
        })

    }
    return list

}

const Page = async () => {
    const session = await sessionService()
    const total = await db.user.count()
    const biro = await db.biro.findMany({ include: { _count: { select: { users: true } } } })

    const datetime = await getData()

    const findModule = (data: string) => {
        return session.role?.modules.find((item) => item.moduleCode === data)
    }

    if (!findModule("LPSK-PENGGUNA")) {
        return null
    }

    return (
        <div className=" space-y-5">
            <h3 className=" text-xl font-bold">Dashboard Pengguna</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                {biro.map((item, i) => (
                <div key={i} className="bg-background px-3 py-2 rounded">
                    <h3 className="text-base">{item.name}</h3>
                    <span className=" text-2xl font-bold">{item._count.users}</span>
                </div>
                ))}
            </div>
            <div className=" grid grid-cols-6 gap-2">
                <div className="bg-background p-3 rounded col-span-6 lg:col-span-2 relative">
                    <h1 className="font-bold text-base">Data Pengguna</h1>
                    <div className="relative h-[400px] w-full">
                        <ReChartPie data={biro.map((item) => {return {name: item.name, value: item._count.users}})} />
                    </div>
                </div>
                <div className="bg-background p-3 rounded col-span-6 lg:col-span-4 relative space-y-2">
                    <h1 className="font-bold text-base">Data Pengguna Ditambahkan</h1>
                    <div className="relative h-[350px] w-full">
                        <ReChartBar2 data={datetime.reverse()} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page