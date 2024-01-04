"use client"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

export const TabMenu = () => {
    const pathname = usePathname()
    const searchParam = useSearchParams()
    const status = searchParam.get("status")
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link  href={pathname} legacyBehavior passHref>
                        <NavigationMenuLink active={!status} className={navigationMenuTriggerStyle()}>
                            Semua
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link  href={pathname + "?status=PROCESS"} legacyBehavior passHref>
                        <NavigationMenuLink active={status === "PROCESS"} className={navigationMenuTriggerStyle()}>
                            Diproses
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link  href={pathname + "?status=ACCEPT"} legacyBehavior passHref >
                        <NavigationMenuLink active={status === "ACCEPT"} className={navigationMenuTriggerStyle()}>
                            Diterima
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link  href={pathname + "?status=REJECT"} legacyBehavior passHref>
                        <NavigationMenuLink  active={status === "REJECT"} className={navigationMenuTriggerStyle()}>
                            Ditolak
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}