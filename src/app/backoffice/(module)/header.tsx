"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { sessionService } from "@/services/auth"
import { SidebarItem, listMenu } from "./sidebar"
import { usePathname } from "next/navigation"
import { Role, RoleModule, User } from "@prisma/client"
import { MenuIcon } from "lucide-react"


export const HeaderBackend = ({ data }: { data: User & { role: (Role & { modules: RoleModule[] }) | null } }) => {
    const pathname = usePathname()

    const findModule = (d: string) => {
        return data.role?.modules.find((item) => item.moduleCode === d)
    }

    return (
        <div className="bg-background px-3 py-3 absolute top-3  rounded left-0 w-full z-30">
            <div className="flex w-full justify-between place-items-center">

                <Sheet>
                    <SheetTrigger className="lg:hidden">
                        <MenuIcon/>
                    </SheetTrigger>
                    <SheetContent side={"left"}>
                        <SheetHeader>
                            <SheetTitle>
                                <div className="px-3 py-3 flex place-items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="/images/lpsk-lg.png" />
                                    </Avatar>
                                    <h1 className="text-lg font-bold">LPSK</h1>
                                </div>
                            </SheetTitle>
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
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                <p className=" font-semibold text-base">{data.name}</p>
            </div>
        </div>
    )
}

