import {ChangeEvent} from "react";
import { z } from "zod";

export const draftCreateDto = z.object({
    title: z.string(),
    content: z.string(),
    publishedAt: z.date().nullable(),
    category: z.string().nullable(),
    sub: z.string().nullable(),
    link: z.array(z.object({url: z.string()}))
})

export type DraftCreateDto = z.infer<typeof draftCreateDto>