import { AspectRatio } from "@/components/ui/aspect-ratio"
import { AppContainer } from "@/components/ui/container"
import db from "@/lib/db"
import Image from "next/image"
import Link from "next/link"
import { TabMenu } from "./tab"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { FileIcon, DownloadCloudIcon } from "lucide-react"
import { Button } from "@/components/ui/button"


type PageProps = {
    searchParams: {
        status?: string,
        search?: string
    }
}

const Page = async ({ searchParams: { status, search } }: PageProps) => {
    const data = await db.publicationCategory.findFirstOrThrow({ where: { code: "LPSK-KERJASAMA" }, include: { subs: true } })
    const list = await db.publication.findMany({
        include: { selected: { include: { media: true, author: true, category: true, subCategory: true } } },
        where: { AND: [{ selected: { category: { code: "LPSK-KERJASAMA" } } }, search != undefined ? { selected: { title: { contains: search } } } : {}, status != undefined ? { selected: { subCategoryId: status } } : {}] }
    })
    return (
        <div className=" space-y-5 w-full pb-16">
            <div className='h-[400px] w-full bg-background'>
                <div className=' flex flex-col w-full h-full justify-center place-items-center relative'>
                    <div className='h-full w-full absolute bg-slate-800'>
                        <Image src={'/images/fondasi.png'} fill alt='' sizes='100vh' className=' object-cover opacity-50' />
                    </div>
                    <div className=' absolute left-0 top-0 flex flex-col w-screen h-full justify-center place-items-center'>
                        <h1 className=' text-3xl font-bold absolute text-slate-100'>Kerja Sama</h1>
                    </div>
                </div>
            </div>
            <TabMenu data={data} />
            <AppContainer className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6 gap-3">
                {list.map(({ selected, id }) => (
                    <Card key={id}>
                        <CardHeader className='flex justify-center place-items-center'>
                            <FileIcon size={50} />
                        </CardHeader>
                        <CardContent className='text-center'>
                            <p>{selected?.title}</p>
                        </CardContent>
                        <CardFooter className='flex justify-center place-items-center'>
                            <div className="flex gap-2">
                                <Button className='flex gap-2'>
                                    <Link href={"/kerjasama/"+ selected?.id} className="flex gap-2">
                                        Detail
                                    </Link>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
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