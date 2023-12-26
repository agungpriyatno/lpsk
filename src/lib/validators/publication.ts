import { z } from "zod";

export const pubCategoryDto = z.object({
    name: z.string().min(1).max(255),
    subs: z.array(z.object({ name: z.string().min(1) })),
})

export type PubCategoryDto = z.infer<typeof pubCategoryDto>