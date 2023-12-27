import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { AppContainer } from "@/components/ui/container"
import db from "@/lib/db"
import { DownloadIcon, EyeIcon } from "lucide-react"
import Image from "next/image"
import { ShowPDF } from "./showPDF"
import Link from "next/link"



const Page = async ({ params: { id } }: { params: { id: string } }) => {
    const data = await db.publication.findFirstOrThrow({ where: { id }, include: { selected: { include: { link: true, media: true } }, author: true } })
    console.log(data.selected?.media);

    return (
        <div className=" space-y-5 w-full pb-16">
            <div className='h-[400px] w-full bg-background'>
                <div className=' flex flex-col w-full h-full justify-center place-items-center relative'>
                    <div className='h-full w-full absolute bg-slate-800'>
                        <Image src={'http://103.175.217.118:43124/publication/' + data.selected?.thumbnail} fill alt='' sizes='100vh' className=' object-cover opacity-50' />
                    </div>
                </div>
            </div>
            <AppContainer className=" space-y-5">
                <section className="">
                    <h1 className=" text-2xl font-bold leading-none">{data.selected?.title}</h1>
                    <small>Diunggah oleh {data.author?.name}</small>
                </section>
                <section className="space-y-3">
                    {
                        data.selected?.content.split("\n").map((content, i) => (
                            <p className=" text-base" key={i}>{content}</p>
                        ))
                    }
                </section>
                {data.selected?.media != undefined && data.selected.media.length > 0 && (
                    <section className="space-y-3">
                        <h3 className=" text-lg font-bold">Dokumen</h3>
                        <div className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6">
                            {data.selected.media.map((item) => (
                                <div className=" bg-background rounded" key={item.id}>
                                    <AspectRatio ratio={2 / 1}>
                                        <div className="p-4 2xl:p-4 flex flex-col justify-end h-full w-full gap-2">
                                            <p className="text-sm">{item.name}</p>
                                            <div className="flex gap-2 w-full justify-end">
                                                {item.name.split(".")[item.name.split(".").length - 1] === "pdf" && <ShowPDF url={'http://103.175.217.118:43124/publication/' + item.name} />}
                                                <Button size={'icon'} asChild>
                                                    <a href={"/documents/roadmap-birokrasi.pdf"} download>
                                                        <DownloadIcon />
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </AspectRatio>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
                {data.selected?.link != undefined && data.selected.link.length > 0 && (
                    <section className="space-y-3">
                        <h3 className=" text-lg font-bold">Sumber</h3>
                        <div className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6">
                            {data.selected.link.map((item) => (
                                <Button size={'sm'} asChild key={item.id}>
                                    <Link href={item.url} target={"_blank"}>{item.url}</Link>
                                </Button>
                            ))}
                        </div>
                    </section>
                )}
            </AppContainer>
        </div>
    )
}


export default Page