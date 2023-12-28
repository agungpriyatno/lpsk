import { ShowPDF } from "@/app/(public)/publikasi/[id]/showPDF"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { findDraftService } from "@/services/draft-service"
import { findPublicationService } from "@/services/publication-service"
import { ChevronLeft, DownloadIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Takedown } from "./takedown"
import { Takeup } from "./takeup"
import { cn } from "@/lib/utils"

type PageProps = {
    params: {
        id?: string,
    }
}

const Page = async ({ params: { id } }: PageProps) => {
    const data = await findPublicationService(id ?? "")

    return (
        <section className="space-y-5 py-5">
            <Button asChild variant={'default'} size={'icon'} className=" rounded-full">
                <Link href={"/backoffice/pengajuan-konten"}>
                    <ChevronLeft />
                </Link>
            </Button>
            <AspectRatio ratio={2 / 1} className="w-full rounded overflow-hidden">
                <div className="w-full h-full relative">
                    <Image src={'http://103.175.217.118:43124/publikasi/' + data?.selected?.thumbnail} alt="" fill sizes="100vh" className=" bg-cover" />
                </div>
            </AspectRatio>
            <div className="flex flex-col">
                <h1 className="text-2xl leading-none font-bold">{data?.selected?.title}</h1>
                <small className="text-sm">{data?.selected?.publishedAt == null ? data?.selected?.createdAt.toDateString() : data?.selected.publishedAt.toDateString()}</small>
                <small className="text-sm">Ditulis oleh {data?.selected?.author?.name}</small>
            </div>
            {
                data?.selected?.content.split("\n").map((content, i) => (
                    <p className=" text-base" key={i}>{content}</p>
                ))
            }
            {data?.status === "PUBLISH" ? <Takedown id={data.id} /> : <Takeup id={data.id} />}
            {data?.selected?.media != undefined && data?.selected?.media.length > 0 && (
                <section className="space-y-3">
                    <h3 className=" text-lg font-bold">Dokumen</h3>
                    <div className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6">
                        {data?.selected?.media.map((item) => (
                            <div className=" bg-background rounded" key={item.media.id}>
                                <AspectRatio ratio={2 / 1}>
                                    <div className="p-4 2xl:p-4 flex flex-col justify-end h-full w-full gap-2">
                                        <p className="text-sm">{item.media.name.split("Z-")[1].slice(0, 25)}</p>
                                        <div className="flex gap-2 w-full justify-end">
                                            {item.media.name.split(".")[item.media.name.split(".").length - 1] === "pdf" && <ShowPDF url={'http://103.175.217.118:43124/publication/' + item.media.name} />}
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
            {data?.selected?.vote != undefined && (
                <div className=" space-y-3">
                    <h3 className=" text-lg font-bold">Voting</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        {data?.selected?.vote.vote.options.map((item) => (
                            <div className=" bg-background rounded" key={item.id}>
                                <AspectRatio ratio={2 / 1}>
                                    <div className=" flex flex-col justify-center place-items-center h-full">
                                        <p className="text-lg">{item._count.client}</p>
                                        <h3 className="text-base font-bold">{item.name}</h3>
                                    </div>
                                </AspectRatio>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {data?.selected?.link != undefined && data?.selected?.link.length > 0 && (
                <section className="space-y-3">
                    <h3 className=" text-lg font-bold">Sumber</h3>
                    <div className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6">
                        {data?.selected?.link.map((item) => (
                            <Button size={'sm'} asChild key={item.link.id}>
                                <Link href={item.link.url} target={"_blank"}>{item.link.url.slice(0, 25)}...</Link>
                            </Button>
                        ))}
                    </div>
                </section>
            )}
            <div className="space-y-3">
                <h3 className=" text-lg font-bold">Draft</h3>
                {data.draft.map((item) => (
                    <div key={item.id} className="px-5 py-3 bg-background rounded">
                        <Link href={'/admin/pengajuan-konten/' + item.id}>
                            <div className="flex w-full place-items-center gap-2">
                                <div className="flex flex-col flex-1">
                                    <h4 className="text-lg font-bold">{item.title}</h4>
                                    <p className="text-sm">{item.content.slice(0, 50)}...</p>
                                    <p className="text-sm">{item.createdAt.toDateString()}</p>
                                </div>
                                {data.selectedId == item.id && <div className={cn("px-3 py-2 rounded-full text-white text-sm bg-green-500")}>
                                    SELECTED
                                </div>}
                                <div className={cn("px-3 py-2 rounded-full text-white text-sm", {
                                    "bg-red-500": item.status === "REJECT",
                                    "bg-green-500": item.status === "ACCEPT",
                                    "bg-blue-500": item.status === "PROCESS",
                                })}>
                                    {item.status}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Page