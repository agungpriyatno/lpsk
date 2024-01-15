import db from "@/lib/db"
import { AppRunningText } from "./running-text"

const ServerRunningText = async () => {
    const list = await db.publication.findMany({
        skip: 0,
        take: 5,
        orderBy: {createdAt: "desc"},
        include: { selected: true },
        where: { AND: [{ selected: { category: { code: "LPSK-BERITA" } } }] }
    })
    return <AppRunningText list={list}/>
}

export default ServerRunningText