"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { signOutService } from "@/services/auth"
import { FileIcon, LayoutDashboardIcon, NewspaperIcon, ShieldIcon, UserIcon, icons } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const SideBar = () => {
    const pathname = usePathname()
    return (
        <div className="bg-background h-full w-full rounded py-3 flex flex-col justify-between">
            <div>
                <div className="px-3 py-3 flex place-items-center gap-2">
                    <Avatar>
                        <AvatarImage src="/images/lpsk-lg.png"/>
                    </Avatar>
                    <h1 className="text-lg font-bold">LPSK</h1>
                </div>
                <ul className="px-3 space-y-1">
                    <SidebarItem icon={<LayoutDashboardIcon size={20} />} active={pathname.includes("/backoffice/dashboard")} name="Dashboard" url="/backoffice/dashboard" />
                    <SidebarItem icon={<UserIcon size={20} />} active={pathname.includes("/backoffice/pengguna")} name="Pengguna" url="/backoffice/pengguna" />
                    <SidebarItem icon={<UserIcon size={20} />} active={pathname.includes("/backoffice/biro")} name="Biro" url="/backoffice/biro" />
                    <SidebarItem icon={<NewspaperIcon size={20} />} active={pathname.includes("/backoffice/konten")} name="Konten" url="/backoffice/konten" />
                    <SidebarItem icon={<FileIcon size={20} />} active={pathname.includes("/backoffice/pengajuan-draft")} name="Pengajuan Draft" url="/backoffice/pengajuan-draft" />
                    <SidebarItem icon={<FileIcon size={20} />} active={pathname.includes("/backoffice/persetujuan-draft")} name="Persetujuan Draft" url="/backoffice/persetujuan-draft" />
                    <SidebarItem icon={<FileIcon size={20} />} active={pathname.includes("/backoffice/persetujuan-konten")} name="Persetujuan Konten" url="/backoffice/persetujuan-konten" />
                    <SidebarItem icon={<FileIcon size={20} />} active={pathname.includes("/backoffice/sorot")} name="Sorot Konten" url="/backoffice/sorot" />
                    <SidebarItem icon={<FileIcon size={20} />} active={pathname.includes("/backoffice/kategori")} name="Kategori Konten" url="/backoffice/kategori" />
                    <SidebarItem icon={<ShieldIcon size={20} />} active={pathname.includes("/backoffice/hak-akses")} name="Hak Akses" url="/backoffice/hak-akses" />
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
            <Link  href={url}>
                <div className="flex gap-2">
                    {icon}
                    <span>{name}</span>
                </div>
            </Link>
        </li>
    )
}