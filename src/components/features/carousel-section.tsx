import { TCarouselItem } from "@/types/utils"
import { Carousel, CarouselLoading } from "../ui/carousel"
import { Suspense, useEffect, useState } from "react"
import { Highlight, HighlightPublication, Publication, Draft } from "@prisma/client"



export const CarouselSection = async ({ data }: {
    data: Highlight & {
        publications: (HighlightPublication & {
            publication: Publication & {
                selected: Draft | null
            }
        })[]
    } | null
}) => {

    const list: TCarouselItem[] = data != null ? data.publications.map((item) => {
        const post = item.publication.selected
        return {
            title: post?.title ?? "",
            descriptions: post?.content?.replace(/(<([^>]+)>)/ig, '').split(".")[0] ?? "",
            image: process.env.BUCKET_URL_ACCESS + "/publikasi/" + (post?.thumbnail ?? "")
        }
    }) : []
    return (
        <section>
            <Suspense fallback={<CarouselLoading />}>
                <Carousel data={list} />
            </Suspense>
        </section>
    )
}