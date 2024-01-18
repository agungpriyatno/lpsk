import { z } from "zod";

export const biroDto = z.object({
    name: z.string().min(1).max(255),
})

export const reportDto = z.object({
    name: z.string().min(1).max(255),
    email: z.string().email().max(255),
    identity: z.string().min(1).max(255),
    gender: z.string().min(1).max(255),
    address: z.string().min(1).max(255),
    phone: z.string().min(1).max(255),
    fax: z.string().min(1).max(255),
    descriptions: z.string().min(1),
})

export type BiroDto = z.infer<typeof biroDto>
export type ReportDto = z.infer<typeof reportDto>
