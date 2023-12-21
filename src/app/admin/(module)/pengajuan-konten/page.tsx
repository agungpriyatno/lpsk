import { DataTable } from "@/components/ui/data-table"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import db from "@/lib/db"
import { findManyDraftService } from "@/services/draft-service"
import { findAllRole } from "@/services/role-service"
import { columns } from "./colums"
import { CreateUser } from "./create"
import { TabMenu } from "./tab"
import { $Enums } from "@prisma/client"

type UserPageProps = {
    searchParams: {
        take?: string,
        skip?: string,
        search?: string,
        status?: $Enums.StatusDraft,
    }
}

const UserPage = async ({ searchParams: { skip, take, search, status } }: UserPageProps) => {
    const data = await findManyDraftService({ query: { search: (search ?? ""), skip: Number(skip), take: Number(take) }, status })
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
            <DataTable columns={columns} data={data} options={{ skip, search, take, total }}>
                <TabMenu />
            </DataTable>
        </div>
    )
}

export default UserPage