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
            include: { selected: { include: { category: true } } },
            orderBy: { selected: { createdAt: "desc" } }
        })
    }

    return db.publication.findMany({
        skip: isNaN(skip) ? 0 : skip,
        take: isNaN(take) ? 10 : take,
        where: { OR: [{ selected: { title: { contains: search } } }, { selected: { content: { contains: search } } }] },
        include: { selected: { include: { category: true } } },
        orderBy: { createdAt: "desc" }
    })
}

export const findManyPublicationasdService = ({ query: { search, skip, take }, status }: FindManyPublication) => {
    if (status != undefined) {
        return db.publication.findMany({
            skip: isNaN(skip) ? 0 : skip,
            take: isNaN(take) ? 10 : take,
            where: { AND: [{ status }, { OR: [{ selected: { title: { contains: search } } }] }] },
            include: { selected: true },
            orderBy: { selected: { createdAt: "desc" } }
        })
    }

    return db.publication.findMany({
        skip: isNaN(skip) ? 0 : skip,
        take: isNaN(take) ? 10 : take,
        where: { OR: [{ selected: { title: { contains: search } } }, { selected: { content: { contains: search } } }] },
        include: { selected: true },
        orderBy: { createdAt: "desc" }
    })
}

export const findPublicationService = async (id: string) => {
    return await db.publication.findUniqueOrThrow({ where: { id }, include: { author: true, selected: { include: { author: true, media: { include: { media: true } }, vote: { include: { vote: { include: { options: { include: { _count: { select: { client: true } } } } } } } } } }, draft: true } })
}

export const takedownPublication = async (id: string) => {
    await db.publication.update({ where: { id }, data: { status: "TAKEDOWN" } })
    revalidatePath('/backoffice/konten/' + id)
    revalidatePath("/")
}

export const publishPublication = async (id: string) => {
    await db.publication.update({ where: { id }, data: { status: "PUBLISH" } })
    revalidatePath('/backoffice/konten/' + id)
    revalidatePath("/")
}

export const createPubCategory = async ({ name, subs }: PubCategoryDto) => {
    await db.publicationCategory.update({ where: { code: name }, data: { subs: { createMany: { data: subs } } } })
    revalidatePath('/backoffice/konten/kategori')
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
                    draft: true,
                }
            }
        }
    })
}

export const findAllCategory = () => {
    return db.publicationCategory.findMany({ include: { subs: true } })
}

export const findAllSubCategory = (id: string) => {
    return db.publicationSubCategory.findMany({ where: { categoryId: id } })
}

export const deleteSubCategory = async (id: string) => {
    await db.publicationSubCategory.delete({ where: { id } })
    revalidatePath('/backoffice/kategori')
}

export const deletePubCategory = async (id: string) => {
    await db.publicationCategory.delete({ where: { code: id } })
    revalidatePath('/backoffice/kategori')
}
