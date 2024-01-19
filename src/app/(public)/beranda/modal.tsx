"use client"

import { Button } from "@/components/ui/button"
import { Carousel } from "@/components/ui/carousel-ui"
import { TCarouselItem } from "@/types/utils"
import { Highlight, HighlightPublication, Publication, Draft } from "@prisma/client"
import { XIcon } from "lucide-react"
import { useState } from "react"

export const SorotModal = ({ data }: {
    data: Highlight & {
        publications: (HighlightPublication & {
            publication: Publication & {
                selected: Draft | null
            }
        })[]
    } | null
}) => {
    const [open, setOpen] = useState((data?.publications.length ?? 0) > 0)
    const list: TCarouselItem[] = data != null ? data.publications.map((item) => {
        const post = item.publication.selected
        return {
            id: item.publication.id ?? "",
            title: post?.title ?? "",
            descriptions: post?.content?.replace(/(<([^>]+)>)/ig, '').split(".")[0] ?? "",
            image: "https://storage.agungpriyatno.my.id/publikasi/" + (post?.thumbnail ?? "default_zz.jpg")
        }
    }) : []
    return (
        <>
            {open && <div className='fixed h-screen w-screen left-0 top-0 bg-slate-800/70 z-50 flex justify-center place-items-center' onClick={() => setOpen(false)}>
                <div className=' bg-background rounded w-[350px] h-[600px] md:w-[600px] md:h-[400px] xl:w-[800px] xl:h-[600px] overflow-clip border-4'>
                    {list.length > 0 && <Carousel data={list.reverse()} types={"modal"} />}
                    <Button className=" absolute right-5 top-5" onClick={() => setOpen(false)}>
                        <XIcon size={25} />
                    </Button>
                </div>
            </div>}
        </>
    )
}