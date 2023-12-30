"use client"
import { Button } from "@/components/ui/button"
import { AppContainer } from "@/components/ui/container"
import { Input } from "@/components/ui/input"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { SearchIcon } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FormEvent } from "react"

export const TabMenu = ({ data }: {
    data: {
        subs: {
            id: string;
            categoryId: string;
            name: string;
            createdAt: Date;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
    }
}) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const status = searchParams.get("status")
    const router = useRouter()
    const onSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const params: string[] = []
        if (searchParams.get("status")) params.push(`status=${searchParams.get("status")}`)
        params.push("search=" + (event.currentTarget.elements[0] as HTMLInputElement).value)
        router.push(pathname + "?" + params.join("&"))
    }
    return (
        <AppContainer className="flex flex-col place-items-center gap-5 w-screen">
            
            <NavigationMenu className="w-full">
                <NavigationMenuList className=" flex gap-4">
                    {data.subs.map((item) => (
                        <NavigationMenuItem key={item.id} >
                            <Link shallow href={"/publikasi?status=" + item.id} legacyBehavior passHref>
                                <NavigationMenuLink active={item.id === status} className={navigationMenuTriggerStyle()}>
                                    {item.name}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <form className="flex gap-2 w-full" onSubmit={onSearch}>
                <Input placeholder="Cari Data" className=" bg-background" />
                <Button variant={'default'} className=""><SearchIcon size={20} /></Button>
            </form>
        </AppContainer>
    )
}