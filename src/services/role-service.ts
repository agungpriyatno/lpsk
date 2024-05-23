"use server"

import db from "@/lib/db"
import { RoleDto } from "@/lib/validators/roles"
import { TQuery } from "@/types/utils"
import { revalidatePath } from "next/cache"

export type FindManyRoleProps = {
    query: TQuery
}

export const findManyRole = ({ query: { search, skip, take } }: FindManyRoleProps) => {

    return db.role.findMany({
        skip: isNaN(skip) ? 0 : skip,
        take: isNaN(take) ? 10 : take,
        where: { OR: [{ name: { contains: search } }, { descriptions: { contains: search } }] },
        include: {modules: true , _count: { select: { modules: true, users: true } } },
        orderBy: { createdAt: "desc" }
    })
}

export const findAllRole = () => {
    return db.role.findMany()
}


export const createRoleService = async ({ name, descriptions, modules }: RoleDto) => {
    const data = modules.map((item) => { return { moduleCode: item.code } })
    await db.role.create({ data: { name, descriptions, modules: { createMany: { data } } } })
    revalidatePath('/hak-akses')
}

export const updateRoleService = async (id: string,{ name, descriptions, modules }: RoleDto) => {
    const data = modules.map((item) => { return { moduleCode: item.code } })
    await db.role.update({where: {id}, data: {name, descriptions, modules: {deleteMany: {}}}})
    await db.role.update({where: {id}, data: {name, descriptions, modules: {createMany: {data}}}})
    revalidatePath('/hak-akses')
}


export const deleteRoleService = async ({ id }: { id: string }) => {
    await db.role.delete({ where: { id } })
    revalidatePath('/hak-akses')
}
