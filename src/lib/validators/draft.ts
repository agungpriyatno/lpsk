import {ChangeEvent} from "react";
import { z } from "zod";

export const draftCreateDto = z.object({
    title: z.string(),
    content: z.string(),
    publishedAt: z.date().nullable(),
})

export type DraftCreateDto = z.infer<typeof draftCreateDto>