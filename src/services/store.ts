"use server";

import { storeObject } from "@/lib/bucket";

export const store = async (formData: FormData): Promise<string> => {
  const file = formData.get("file") as File;
  const filename = await storeObject(file, "publikasi");
  return `${process.env.BUCKET_URL_ACCESS}/publikasi/${filename}`;
};
