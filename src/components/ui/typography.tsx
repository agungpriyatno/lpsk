import { cn } from "@/lib/utils"
import { TextToSpeech } from "../features/text-to-speech"

export type TypographyProps = {
    children: React.ReactNode
    className?: string
}


export const HeaderSection = ({ children, className }: TypographyProps) => {
    return <TextToSpeech><h3 className={cn("text-3xl lg:text-xl font-bold", className)}>{children}</h3></TextToSpeech>
}