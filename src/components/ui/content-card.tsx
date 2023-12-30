import Image from "next/image"
import { AppContainer } from "./container"
import { HeaderSection } from "./typography"
import Link from "next/link"
import { Button } from "./button"
import { TextToSpeech } from "../features/text-to-speech"

export type ContentProps = {
    title: string,
    description: string,
    image: string,
    link?: string,
}

export const ContentCardA = ({ title, description, image, link }: ContentProps) => {
    return (
        <div className='w-full relative md:h-[450px] bg-background'>
            <div className='bg-muted-foreground md:absolute md:right-0 md:top-0 md:w-1/2 h-[300px] md:h-[450px] relative group overflow-hidden'>
                <Image src={image} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
            </div>
            <AppContainer>
                <div className='md:max-w-[50%] h-full flex flex-col justify-center px-3 py-8 md:px-0 md:pr-5 space-y-2'>
                    <HeaderSection>{title}</HeaderSection>
                    <TextToSpeech><p className='text-base'>{description}</p></TextToSpeech>
                    {link != undefined && <Button asChild variant={'outline'} className="w-fit">
                        <Link shallow href={link}>Selengkapnya</Link>
                    </Button>}
                </div>
            </AppContainer>
        </div>
    )
}

export const ContentCardB = ({ title, description, image, link }: ContentProps) => {
    return (
        <div className='w-full relative md:h-[450px] bg-background'>
            <AppContainer>
                <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
                    <div className=" col-span-6 xl:px-5 group">
                        <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                            <Image src={image} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                        </div>
                    </div>
                    <div className=" col-span-6 px-3  xl:px-5">
                        <div className='h-full flex flex-col justify-center space-y-2'>
                            <HeaderSection>{title}</HeaderSection>
                            <TextToSpeech><p className='text-base'>{description}</p></TextToSpeech>
                            {link != undefined && <Button asChild variant={'outline'} className="w-fit">
                                <Link shallow href={link}>Selengkapnya</Link>
                            </Button>}
                        </div>
                    </div>
                </div>
            </AppContainer>
        </div>
    )
}