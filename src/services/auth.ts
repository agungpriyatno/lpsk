"use server"

import { delayer } from "@/helpers/delay";
import { generateHash, validateHash } from "@/helpers/hash";
import { encryptToken } from "@/helpers/token";
import db from "@/lib/db";
import { smtp } from "@/lib/smtp";
import { EmailDto, ResetDto, SignInDto, SignUpDto } from "@/lib/validators/auth";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { ApiError } from "next/dist/server/api-utils";
import { cookies } from 'next/headers'
import { date } from "zod";

export const signInService = async ({ email, password }: SignInDto) => {
    await delayer(2000)
    const account = await db.account.findUniqueOrThrow({ where: { email } })
    if (!account.verifiedAt) {
        throw new ApiError(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED)
    }
    await validateHash(password, account.hash)
    const token = encryptToken(account.id)
    cookies().set("session", token)
}

export const signUpService = async ({ name, email, password }: SignUpDto) => {
    await delayer(2000)
    const hash = await generateHash(password)
    await db.user.create({ data: { name, account: { create: { email, hash } } } })
    await sendVerificationService({ email })
}

export const sendResetService = async ({ email }: EmailDto) => {
    await delayer(2000)
    const account = await db.account.findUniqueOrThrow({ where: { email } })
    var verification = await db.verification.findFirst({ where: { accountId: account.id } })
    const now = new Date()
    now.setMinutes(now.getMinutes() + 15)
    if (!verification) {
        verification = await db.verification.create({ data: { accountId: account.id, expiredAt: now } })
    } else {
        verification = await db.verification.update({ where: { id: verification.id }, data: { expiredAt: now } })
    }

    smtp.sendMail({
        to: email,
        from: process.env.SMTP_USER,
        html: `<a href="http://localhost:3000/admin/forgot/${verification.id}">link Reset Password</a>`,
    })
}

export const sendVerificationService = async ({ email }: EmailDto) => {
    await delayer(2000)
    const account = await db.account.findUniqueOrThrow({ where: { email } })
    var verification = await db.verification.findFirst({ where: { accountId: account.id } })
    const now = new Date()
    now.setMinutes(now.getMinutes() + 15)
    if (!verification) {
        verification = await db.verification.create({ data: { accountId: account.id, expiredAt: now } })
    } else {
        verification = await db.verification.update({ where: { id: verification.id }, data: { expiredAt: now } })
    }

    smtp.sendMail({
        to: email,
        from: process.env.SMTP_USER,
        html: `<a href="http://localhost:3000/admin/verification/${verification.id}">Link Verifikasi</a>`,
    })
}

export const verificationEmail = async ({ id }: { id: string }) => {
    const now = new Date()
    const verification = await db.verification.findUniqueOrThrow({ where: { id } })
    if (now > verification.expiredAt) {
        throw Error("Expired")
    }
    await db.account.update({ where: { id: verification.accountId }, data: { verifiedAt: now } })
}

export const resetPasswordService = async (id: string, { password }: ResetDto) => {
    const verification = await db.verification.findUniqueOrThrow({ where: { id } })
    const hash = await generateHash(password)
    await db.account.update({ where: { id: verification.accountId }, data: { hash } })
}

export const signOutService = () => {
    cookies().set("session", "", { maxAge: 0 })
}