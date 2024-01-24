import db from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params: { id } }: { params: { id: string } }) {
    const data = await db.publication.findFirstOrThrow({
        where: { id }, include:
        {
            selected: {
                include: {
                    media: { include: { media: true } },
                    vote: { include: { vote: { include: { options: { include: { _count: { select: { client: true } } } } } } } }
                }
            }, author: true
        }
    })

    return NextResponse.json(data)
}