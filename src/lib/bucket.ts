"use server"

import Minio from "minio";

export const bucket = new Minio.Client({
    endPoint: 'play.min.io',
    port: 9000,
    useSSL: true,
    accessKey: 'VWTGwB4F60sMaV02GRcp',
    secretKey: 'qbHTvRDoVZ65egZBo0UwGlrmC18rtADB2ejzt1uU',
})

export const storeObject = async (file: File, bucketName: string): Promise<string> => {
    var filenames: string = ""
    const now = Date()
    const filename = `${now}-${file.name.replaceAll(" ", "-")}`
    const buffer = Buffer.from(await file.arrayBuffer())
    await bucket.putObject(bucketName, filename, buffer)
    filenames = filename
    return filenames
}
