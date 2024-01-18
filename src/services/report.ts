"use server"

import db from "@/lib/db"
import { ReportDto } from "@/lib/validators/biro"
import { revalidatePath } from "next/cache"

export const createReport = async (data: ReportDto) => {
    await db.report.create({ data })
    revalidatePath("/informasi/pengaduan")
}