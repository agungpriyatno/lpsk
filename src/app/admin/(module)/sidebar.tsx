"use client"

import { cn } from "@/lib/utils"
import { FileIcon, LayoutDashboardIcon, NewspaperIcon, ShieldIcon, UserIcon, icons } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const SideBar = () => {
    const pathname = usePathname()
    return (
        <div className=" bg-background h-full w-full rounded py-3">
            <ul>
                <SidebarItem icon={<LayoutDashboardIcon size={20} />} active={pathname.includes("/admin/dashboard")} name="Dashboard" url="/admin/dashboard" />
                <SidebarItem icon={<UserIcon size={20} />} active={pathname.includes("/admin/pengguna")} name="Pengguna" url="/admin/pengguna" />
                <SidebarItem icon={<NewspaperIcon size={20} />} active={pathname.includes("/admin/konten")} name="Konten" url="/admin/konten" />
                <SidebarItem icon={<FileIcon size={20} />} active={pathname.includes("/admin/pengajuan-konten")} name="Pengajuan Konten" url="/admin/pengajuan-konten" />
                <SidebarItem icon={<ShieldIcon size={20} />} active={pathname.includes("/admin/hak-akses")} name="Hak Akses" url="/admin/hak-akses" />
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