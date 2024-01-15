import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { AppContainer } from "@/components/ui/container"
import db from "@/lib/db"
import { DownloadIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ShowPDF } from "./showPDF"



const Page = async ({ params: { id } }: { params: { id: string } }) => {
    const data = await db.publication.findFirstOrThrow({
        where: { id }, include:
            { selected: { include: { media: { include: { media: true } } } }, author: true }
    })
    return (
        <div className=" space-y-5 w-full pb-16">
            <div className='h-[400px] w-full bg-background'>
                <div className=' flex flex-col w-full h-full justify-center place-items-center relative'>
                    <div className='h-full w-full absolute bg-slate-800'>
                        <Image src={process.env.BUCKET_URL_ACCESS + '/publikasi/' + (data.selected?.thumbnail ?? "default_zz.jpg")} fill alt='' sizes='100vh' className=' object-cover opacity-50' />
                    </div>
                </div>
            </div>
            <AppContainer className=" space-y-5">
                <section className="">
                    <h1 className=" text-2xl font-bold leading-none">{data.selected?.title}</h1>
                    <small>Diunggah oleh {data.author?.name ?? "admin"}</small>
                </section>
                <section className="space-y-3" dangerouslySetInnerHTML={{__html: data.selected?.content ?? ""}}>
                </section>
                {data.selected?.media != undefined && data.selected.media.length > 0 && (
                    <section className="space-y-3">
                        <h3 className=" text-lg font-bold">Dokumen</h3>
                        <div className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6">
                            {data.selected.media.map((item) => (
                                <div className=" bg-background rounded" key={item.media.id}>
                                    <AspectRatio ratio={2 / 1}>
                                        <div className="p-4 2xl:p-4 flex flex-col justify-end h-full w-full gap-2">
                                            <p className="text-sm">{item.media.name.split("Z")[1]}</p>
                                            <div className="flex gap-2 w-full justify-end">
                                                {item.media.name.split(".")[item.media.name.split(".").length - 1] === "pdf" && <ShowPDF url={process.env.BUCKET_URL_ACCESS + '/publikasi/' + item.media.name} />}
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
                {data.selected?.sourceLink != undefined && (
                    <section className="space-y-3">
                        <h3 className=" text-lg font-bold">Sumber</h3>
                        <div className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6">
                            <Button size={'sm'} asChild>
                                <Link  href={data.selected.sourceLink} target={"_blank"}>{data.selected.sourceLink}</Link>
                            </Button>
                        </div>
                    </section>
                )}
                {data.selected?.videoLink != undefined && (
                    <section className="space-y-3">
                        <h3 className=" text-lg font-bold">Video</h3>
                        <div className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6">
                            <Button size={'sm'} asChild>
                                <Link  href={data.selected.videoLink} target={"_blank"}>{data.selected.videoLink}</Link>
                            </Button>
                        </div>
                    </section>
                )}
            </AppContainer>
        </div>
    )
}


export default Page