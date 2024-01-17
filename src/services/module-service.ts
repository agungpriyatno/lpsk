"use server"

import db from "@/lib/db"

export const findAllModule = async () => {
    return await db.module.findMany()
}