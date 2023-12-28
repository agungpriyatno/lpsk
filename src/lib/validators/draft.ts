import { z } from "zod";

export const draftCreateDto = z.object({
    title: z.string(),
    content: z.string(),
    publishedAt: z.date().nullable(),
    category: z.string().nullable(),
    sub: z.string().nullable(),
    link: z.array(z.object({url: z.string()})),
    vote: z.array(z.object({name: z.string(), description: z.string()})),
    closedAt: z.date().nullable()
})

export type DraftCreateDto = z.infer<typeof draftCreateDto>