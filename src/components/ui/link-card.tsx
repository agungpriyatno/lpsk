import Link from "next/link"
import { AspectRatio } from "./aspect-ratio"
import Image from 'next/image'
import { HTMLAttributeAnchorTarget } from "react"
import { cn } from "@/lib/utils"
import { Skeleton } from "./skeleton"
import { TextToSpeech } from "../features/text-to-speech"

export type LinkCardProps = {
    title: string,
    description?: string,
    image: string,
    href: string,
    target?: HTMLAttributeAnchorTarget,
    className?: string
}

export const LinkCard = ({ title, description, image, className, ...props }: LinkCardProps) => {
    return (
        <Link  {...props} className={className}>
            <AspectRatio ratio={1.5 / 1} className={cn(
                'overflow-hidden group rounded bg-background')}>
                <Image src={image} alt='' fill sizes='100vh' className='group-hover:scale-125 transition-all duration-300 object-cover' />
                <div className='absolute left-0 top-0 right-0 bottom-0 bg-slate-800/50'></div>
                <div className='absolute left-5 bottom-5'>
                    <div className='flex flex-col '>
                        <TextToSpeech><h6 className='font-bold text-slate-100 leading-none text-xl'>{title}</h6></TextToSpeech>
                        <TextToSpeech><small className='text-slate-100 text-sm'>{description}</small></TextToSpeech>
                    </div>
                </div>
            </AspectRatio>
        </Link>
    )
}

export const LinkCardLoading = ({ className }: { className?: string }) => {
    return (
        <div className={cn(className)}>
            <AspectRatio ratio={1.5 / 1} className={cn(
                'rounded')}>
                <Skeleton className=" bg-muted-foreground w-full h-full"></Skeleton>
            </AspectRatio>
        </div>
    )
}