"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { Button } from "../ui/button"
import { Loader2Icon, Moon, Sun } from "lucide-react"
import useHasMounted from "@/hooks/mounted"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export const ThemeToogler = () => {
    const { theme, setTheme } = useTheme()
    const isMounted = useHasMounted()
    return (
        <Button variant={'ghost'} size={'icon'} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {isMounted && theme === "light" && <Sun />}
            {isMounted && theme === "dark" && <Moon />}
            {!isMounted && <Loader2Icon className=" animate-spin" />}
        </Button>
    )
}