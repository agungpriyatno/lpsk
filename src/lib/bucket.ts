import "server-only"
import * as Minio from "minio";


export const bucket = new Minio.Client({
    endPoint: '103.175.217.118',
    port: 43124,
    useSSL: false,
    accessKey: 'VWTGwB4F60sMaV02GRcp',
    secretKey: 'qbHTvRDoVZ65egZBo0UwGlrmC18rtADB2ejzt1uU',
})

export const storeObject = async (file: File, bucketName: string): Promise<string> => {
    const now = new Date()
    const filename = `${now.toISOString()}-${file.name.replaceAll(" ", "-")}`
    const buffer = Buffer.from(await file.arrayBuffer())
    await bucket.putObject(bucketName, filename, buffer)
    
    return filename
}
