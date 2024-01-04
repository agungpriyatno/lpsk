import { AspectRatio } from "@/components/ui/aspect-ratio"
import { AppContainer } from "@/components/ui/container"
import db from "@/lib/db"
import Image from "next/image"
import Link from "next/link"
import { TabMenu } from "./tab"

type PageProps = {
    searchParams: {
        status?: string,
        search?: string
    }
}

const Page = async ({ searchParams: { status, search } }: PageProps) => {
    const data = await db.publicationCategory.findFirstOrThrow({ where: { code: "LPSK-BERITA" }, include: { subs: true } })
    const list = await db.publication.findMany({
        include: { selected: { include: { media: true, author: true, category: true, subCategory: true } } },
        where: { AND: [{ selected: { category: {code: "LPSK-BERITA"}} }, status != undefined ? { selected: { title: { contains: search } } } : {}, status != undefined ? { selected: { subCategoryId: status } } : {}] }
    })
    return (
        <div className=" space-y-5 w-full pb-16">
            <div className='h-[400px] w-full bg-background'>
                <div className=' flex flex-col w-full h-full justify-center place-items-center relative'>
                    <div className='h-full w-full absolute bg-slate-800'>
                        <Image src={'/images/fondasi.png'} fill alt='' sizes='100vh' className=' object-cover opacity-50' />
                    </div>
                    <div className=' absolute left-0 top-0 flex flex-col w-screen h-full justify-center place-items-center'>
                        <h1 className=' text-3xl font-bold absolute text-slate-100'>Berita</h1>
                    </div>
                </div>
            </div>
            <TabMenu data={data} />
            <AppContainer className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6 gap-3">
                {list.map(({ selected, id }) => (
                    <div className="bg-background rounded relative overflow-hidden group" key={id}>
                        <AspectRatio ratio={1 / 1}>
                            <Link  href={"/berita/" + id}>
                                <div className="flex flex-col p-5 absolute left-0 top-0 w-full h-full justify-end z-10 text-slate-50">
                                 <h5 className="text-base font-bold">{selected?.title.slice(0, 20)}</h5>
                                    <p className="text-sm">{selected?.content?.slice(0, 20)}</p>
                                    <small className="text-xs">Diunggah oleh {selected?.author?.name}</small>
                                </div>
                            </Link>
                            <div className="relative w-full h-full bg-slate-800">
                                <Image src={process.env.BUCKET_URL_ACCESS +'/publikasi/' + selected?.thumbnail} alt="" className=" object-cover opacity-70 group-hover:scale-125 duration-300 transition-all" fill sizes="100vh" />
                            </div>
                            <div className=" absolute z-20 right-2 top-2">
                                {/* {selected?.category != undefined && (
                                    <div className="px-3 py-1 bg-background rounded-full flex justify-center place-items-center">
                                        <small className="text-xs">{selected?.category?.name}</small>
                                    </div>
                                )} */}
                                {selected?.subCategory != undefined && (
                                    <div className="px-3 py-1 bg-background rounded-full flex justify-center place-items-center">
                                        <small className="text-xs">{selected?.subCategory?.name}</small>
                                    </div>
                                )}
                            </div>
                        </AspectRatio>
                    </div>
                ))}

            </AppContainer>
            {
                list.length == 0 && (
                    <AppContainer>
                        <div className="w-full flex flex-col justify-center place-items-center">
                            <span>Tidak ada data</span>
                        </div>
                    </AppContainer>
                )
            }
        </div>
    )
}


export default Page