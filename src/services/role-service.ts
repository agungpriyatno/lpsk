import db from "@/lib/db"
import { TQuery } from "@/types/utils"

export type FindManyRoleProps = {
    query: TQuery
}

export const findManyRole = ({ query: { search, skip, take } }: FindManyRoleProps) => {

    return db.role.findMany({
        skip: isNaN(skip) ? 0 : skip,
        take: isNaN(take) ? 10 : take,
        where: { OR: [{ name: { contains: search } }, { descriptions: { contains: search } }] },
        include: { _count: { select: { modules: true } } }
    })
}