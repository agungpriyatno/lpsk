import db from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const take = Number(searchParams.get('take') ?? 10)
    const skip = Number(searchParams.get('skip')) 
    const search = searchParams.get('search') ?? ""

    const data = await db.publication.findMany({
        skip: isNaN(Number(skip)) ? 0 : Number(skip),
        take: isNaN(Number(take)) ? 20 : Number(take),
        orderBy: { selected: { createdAt: "desc" } },
        include: { selected: { include: { media: true, author: true, category: true, subCategory: true } } },
        where: { AND: [{ selected: { category: { code: "LPSK-BERITA" } } }, { status: "PUBLISH" }, { selected: { title: { contains: search } } }] }
    })

    return NextResponse.json(data)
}