"use server"

import { batchStoreObject, storeObject } from "@/lib/bucket";
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

export const findManyDraftPubService = ({ query: { search, skip, take }, status }: FindManyDraft) => {
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

export const findManyPengajuanDraftService = ({ query: { search, skip, take }, status }: FindManyDraft) => {

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
    return await db.draft.findUniqueOrThrow({ where: { id }, include: { selected: true, author: true, media: { include: { media: true } }, vote: { include: { vote: { include: { options: { include: { _count: { select: { client: true } } } } } } } } } })
}

export const deleteDraftService = async ({ id }: { id: string }) => {
    const data = await db.draft.findFirstOrThrow({ where: { id }, include: { publications: true } })
    if (data.publicationId) throw new Error()
    await db.draft.delete({ where: { id } })
    revalidatePath('/backoffice/pengajuan-konten')
}

export const createDraftService = async (formData: FormData) => {
    const user = await sessionService()

    const title = formData.get("title") as string
    const category = formData.get("category") as string | null
    const sub = formData.get("sub_category") as string | null
    const content = formData.get("content") as string
    const publishedAt = formData.get("published_at") as string | null
    const thumbnail = formData.get("thumbnail") as File | null
    const file = formData.getAll("file") as File[] | null
    const voteOptions = formData.getAll("vote_options") as string[] | null
    const voteOptionsDesc = formData.getAll("vote_descriptions") as string[] | null
    const voteOptionsThumb = formData.getAll("vote_thumbnail") as File[] | null
    const closedAt = formData.get("closed_at") as string | null
    const linkSource = formData.get("link_source") as string | null
    const linkVideo = formData.get("link_video") as string | null

    const thumbailName = thumbnail != null ? await storeObject(thumbnail, "publikasi") : null
    const filename = await batchStoreObject(file, "publikasi")
    const optionsThumbnailname = await batchStoreObject(voteOptionsThumb, "publikasi")



    const d = await db.draft.create({
        data: {
            title,
            content,
            thumbnail: thumbailName,
            sourceLink: linkSource,
            videoLink: linkVideo,
            author: { connect: { id: user.id } },
            // biro: user.biro != null ? { connect: { biro: {id: user.biro.id} } } : undefined,
            subCategory: { connect: sub != null ? { id: sub } : undefined },
            createdAt: publishedAt != null ? new Date(publishedAt) : new Date(),
            category: { connect: category != null ? { code: category } : undefined },
            media: { create: filename?.map((item) => { return { media: { create: { name: item } } } }) },
            vote: closedAt != null ? { create: { vote: { create: { closedAt: new Date(closedAt), options: { create: voteOptions?.map((item, i) => { return { name: item, thumbnail: optionsThumbnailname[i], descriptions: voteOptionsDesc != null ? voteOptionsDesc[i] : null } }) } } } } } : undefined
        }
    })

    // console.log(d);
    // console.log(user.biro);


    // if (user.biro) {
    //     await db.biro.update({ where: { id: user.biro.id }, data: { draft: { connect: { draftId: d.id } } } })
    // }
    revalidatePath('/backoffice/pengajuan-konten')
}

export const acceptCreateService = async (id: string) => {
    const draft = await db.draft.findUniqueOrThrow({ where: { id } })

    if (draft.status == "REJECT" || draft.authorId == null) {
        throw Error("error")
    }

    // if (draft.publicationId) {
    //     await db.publication.update({ where: { id: draft.publicationId }, data: { selectedId: draft.id, draft: { connect: { id: draft.id } } } })
    // } else {
    //     await db.publication.create({ data: { selected: { connect: { id: draft.id } }, author: { connect: { id: draft.authorId } }, draft: { connect: { id: draft.id } } } })
    // }
    await db.draft.update({ where: { id }, data: { status: "ACCEPT" } })
    revalidatePath('/backoffice/pengajuan-konten')
}

export const acceptToPublication = async (id: string) => {
    const draft = await db.draft.findUniqueOrThrow({ where: { id } })

    if (draft.authorId == null) {
        throw Error("error")
    }

    if (draft.publicationId) {
        await db.publication.update({ where: { id: draft.publicationId }, data: { selectedId: draft.id, draft: { connect: { id: draft.id } } } })
    } else {
        await db.publication.create({ data: { selected: { connect: { id: draft.id } }, author: { connect: { id: draft.authorId } }, draft: { connect: { id: draft.id } } } })
    }

    revalidatePath('/backoffice/pengajuan-konten')
}

export const rejectFromPublication = async (id: string) => {
    await db.draft.update({ where: { id }, data: { status: "REJECT" } })
    revalidatePath('/backoffice/pengajuan-konten')
}


export const createUpdateDraftService = async (formData: FormData, postId: string) => {
    const user = await sessionService()
    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const publishedAt = formData.get("published_at") as string
    const thumbnail = formData.get("thumbnail") as File | null
    var filename: string | undefined = ""
    // if (thumbnail) {
    //     filename = await storeObject(thumbnail, "publication")
    // } else {
    //     const publication = await findPublicationService(postId)
    //     filename = publication.selected?.thumbnail
    // }

    await db.draft.create({ data: { title, content, publishedAt, thumbnail: filename ?? "", author: { connect: { id: user.id } }, publications: { connect: { id: postId } } } })
    revalidatePath('/backoffice/konten/' + postId)
}




export const rejectDraftService = async (id: string) => {
    const draft = await db.draft.update({ where: { id }, data: { status: "REJECT" } })
    revalidatePath('/backoffice/pengajuan-konten')
}