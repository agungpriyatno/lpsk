import { TextToSpeech } from "../features/text-to-speech"

export type TypographyProps = {
    children: React.ReactNode
}


export const HeaderSection = ({ children }: TypographyProps) => {
    return <TextToSpeech><h3 className="text-3xl lg:text-xl font-bold">{children}</h3></TextToSpeech>
}