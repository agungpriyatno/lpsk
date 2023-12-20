"use server"

import { generateHash } from "@/helpers/hash"
import db from "@/lib/db"
import { SignUpDto } from "@/lib/validators/auth"
import { TQuery } from "@/types/utils"
import { revalidatePath } from "next/cache"
import { sendVerificationService } from "./auth"

export type FindManyUserProps = {
    query: TQuery
}

export const findManyUser = ({ query: { search, skip, take } }: FindManyUserProps) => {

    return db.user.findMany({
        skip: isNaN(skip) ? 0 : skip,
        take: isNaN(take) ? 10 : take,
        where: { OR: [{ name: { contains: search } }, { account: { email: { contains: search } } }] },
        include: { account: { select: { email: true, verifiedAt: true } } }
    })
}

export const createUserService = async ({ name, email, password }: SignUpDto) => {
    const hash = await generateHash(password)
    await db.user.create({ data: { name, account: { create: { email, hash } } } })
    await sendVerificationService({ email })
    revalidatePath('/posts')
}

export const updateUserService = async ({ name, id }: Omit<SignUpDto, "email" | "password"> & { id: string }) => {
    await db.user.update({ where: { id }, data: { name } })
    revalidatePath('/posts')
}

export const deleteUserService = async ({ id }: { id: string }) => {
    console.log(id);
    
    await db.user.delete({ where: { id } })
    revalidatePath('/posts')
}
