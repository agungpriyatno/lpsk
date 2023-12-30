"use client"

import { cn } from "@/lib/utils"
import { AppContainer } from "../ui/container"
import { TextToSpeech, TextToSpeechToogler } from "./text-to-speech"
import { ThemeToogler } from "./theme"
import { useAppSelector } from "@/redux/store"
import { useEffect, useState } from "react"
import { MENU } from "@/data/menu"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"

export const AppHeader = () => {
    const [state, setState] = useState(false)
    const height = useAppSelector((state) => state.scrollReducer.value)
    useEffect(() => {
        setState(height > 400)
    }, [height])
    return (
        <div className={cn(
            'bg-transparent fixed top-0 left-0 right-0 w-full transition-colors duration-200 z-50',
            { 'bg-background shadow': state },
            { 'text-slate-100': !state }
        )}>
            <AppContainer>
                <div className='flex justify-between place-item-center py-2'>
                    <div className='flex gap-2'>
                        <Avatar className="border-2 w-8 h-8">
                            <AvatarFallback>LK</AvatarFallback>
                            <AvatarImage src="/images/lpsk-logo.png" />
                        </Avatar>
                        <Avatar className="border-2 w-8 h-8">
                            <AvatarFallback>ID</AvatarFallback>
                            <AvatarImage src="/images/indonesia.png" />
                        </Avatar>
                    </div>
                    <div className='flex'>
                        <AppNavigationMenu />
                        <TextToSpeechToogler />
                        <ThemeToogler />
                        {/* <Sheet>
                            <SheetTrigger>Open</SheetTrigger>
                            <SheetContent side={'left'}>
                                <SheetHeader>
                                    <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                                    <SheetDescription>
                                        This action cannot be undone. This will permanently delete your account
                                        and remove your data from our servers.
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet> */}
                    </div>
                </div>
            </AppContainer>
        </div>
    )
}

export const AppNavigationMenu = () => {
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