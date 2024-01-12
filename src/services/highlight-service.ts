"use server"
import db from "@/lib/db"
import { PubCategoryDto } from "@/lib/validators/publication"
import { TQuery } from "@/types/utils"
import { sub } from "date-fns"
import { revalidatePath } from "next/cache"

export type FindManyHighlight = {
    query: TQuery
}

export const findManyHighlight = async ({ query: { search, skip, take } }: FindManyHighlight) => {
    return db.highlight.findMany({
        skip: isNaN(skip) ? 0 : skip,
        take: isNaN(take) ? 10 : take,
        where: { OR: [{ name: { contains: search } }] },
        include: {
            _count: {
                select: {
                    publications: true,
                }
            }
        }
    })
}

export const deleteHighlightPost = async (id: string, postId: string) => {
    await db.highlightPublication.deleteMany({ where: { publicationId: postId, highlightCode: id } })
    revalidatePath('/backoffice/kategori')
}

export const createManyPubHiglight = async ({ name, subs }: PubCategoryDto) => {
    await db.highlightPublication.createMany({
        data: subs.map((item) => { return { publicationId: item.name, highlightCode: name } })
    })
    revalidatePath('/backoffice/konten/sorot')
}

export const findAllHighlightPub = async (code: string) => {
    const data = await db.highlight.findUnique({ where: { code }, include: { publications: { include: { publication: { include: { selected: true } } } } } })
    return data?.publications
}


