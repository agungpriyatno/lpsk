"use client"

import { scroll } from "@/redux/features/scroll-slice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export const Scroller = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch<AppDispatch>()

    const onScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
        dispatch(scroll(event.currentTarget.scrollTop))
    }

    return (
        <ScrollArea onScroll={onScroll} className="w-full h-screen">
            {children}
            <ScrollBar orientation="vertical"/>
        </ScrollArea>
    )
}
