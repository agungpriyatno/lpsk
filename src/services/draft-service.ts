"use server"

import { storeObject } from "@/lib/bucket";
import db from "@/lib/db";
import { TQuery } from "@/types/utils";
import { $Enums } from "@prisma/client";
import { revalidatePath } from "next/dist/server/web/spec-extension/revalidate-path";


export type FindManyDraft = {
    query: TQuery
    status: $Enums.StatusDraft | undefined
}

export const findManyDraftService = ({ query: { search, skip, take }, status }: FindManyDraft) => {
    if (status != undefined) {
        // $Enums.StatusDraft[]
        return db.draft.findMany({
            skip: isNaN(skip) ? 0 : skip,
            take: isNaN(take) ? 10 : take,
            where: { AND: [ {status},{OR: [{ title: { contains: search } }, { content: { contains: search } }]}] },
            // include: { _count: { select: { modules: true, users: true } } }
        })
    }

    return db.draft.findMany({
        skip: isNaN(skip) ? 0 : skip,
        take: isNaN(take) ? 10 : take,
        where: { OR: [{ title: { contains: search } }, { content: { contains: search } }] },
        // include: { _count: { select: { modules: true, users: true } } }
    })
}

export const deleteDraftService = async ({ id }: { id: string }) => {
    await db.draft.delete({ where: { id } })
    revalidatePath('/pengajuan-konten')
}

export const createDraftService = async (formData: FormData) => {
    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const publishedAt = formData.get("published_at") as string 
    const thumbnail = formData.get("thumbnail") as File
    
    const fileName = await storeObject(thumbnail, "publication")
    await db.draft.create({ data: { title, content, publishedAt, thumbnail: fileName } })
}