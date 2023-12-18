"use client"

import { toggle } from "@/redux/features/text-to-speech-slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { Volume2Icon, VolumeXIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { renderToString } from "react-dom/server";
import { ReactElement } from "react";

export const TextToSpeechToogler = () => {
    const status = useAppSelector((state) => state.textToSpeechReducer.value)
    const dispatch = useDispatch<AppDispatch>()
    const onClick = () => {
        dispatch(toggle())
    }

    return (
        <Button size={'icon'} variant={'ghost'} onClick={() => onClick()}>
            {status ? <Volume2Icon /> : <VolumeXIcon/>}
        </Button>
    )
}

export const TextToSpeech = ({children}: {children: React.ReactNode}) => {

    const status = useAppSelector((state) => state.textToSpeechReducer.value)

    const speech = () => {
        if (status) { 
            const msg = new SpeechSynthesisUtterance()
            if (typeof children === "string") {
                msg.text = children?.toString() ?? ""
            }else {
                msg.text = (children as ReactElement).props.children.toString()        
            }
        
            msg.lang = "id"
            window.speechSynthesis.speak(msg)
        }
    } 

    return (
        <div onMouseEnter={() => speech()}>{children}</div>
    )
}