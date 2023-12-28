import "server-only"
import * as Minio from "minio";


export const bucket = new Minio.Client({
    endPoint: process.env.BUCKET_URL!,
    port: 43124,
    useSSL: false,
    accessKey: process.env.BUCKET_ACCESS!,
    secretKey: process.env.BUCKET_SECRET!,
})

export const storeObject = async (file: File, bucketName: string): Promise<string> => {
    const now = new Date()
    const filename = `${now.toISOString()}-${file.name.replaceAll(" ", "-").toLocaleLowerCase()}`
    const buffer = Buffer.from(await file.arrayBuffer())
    await bucket.putObject(bucketName, filename, buffer)

    return filename
}

export const batchStoreObject = async (fileList: File[] | null, bucketName: string) => {
    const filename = []
    if (fileList != null) {
        for (let i = 0; i < fileList.length; i++) {
            const data = fileList[i]
            const name = await storeObject(data, bucketName)
            filename.push(name)
        }
    }
    return filename
}
