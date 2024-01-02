"use client"

import { MENU } from "@/data/menu"
import { cn } from "@/lib/utils"
import { useAppSelector } from "@/redux/store"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { AppContainer } from "../ui/container"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu"
import { TextToSpeech, TextToSpeechToogler } from "./text-to-speech"
import { ThemeToogler } from "./theme"
import { motion } from "framer-motion"
import { TMenuItem } from "@/types/utils"
import { ChevronDown } from "lucide-react"

export const AppHeader = () => {
    const [scrollDown, setState] = useState(false)
    const [menu, setMenu] = useState(MENU)
    const pathname = usePathname()
    const height = useAppSelector((state) => state.scrollReducer.value)
    useEffect(() => {
        setState(height > 400)
    }, [height])

    return (
        <div className={cn(
            'bg-transparent fixed top-0 left-0 right-0 w-full transition-colors duration-200 z-50',
            { 'bg-background shadow': scrollDown },
        )}>
            <AppContainer>
                <div className="flex justify-between place-items-center">
                    <div className="flex gap-2">
                        <Avatar className="border-2 w-8 h-8">
                            <AvatarFallback>LK</AvatarFallback>
                            <AvatarImage src="/images/lpsk-logo.png" />
                        </Avatar>
                        <Avatar className="border-2 w-8 h-8">
                            <AvatarFallback>ID</AvatarFallback>
                            <AvatarImage src="/images/indonesia.png" />
                        </Avatar>
                    </div>
                    <div className={cn(
                        "flex gap-2 place-items-center",
                        { "bg-background": scrollDown },
                    )}>
                        <ul className="flex place-items-center">
                            {
                                menu.map((item) => <AppNavigationMenu data={item} scrollDown={scrollDown} active={pathname.includes(item.href)} />)
                            }
                        </ul>
                        <div className={cn("flex", { 'text-slate-100': !scrollDown })}>
                            <TextToSpeechToogler />
                            <ThemeToogler />
                        </div>
                    </div>
                </div>
            </AppContainer>
        </div>
    )
}

export const AppNavigationMenu = ({ data: { title, href, children }, scrollDown, active }: { data: TMenuItem, scrollDown: boolean, active: boolean }) => {

    const [open, setOpen] = useState(false)

    if (!children) {
        return (
            <li className="relative text-sm cursor-pointer">
                <div className={cn(
                    "p-3 transition-all duration-300",
                    { "hover:bg-muted": scrollDown },
                    { 'text-slate-100': !scrollDown },
                    { "bg-muted": active && scrollDown },
                    { 'font-bold': active}
                )}>
                    <span className="text-sm">{title}</span>
                </div>
            </li>
        )
    }
    return (
        <li className="relative cursor-pointer group" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} >
            <div className={cn(
                "p-3 transition-all duration-300",
                { "hover:bg-muted": scrollDown },
                { 'text-slate-100': !scrollDown },
            )}>
                <div className="flex gap-2">
                    <span className="text-sm">{title}</span>
                    <ChevronDown size={14} className=" group-hover:rotate-180 transition-all duration-300" />
                </div>
            </div>
            {open && <motion.div
                className=" absolute left-0 top-full -z-30"
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
                exit={{ y: 300, opacity: 0, transition: { duration: 0.3 } }}
            >
                <div className=" py-2 bg-background rounded border-none w-fit">
                    <ul className="text-sm">
                        {children.map((sub) => (
                            <li className="hover:bg-muted px-3 py-2">
                                <Link href={sub.href} className=" truncate">{sub.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>}
        </li>
    )
}

export const AppNavigastionMenu = () => {
    const currentPath = usePathname()
    const [menu] = useState(MENU)
    return (
        <NavigationMenu className="hidden xl:block">
            <NavigationMenuList>
                {menu.map((item, i) => {

                    if (item.children) {
                        return (
                            <NavigationMenuItem key={i}>
                                <NavigationMenuTrigger className="bg-transparent">
                                    <TextToSpeech>
                                        {item.title}
                                    </TextToSpeech>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent >
                                    <ul className="grid gap-3 p-4 w-[800px] md:grid-cols-2 ">
                                        {item.children.map((subItem, j) => (
                                            <li key={`${i}-${j}`}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={subItem.href}
                                                        className={cn(
                                                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")}>
                                                        <div className="text-sm font-medium leading-none">
                                                            <TextToSpeech>
                                                                {subItem.title}
                                                            </TextToSpeech>
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )
                    }
                    return (
                        <NavigationMenuItem key={i}>
                            <Link shallow href={item.href} legacyBehavior passHref>
                                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                                    <TextToSpeech>
                                        {item.title}
                                    </TextToSpeech>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}