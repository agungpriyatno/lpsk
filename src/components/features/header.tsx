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
import { ChevronDown, Divide, MenuIcon } from "lucide-react"
import { Item } from "@radix-ui/react-navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"

export const AppHeader = () => {
    const [scrollDown, setState] = useState(false)
    const [menu, setMenu] = useState(MENU)
    const pathname = usePathname()
    const height = useAppSelector((state) => state.scrollReducer.value)
    useEffect(() => {
        setState(height > 300)
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
                        " gap-2 place-items-center flex",
                        { "bg-background": scrollDown },
                    )}>
                        <ul className=" place-items-center hidden lg:flex">
                            {
                                menu.map((item, i) => <AppNavigationMenu key={i} data={item} scrollDown={scrollDown} active={pathname.includes(item.href)} />)
                            }
                        </ul>
                        <div className={cn("flex", { 'text-slate-100': !scrollDown })}>
                            <TextToSpeechToogler />
                            <ThemeToogler />
                            <Sheet>
                                <SheetTrigger>
                                    <MenuIcon/>
                                </SheetTrigger>
                                <SheetContent side={'left'}>
                                    <SheetHeader>
                                        <SheetTitle>
                                            <div className="px-3 py-3 flex place-items-center gap-2">
                                                <Avatar>
                                                    <AvatarImage src="/images/lpsk-lg.png" />
                                                </Avatar>
                                                <h1 className="text-lg font-bold">LPSK</h1>
                                            </div>
                                        </SheetTitle>
                                        <ul className="flex flex-col gap-2">
                                            {
                                                menu.map((item, i) => {
                                                    if (item.children) {
                                                        return (
                                                            <li key={i} className={cn(
                                                                "px-3 py-1.5 hover:bg-muted rounded text-left group",
                                                                { "bg-muted": pathname.includes(item.href) }
                                                            )}>
                                                                {item.title}
                                                                <ul className=" group-hover:block hidden">
                                                                    {item.children.map((item, j) => (
                                                                        <Link href={item.href} key={j}>
                                                                            <li className={cn(
                                                                                "px-3 py-1.5 hover:bg-muted-foreground/50 rounded text-left",
                                                                                { "bg-muted": pathname === item.href }
                                                                            )}>{item.title}</li>
                                                                        </Link>
                                                                    ))}
                                                                </ul>
                                                            </li>
                                                        )
                                                    }
                                                    return (
                                                        <Link href={item.href} key={i}>
                                                            <li className={cn(
                                                                "px-3 py-1.5 hover:bg-muted rounded text-left",
                                                                { "bg-muted": pathname.includes(item.href) }
                                                            )}>{item.title}</li>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
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
                    { 'font-bold': active }
                )}>
                    <Link href={href}>{title}</Link>
                </div>
            </li>
        )
    }
    return (
        <li className="relative cursor-pointer group" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} >
            <div className={cn(
                "p-3 transition-all duration-300",
                { 'hover:bg-muted': scrollDown },
                { 'text-slate-100': !scrollDown },
                { 'bg-muted': active && scrollDown },
                { 'font-bold': active }
            )}>
                <div className="flex gap-2 place-items-center">
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
                        {children.map((sub, i) => (
                            <li className="hover:bg-muted px-3 py-2" key={i}>
                                <Link href={sub.href} className=" truncate">{sub.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>}
        </li>
    )
}
