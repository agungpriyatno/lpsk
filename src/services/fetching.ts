"use serve";

import db from "@/lib/db";

type FetchNewsOptions = {
  skip?: string | number;
  take?: string | number;
  search?: string;
  status?: string;
};
const fetchNews = async ({ skip, take, search, status }: FetchNewsOptions) => {
  return await db.publication.findMany({
    skip: isNaN(Number(skip)) ? 0 : Number(skip),
    take: isNaN(Number(take)) ? 12 : Number(take),
    orderBy: { createdAt: "desc" },
    include: {
      selected: {
        include: {
          media: true,
          author: true,
          category: true,
          subCategory: true,
        },
      },
    },
    where: {
      AND: [
        { selected: { category: { code: "LPSK-BERITA" } } },
        { status: "PUBLISH" },
        search != undefined
          ? { selected: { title: { contains: search, mode: "insensitive" } } }
          : {},
        status != undefined ? { selected: { subCategoryId: status } } : {},
      ],
    },
  });
};

type FetchPublicationOptions = {
  skip?: string | number;
  take?: string | number;
  search?: string;
  status?: string;
};

const fetchPublication = async ({
  skip,
  take,
  search,
  status,
}: FetchPublicationOptions) => {
  return await db.publication.findMany({
    skip: isNaN(Number(skip)) ? 0 : Number(skip),
    take: isNaN(Number(take)) ? 12 : Number(take),
    orderBy: { createdAt: "desc" },
    include: {
      selected: {
        include: {
          media: true,
          author: true,
          category: true,
          subCategory: true,
        },
      },
    },
    where: {
      AND: [
        { selected: { category: { code: "LPSK-PUBLIKASI" } } },
        { status: "PUBLISH" },
        search != undefined
          ? { selected: { title: { contains: search, mode: "insensitive" } } }
          : {},
        status != undefined ? { selected: { subCategoryId: status } } : {},
      ],
    },
  });
};

export { fetchNews, fetchPublication };
