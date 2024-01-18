"use client"

import { Contact2Icon, MailIcon, MessageCircleIcon, MessageSquareIcon, PhoneIcon } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { useAppSelector } from "@/redux/store"


export const HelpdeskIcon = () => {

    const [state, setState] = useState(false)
    const height = useAppSelector((state) => state.scrollReducer.value)
    useEffect(() => {
        setState(height > 25)
    }, [height])

    return (
        <div className={cn("fixed right-0 bottom-[100px]  transition-all duration-200", { "right-0": state }, { "-right-full": !state })}>
            <div className="flex justify-end flex-col gap-2 place-items-end relative">
                <div className={cn("p-3 rounded-l bg-background transition-all duration-200 overflow-hidden w-12 hover:w-full")}>
                    <div className="flex gap-3 w-fit">
                        <PhoneIcon size={25} />
                        <span className=" truncate">(021) 29681560</span>
                    </div>
                </div>
                <div className={cn("p-3 rounded-l bg-background transition-all duration-200 overflow-hidden w-12 hover:w-full")}>
                    <div className="flex gap-3 w-fit">
                        <MailIcon size={25} />
                        <span>lpsk_ri@lpsk.go.id</span>
                    </div>
                </div>
                <div className={cn("p-3 rounded-l bg-background transition-all duration-200 overflow-hidden w-12 hover:w-full")}>
                    <div className="flex gap-3 w-fit">
                        <MessageSquareIcon size={25} />
                        <Link href={"https://api.whatsapp.com/send/?phone=6285770010048&text=Hallo+LPSK+saya+mau+bertanya&type=phone_number&app_absent=0"} target={"_blank"}>
                            WhatsApp
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}