"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { signOutService } from "@/services/auth"
import { RoleModule } from "@prisma/client"
import { FileCheck2Icon, FileCheckIcon, FileIcon, FileUpIcon, FlagIcon, HighlighterIcon, LayoutDashboardIcon, LayoutGridIcon, LucideIcon, NewspaperIcon, ShieldIcon, User2Icon, UserIcon, Users2Icon, icons } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

type TMenuSidebar = {
    name: string,
    url: string,
    code?: string,
    icon: JSX.Element,
}

const listMenu: TMenuSidebar[] = [
    {
        name: "Dashboard",
        url: "/backoffice/dashboard",
        icon: <LayoutDashboardIcon size={20} />
    },
    {
        name: "Pengguna",
        url: "/backoffice/pengguna",
        code: "LPSK-PENGGUNA",
        icon: <User2Icon size={20} />
    },
    {
        name: "Birokrasi",
        url: "/backoffice/biro",
        code: "LPSK-BIRO",
        icon: <Users2Icon size={20} />
    },
    {
        name: "Pengajuan Draft",
        url: "/backoffice/pengajuan-draft",
        code: "LPSK-PENGAJUAN-DRAFT",
        icon: <FileUpIcon size={20} />
    },
    {
        name: "Persetujuan Draft",
        url: "/backoffice/persetujuan-draft",
        code: "LPSK-PERSETUJUAN-DRAFT",
        icon: <FileCheck2Icon size={20} />
    },
    {
        name: "Persetujuan Konten",
        url: "/backoffice/persetujuan-konten",
        code: "LPSK-PERSETUJUAN-KONTEN",
        icon: <FileCheckIcon size={20} />
    },
    {
        name: "Konten",
        url: "/backoffice/konten",
        code: "LPSK-KONTEN",
        icon: <NewspaperIcon size={20} />
    },
    {
        name: "Sorot Konten",
        url: "/backoffice/sorot",
        code: "LPSK-SOROT-KONTEN",
        icon: <HighlighterIcon size={20} />
    },
    {
        name: "Ketegori Konten",
        url: "/backoffice/kategori",
        code: "LPSK-KATEGORI-KONTEN",
        icon: <LayoutGridIcon size={20} />
    },
    {
        name: "Laporan",
        url: "/backoffice/laporan",
        code: "LPSK-LAPORAN",
        icon: <FlagIcon size={20} />
    },
    {
        name: "Hak Akses",
        url: "/backoffice/hak-akses",
        code: "LPSK-HAK-AKSES",
        icon: <ShieldIcon size={20} />
    }
]

export const SideBar = ({ modules }: { modules: RoleModule[] }) => {
    const pathname = usePathname()

    const findModule = (data: string) => {
        return modules.find((item) => item.moduleCode === data)
    }
    return (
        <div className="bg-background h-full w-full rounded py-3 flex flex-col justify-between">
            <div>
                <div className="px-3 py-3 flex place-items-center gap-2">
                    <Avatar>
                        <AvatarImage src="/images/lpsk-lg.png" />
                    </Avatar>
                    <h1 className="text-lg font-bold">LPSK</h1>
                </div>
                <ul className="px-3 space-y-1">
                    {listMenu.map((item) => {
                        if (!item.code) {
                            return (
                                <SidebarItem key={item.code} icon={item.icon} active={pathname.includes(item.url)} name={item.name} url={item.url} />
                            )
                        } else {
                            if (findModule(item.code ?? "")) {
                                return (
                                    <SidebarItem key={item.code} icon={item.icon} active={pathname.includes(item.url)} name={item.name} url={item.url} />
                                )
                            }
                        }
                        return <div key={item.code}></div>
                    })}
                </ul>
            </div>
            <div className="w-full px-3">
                <Button className="w-full" onClick={() => signOutService()} variant={'destructive'}>Keluar</Button>
            </div>
        </div>
    )
}

export const SidebarItem = ({ icon, name, url, active }: { active: boolean, name: string, url: string, icon: JSX.Element }) => {
    return (
        <li className={cn("px-3 py-2 hover:bg-muted text-sm rounded", { "bg-muted": active })}>
            <Link href={url}>
                <div className="flex gap-2">
                    {icon}
                    <span>{name}</span>
                </div>
            </Link>
        </li>
    )
}