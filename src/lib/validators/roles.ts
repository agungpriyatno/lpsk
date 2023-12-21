import { z } from "zod";

export const roleDto = z.object({
    name: z.string().min(1).max(255),
    descriptions: z.string().min(1).max(255),
    modules: z.array(z.object({code: z.string().min(1)})),
})


export type RoleDto = z.infer<typeof roleDto>
