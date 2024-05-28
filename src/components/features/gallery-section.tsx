"use server";
import db from "@/lib/db";
import { AppContainer } from "../ui/container";
import { GalleryItem } from "../ui/gallery";
import { HeaderSection } from "../ui/typography";

export const GallerySection = async () => {
  const list = await db.publication.findMany({
    skip: 0,
    take: 12,
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
        { status: "PUBLISH" },
        { selected: { category: { code: "LPSK-PUBLIKASI" } } },
        { selected: { subCategoryId: "clraaing4000d65qnqdxshbh6" } },
      ],
    },
  });
  return (
    <div className="w-full">
      <AppContainer className=" space-y-3">
        <HeaderSection>GALERI</HeaderSection>
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-[16px]">
          {list.map((item, i) => {
            if (i == 0) {
              return (
                <div className="col-span-2 row-span-2 h-full" key={i}>
                  <GalleryItem
                    url={
                      process.env.BUCKET_URL_ACCESS +
                      "/publikasi/" +
                      (item.selected?.thumbnail ?? "default_zz.jpg")
                    }
                  />
                </div>
              );
            }
            return (
              <div className="col-span-1" key={i}>
                <GalleryItem
                  url={
                    process.env.BUCKET_URL_ACCESS +
                    "/publikasi/" +
                    (item.selected?.thumbnail ?? "default_zz.jpg")
                  }
                />
              </div>
            );
          })}
        </div>
      </AppContainer>
    </div>
  );
};
