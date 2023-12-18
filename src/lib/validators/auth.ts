import { z } from "zod";

export const signInDto = z.object({
    email: z.string().email().max(255),
    password: z.string().min(1).max(255),
})

export const emailDto = z.object({
    email: z.string().min(1).max(255),
})

export const resetDto = z.object({
    password: z.string().min(8).max(255),
})

export const signUpDto = z.object({
    name: z.string().min(1).max(255),
    email: z.string().email().max(255),
    password: z.string().min(8).max(255),
})


export type SignInDto = z.infer<typeof signInDto>
export type SignUpDto = z.infer<typeof signUpDto>
export type EmailDto = z.infer<typeof emailDto>
export type ResetDto = z.infer<typeof resetDto> 