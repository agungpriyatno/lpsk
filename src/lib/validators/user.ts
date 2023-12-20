import { z } from "zod";

export const updateUserDto = z.object({
    name: z.string().min(1).max(255),
})


export type UpdateUserDto = z.infer<typeof updateUserDto>
