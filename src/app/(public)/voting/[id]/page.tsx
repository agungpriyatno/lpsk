import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { AppContainer } from "@/components/ui/container"
import db from "@/lib/db"
import { DownloadIcon, EyeIcon } from "lucide-react"
import Image from "next/image"
import { ShowPDF } from "./showPDF"
import Link from "next/link"
import { CreateUser } from "./create"
import { HeaderSection } from "@/components/ui/typography"
import { TextToSpeech } from "@/components/features/text-to-speech"
import { ReChartBar } from "@/components/ui/rechart"



const Page = async ({ params: { id } }: { params: { id: string } }) => {
    const data = await db.publication.findFirstOrThrow({
        where: { id }, include:
            { selected: { include: { media: { include: { media: true } }, vote: { include: { vote: { include: { options: { include: { _count: { select: { client: true } } } } } } } } } }, author: true }
    })
    return (
        <div className=" space-y-5 w-full pb-16">
            <div className='h-[400px] w-full bg-background'>
                <div className=' flex flex-col w-full h-full justify-center place-items-center relative'>
                    <div className='h-full w-full absolute bg-slate-800'>
                        <Image src={process.env.BUCKET_URL_ACCESS + '/publikasi/' + data.selected?.thumbnail} fill alt='' sizes='100vh' className=' object-cover opacity-50' />
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
                        data.selected?.content?.split("\n").map((content, i) => (
                            <p className=" text-base" key={i}>{content}</p>
                        ))
                    }
                </section>
                {data.selected?.media != undefined && data.selected.media.length > 0 && (
                    <section className="space-y-3">
                        <h3 className=" text-lg font-bold">Dokumen</h3>
                        <div className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6">
                            {data.selected.media.map((item) => (
                                <div className=" bg-background rounded" key={item.media.id}>
                                    <AspectRatio ratio={2 / 1}>
                                        <div className="p-4 2xl:p-4 flex flex-col justify-end h-full w-full gap-2">
                                            <p className="text-sm">Dokumen</p>
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
                <ReChartBar data={data.selected?.vote?.vote.options.map((item) => {
                    return {...item, count: item._count.client}
                }) ?? []}/>
                {data.selected?.vote != undefined && (
                    <section>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                            {data.selected.vote?.vote.options.map((item) => (
                                <div className=" bg-background rounded overflow-hidden" key={item.id}>
                                    <AspectRatio ratio={2 / 1}>
                                        <div className="h-full w-full bg-slate-800">
                                            <Image src={process.env.BUCKET_URL_ACCESS + '/publikasi/' + item.thumbnail} alt="" fill sizes="100vh" className=" object-cover opacity-40" />
                                        </div>
                                        <div className=" flex flex-col justify-end place-items-center h-full absolute left-0 top-0 w-full gap-2 p-5 text-slate-50">
                                            <p className="text-lg">{item._count.client}</p>
                                            <h3 className="text-base font-bold">{item.name}</h3>
                                            <CreateUser id={item.id} />
                                        </div>
                                    </AspectRatio>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
                {data.selected?.vote != undefined && data.selected.vote.vote.options.map((item) => (
                    <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5 md:min-h-[450px] bg-background rounded" key={item.id}>
                        <div className=" col-span-6 md:col-span-4 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={process.env.BUCKET_URL_ACCESS + "/publikasi/" + item.thumbnail} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 md:col-span-8 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection className='flex gap-2'>
                                    {item.name}
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        {item.descriptions}
                                    </p>
                                </TextToSpeech>
                                <div className=' flex gap-3'>
                                    <CreateUser id={item.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {data.selected?.sourceLink != null && (
                    <section className="space-y-3">
                        <h3 className=" text-lg font-bold">Sumber</h3>
                        <div className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6">
                            <Button size={'sm'} asChild>
                                <Link  href={data.selected?.sourceLink} target={"_blank"}>Sumber</Link>
                            </Button>
                        </div>
                    </section>
                )}
            </AppContainer>
        </div>
    )
}


export default Page