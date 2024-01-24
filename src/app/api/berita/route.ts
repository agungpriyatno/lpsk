import db from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const take = isNaN(Number(searchParams.get('take'))) ? 10 : Number(searchParams.get('take'))
    const skip = isNaN(Number(searchParams.get('skip'))) ? 10 : Number(searchParams.get('skip'))
    const search = searchParams.get('search')

    const data = await db.publication.findMany({
        skip: isNaN(Number(skip)) ? 0 : Number(skip),
        take: isNaN(Number(take)) ? 20 : Number(take),
        orderBy: { selected: { createdAt: "desc" } },
        include: { selected: { include: { media: true, author: true, category: true, subCategory: true } } },
        where: { AND: [{ selected: { category: { code: "LPSK-BERITA" } } }, { status: "PUBLISH" }, search != undefined ? { selected: { title: { contains: search } } } : {}] }
    })

    return NextResponse.json(data)
}