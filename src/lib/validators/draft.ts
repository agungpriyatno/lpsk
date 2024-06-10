import { z } from "zod";

export const draftCreateDto = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    publishedAt: z.date().nullable(),
    category: z.string().min(1),
    sub: z.string().nullable(),
    linkSource: z.string(),
    linkVideo: z.string(),
    vote: z.array(z.object({name: z.string(), description: z.string()})),
    closedAt: z.date().nullable()
})

export type DraftCreateDto = z.infer<typeof draftCreateDto>