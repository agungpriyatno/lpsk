import jwt from 'jsonwebtoken'


export const encryptToken = (payload: string) => {
    return jwt.sign(payload, process.env.TOKEN_SECRET!)
}

export const decryptToken = (token: string) => {
    const payload = jwt.verify(token, process.env.TOKEN_SECRET!)
    return payload as string
}