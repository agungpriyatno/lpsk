"use server"

import db from "@/lib/db";
import { BiroDto } from "@/lib/validators/biro";
import { revalidatePath } from "next/cache";

export const createBiro = async (data: BiroDto) => {
    await db.biro.create({ data })
    revalidatePath("/backoffice/biro")
}

export const findAllBiro = async () => {
    return await db.biro.findMany()
}

export const updateBiro = async (id: string, data: BiroDto) => {
    await db.biro.update({ data, where: { id } })
    revalidatePath("/backoffice/biro")
}

export const deleteBiro = async (id: string) => {
    await db.biro.delete({ where: { id } })
    revalidatePath("/backoffice/biro")
}