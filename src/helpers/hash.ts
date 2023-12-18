import * as bcrypt from 'bcrypt'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import { ApiError } from 'next/dist/server/api-utils'


export const generateHash = async (password: string) => {
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)
    return bcrypt.hash(password, salt)
}

export const validateHash = async (password: string, hash: string) => {
    const result = await bcrypt.compare(password, hash)
    if(!result) throw new ApiError(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED)
}