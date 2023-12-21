import { bucket, storeObject } from "@/lib/bucket";
import db from "@/lib/db";
import { DraftCreateDto } from "@/lib/validators/draft";

export const createDraftService = async ({ title, content, publishedAt }: DraftCreateDto) => {
    // const fileName = await storeObject(new File([""]), "publication")
    await db.draft.create({ data: { title, content, publishedAt, thumbnail: "fileName" } })
}