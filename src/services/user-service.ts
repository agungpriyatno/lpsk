"use server"

import { generateHash } from "@/helpers/hash"
import db from "@/lib/db"
import { SignUpDto } from "@/lib/validators/auth"
import { TQuery } from "@/types/utils"
import { revalidatePath } from "next/cache"
import { sendVerificationService } from "./auth"
import { CreateUserDto, UpdateUserDto } from "@/lib/validators/user"

export type FindManyUserProps = {
    query: TQuery
}

export const findManyUser = ({ query: { search, skip, take } }: FindManyUserProps) => {

    return db.user.findMany({
        skip: isNaN(skip) ? 0 : skip,
        take: isNaN(take) ? 10 : take,
        where: { OR: [{ name: { contains: search } }, { account: { email: { contains: search } } }] },
        include: { account: { select: { email: true, verifiedAt: true } }, role: true },
        orderBy: { createdAt: "desc" }

    })
}

export const createUserService = async ({ name, email, password, role }: CreateUserDto) => {
    const hash = await generateHash(password)
    await db.user.create({ data: { name, account: { create: { email, hash } }, role: { connect: { id: role } } } })
    await sendVerificationService({ email })
    revalidatePath('/pengguna')
}

export const updateUserService = async ({ name, id, role }: UpdateUserDto & { id: string }) => {
    await db.user.update({ where: { id }, data: { name, role: { connect: { id: role } } } })
    revalidatePath('/pengguna')
}

export const deleteUserService = async ({ id }: { id: string }) => {
    await db.user.delete({ where: { id } })
    revalidatePath('/pengguna')
}
