"use client"
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { Scroller } from "../features/scroll";
import { ThemeProvider } from "./theme-provider";

export type AppProviderProps = {
    children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <Provider store={store}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Scroller>
                    {children}
                </Scroller>
            </ThemeProvider>
        </Provider>
    )
}


