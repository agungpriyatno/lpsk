import { z } from "zod";

export const updateUserDto = z.object({
    name: z.string().min(1).max(255),
    role: z.string().min(1).max(255),
})

export const createUserDto = z.object({
    name: z.string().min(1).max(255),
    email: z.string().email().max(255),
    password: z.string().min(8).max(255),
    role: z.string().min(8).max(255),
})


export type UpdateUserDto = z.infer<typeof updateUserDto>
export type CreateUserDto = z.infer<typeof createUserDto>
