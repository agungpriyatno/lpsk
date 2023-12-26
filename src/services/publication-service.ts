"use server"

import db from "@/lib/db"
import { PubCategoryDto } from "@/lib/validators/publication"
import { TQuery } from "@/types/utils"
import { $Enums } from "@prisma/client"
import { revalidatePath } from "next/cache"

export type FindManyPublication = {
    query: TQuery
    status: $Enums.StatusPublication | undefined
}

export type FindManyPubCategory = {
    query: TQuery
}

export const findManyPublicationService = ({ query: { search, skip, take }, status }: FindManyPublication) => {
    if (status != undefined) {
        return db.publication.findMany({
            skip: isNaN(skip) ? 0 : skip,
            take: isNaN(take) ? 10 : take,
            where: { AND: [{ status }, { OR: [{ selected: { title: { contains: search } } }, { selected: { content: { contains: search } } }] }] },
            include: { selected: true },
            orderBy: { createdAt: "desc" }
        })
    }

    return db.publication.findMany({
        skip: isNaN(skip) ? 0 : skip,
        take: isNaN(take) ? 10 : take,
        where: { OR: [{ selected: { title: { contains: search } } }, { selected: { content: { contains: search } } }] },
        include: { selected: true }
    })
}

export const findPublicationService = async (id: string) => {
    return await db.publication.findUniqueOrThrow({ where: { id }, include: { author: true, selected: true, draft: true } })
}

export const takedownPublication = async (id: string) => {
    await db.publication.update({ where: { id }, data: { status: "TAKEDOWN" } })
    revalidatePath('/admin/konten/' + id)
}

export const publishPublication = async (id: string) => {
    await db.publication.update({ where: { id }, data: { status: "PUBLISH" } })
    revalidatePath('/admin/konten/' + id)
}

export const createPubCategory = async ({ name, subs }: PubCategoryDto) => {
    await db.publicationCategory.create({ data: { name, subs: { createMany: { data: subs } } } })
    revalidatePath('/admin/konten/kategori')
}

export const findManyPubCategory = async ({ query: { search, skip, take } }: FindManyPubCategory) => {
    return db.publicationCategory.findMany({
        skip: isNaN(skip) ? 0 : skip,
        take: isNaN(take) ? 10 : take,
        where: { OR: [{ name: { contains: search } }] },
        include: {
            _count: {
                select: {
                    subs: true,
                    publication: true,
                    draft: true,
                }
            }
        }
    })
}

export const findAllCategory = () => {
    return db.publicationCategory.findMany({ include: { subs: true } })
}

export const deletePubCategory = async (id: string) => {
    await db.publicationCategory.delete({ where: { id } })
    revalidatePath('/admin/konten/kategori')
}
