"use server"

import { storeObject } from "@/lib/bucket";
import db from "@/lib/db";
import { TQuery } from "@/types/utils";
import { $Enums } from "@prisma/client";
import { revalidatePath } from "next/dist/server/web/spec-extension/revalidate-path";
import { sessionService } from "./auth";
import { findPublicationService } from "./publication-service";
import { Item } from "@radix-ui/react-navigation-menu";


export type FindManyDraft = {
    query: TQuery
    status: $Enums.StatusDraft | undefined
}

export const findManyDraftService = ({ query: { search, skip, take }, status }: FindManyDraft) => {
    if (status != undefined) {
        return db.draft.findMany({
            orderBy: { createdAt: "desc" },
            skip: isNaN(skip) ? 0 : skip,
            take: isNaN(take) ? 10 : take,
            where: { AND: [{ status }, { OR: [{ title: { contains: search } }, { content: { contains: search } }] }] },
            // include: { publications: true }
        })
    }

    return db.draft.findMany({
        skip: isNaN(skip) ? 0 : skip,
        take: isNaN(take) ? 10 : take,
        where: { OR: [{ title: { contains: search } }, { content: { contains: search } }] },
        orderBy: { createdAt: "desc" }
        // include: { publications: true }
    })

}

export const findDraftService = async (id: string) => {
    return await db.draft.findUniqueOrThrow({ where: { id }, include: { author: true } })
}

export const deleteDraftService = async ({ id }: { id: string }) => {
    await db.draft.delete({ where: { id } })
    revalidatePath('/admin/pengajuan-konten')
}

export const createDraftService = async (formData: FormData) => {
    const user = await sessionService()
    const title = formData.get("title") as string
    const category = formData.get("category") as string | null
    const sub = formData.get("sub") as string | null
    const content = formData.get("content") as string
    const publishedAt = formData.get("published_at") as string | null
    const thumbnail = formData.get("thumbnail") as File
    const file = formData.getAll("file") as File[] | null
    const link = formData.getAll("link") as string[] | null

    console.log(file);
    

    const thumbailName = await storeObject(thumbnail, "publication")
    const filename: string[] = []

    if (file) {
        for (let i = 0; i < file.length; i++) {
            const data = file[i]
            const name = await storeObject(data, "publication") 
            filename.push(name)
        }

    }
    
    await db.draft.create({
        data: {
            title,
            content,
            publishedAt,
            thumbnail: thumbailName,
            author: { connect: { id: user.id } },
            category: { connect: category != null ? { id: category } : undefined },
            subCategory: { connect: sub != null ? { id: sub } : undefined },
            link: { createMany: link != null ? { data: link.map((item) => { return { url: item } }) } : undefined },
            media: { createMany: filename != null ? { data: filename.map((item) => { return { name: item } }) } : undefined }
        }
    })
    revalidatePath('/admin/pengajuan-konten')
}


export const createUpdateDraftService = async (formData: FormData, postId: string) => {
    const user = await sessionService()
    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const publishedAt = formData.get("published_at") as string
    const thumbnail = formData.get("thumbnail") as File | null
    var filename: string | undefined = ""
    if (thumbnail) {
        filename = await storeObject(thumbnail, "publication")
    } else {
        const publication = await findPublicationService(postId)
        filename = publication.selected?.thumbnail
    }

    await db.draft.create({ data: { title, content, publishedAt, thumbnail: filename ?? "", author: { connect: { id: user.id } }, publications: { connect: { id: postId } } } })
    revalidatePath('/admin/konten/' + postId)
}


export const acceptCreateService = async (id: string) => {
    const draft = await db.draft.findUniqueOrThrow({ where: { id } })
    console.log(id);


    if (draft.status == "REJECT" || draft.authorId == null) {
        throw Error("error")
    }

    if (draft.publicationId) {
        await db.publication.update({ where: { id: draft.publicationId }, data: { selectedId: draft.id, draft: { connect: { id: draft.id } } } })
    } else {
        await db.publication.create({ data: { selected: { connect: { id: draft.id } }, author: { connect: { id: draft.authorId } }, draft: { connect: { id: draft.id } } } })
    }
    await db.draft.update({ where: { id }, data: { status: "ACCEPT" } })
    revalidatePath('/admin/pengajuan-konten')
}

export const rejectDraftService = async (id: string) => {
    const draft = await db.draft.update({ where: { id }, data: { status: "REJECT" } })
    revalidatePath('/admin/pengajuan-konten')
}