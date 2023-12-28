"use client"

import { cn } from "@/lib/utils"
import { FileIcon, LayoutDashboardIcon, NewspaperIcon, ShieldIcon, UserIcon, icons } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const SideBar = () => {
    const pathname = usePathname()
    return (
        <div className=" bg-background h-full w-full rounded py-3">
            <div className="px-3 py-3">
                <h1 className="text-lg font-bold text-center">LPSK ADMIN</h1>
            </div>
            <ul>
                <SidebarItem icon={<LayoutDashboardIcon size={20} />} active={pathname.includes("/backoffice/dashboard")} name="Dashboard" url="/backoffice/dashboard" />
                <SidebarItem icon={<UserIcon size={20} />} active={pathname.includes("/backoffice/pengguna")} name="Pengguna" url="/backoffice/pengguna" />
                <SidebarItem icon={<NewspaperIcon size={20} />} active={pathname.includes("/backoffice/konten")} name="Konten" url="/backoffice/konten" />
                <SidebarItem icon={<FileIcon size={20} />} active={pathname.includes("/backoffice/pengajuan-konten")} name="Pengajuan Konten" url="/backoffice/pengajuan-konten" />
                <SidebarItem icon={<ShieldIcon size={20} />} active={pathname.includes("/backoffice/hak-akses")} name="Hak Akses" url="/backoffice/hak-akses" />
            </ul>
        </div>
    )
}

export const SidebarItem = ({ icon, name, url, active }: { active: boolean, name: string, url: string, icon: JSX.Element }) => {
    return (
        <li className={cn("px-3 py-2 hover:bg-muted text-sm", { "bg-muted": active })}>
            <Link href={url}>
                <div className="flex gap-2">
                    {icon}
                    <span>{name}</span>
                </div>
            </Link>
        </li>
    )
}