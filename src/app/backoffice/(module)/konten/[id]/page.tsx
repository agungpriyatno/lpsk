import { ShowPDF } from "@/app/(public)/publikasi/[id]/showPDF"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { findPublicationService } from "@/services/publication-service"
import { ChevronLeft, DownloadIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Takedown } from "./takedown"
import { Takeup } from "./takeup"

type PageProps = {
    params: {
        id?: string,
    }
}

const Page = async ({ params: { id } }: PageProps) => {
    const data = await findPublicationService(id ?? "")
    const { selected } = data

    return (
        <section className="space-y-5 py-5">
            <Button asChild variant={'default'} size={'icon'} className=" rounded-full">
                <Link shallow href={"/backoffice/konten"}>
                    <ChevronLeft />
                </Link>
            </Button>
            <AspectRatio ratio={2 / 1} className="w-full rounded overflow-hidden">
                <div className="w-full h-full relative">
                    <Image src={process.env.BUCKET_URL_ACCESS + '/publikasi/' + data?.selected?.thumbnail} alt="" fill sizes="100vh" className=" bg-cover" />
                </div>
            </AspectRatio>
            <section className="">
                <h1 className=" text-2xl font-bold leading-none">{data.selected?.title}</h1>
                <small>Diunggah oleh {data.author?.name}</small>
            </section>
            {data.status === "PUBLISH" ? <Takedown id={data.id} /> : <Takeup id={data.id} />}
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
                            <Link shallow href={data.selected.sourceLink} target={"_blank"}>{data.selected.sourceLink}</Link>
                        </Button>
                    </div>
                </section>
            )}
            {data.selected?.videoLink != undefined && (
                <section className="space-y-3">
                    <h3 className=" text-lg font-bold">Video</h3>
                    <div className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6">
                        <Button size={'sm'} asChild>
                            <Link shallow href={data.selected.videoLink.slice(0, 10)} target={"_blank"}>{data.selected.videoLink}</Link>
                        </Button>
                    </div>
                </section>
            )}
            <Separator />
            <div className="space-y-3">
                <h3 className=" text-xl font-bold">DAFTAR PENGAJUAN</h3>
                {data.draft.map((item) => (
                    <div key={item.id} className="px-3 py-2 bg-background rounded">
                        <Link shallow href={'/admin/pengajuan-konten/' + item.id}>
                            <div className="flex w-full place-items-center gap-2">
                                <div className="flex flex-col flex-1">
                                    <h4 className="text-base font-bold">{item.title}</h4>
                                    <p className="text-sm">{item.content?.slice(0, 50)}...</p>
                                    <p className="text-sm">{item.createdAt.toDateString()}</p>
                                </div>
                                {data.selectedId == item.id && <div className={cn("px-3 py-2 rounded-full text-white text-xs bg-green-600")}>
                                    DIPILIH
                                </div>}
                                <div className={cn("px-3 py-2 rounded-full text-white text-xs", {
                                    "bg-red-600": item.status === "REJECT",
                                    "bg-green-600": item.status === "ACCEPT",
                                    "bg-blue-600": item.status === "PROCESS",
                                })}>
                                    {item.status === "ACCEPT" ? "DITERIMA" : item.status === "PROCESS" ? "DIPROSES" : "DITOLAK"}
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