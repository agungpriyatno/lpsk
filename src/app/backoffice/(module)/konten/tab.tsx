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
                    <Link  href={pathname + "?status=PUBLISH"} legacyBehavior passHref>
                        <NavigationMenuLink active={status === "PUBLISH"} className={navigationMenuTriggerStyle()}>
                            Dinaikan
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link  href={pathname + "?status=TAKEDOWN"} legacyBehavior passHref >
                        <NavigationMenuLink active={status === "TAKEDOWN"} className={navigationMenuTriggerStyle()}>
                            Diturunkan
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}