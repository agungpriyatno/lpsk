import { bucket } from "@/lib/bucket";
import { NextRequest, NextResponse } from "next/server";
import { fileTypeFromBuffer, fileTypeFromBlob } from "file-type";
import mime from "mime";

export const GET = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  const call = async (): Promise<Buffer> => {
    const promise = new Promise<Buffer>(
      (resolve, reject) => {
        bucket.getObject("publikasi", id).then((stream) => {
          const chunks: Buffer[] = [];
          stream.on("data", (chunk) => chunks.push(chunk));
          stream.once("end", () => {
            const data = Buffer.concat(chunks);
            resolve(data);
          });
          stream.once("error", reject);
        });
      }
    );
    return await promise;
  };

  const data = await call();

  const contentType = mime.getType(id);
  const response = new Response(data, {
    headers: {
      "Content-Type": contentType || "application/octet-stream",
    },
  });

  return response;
};
