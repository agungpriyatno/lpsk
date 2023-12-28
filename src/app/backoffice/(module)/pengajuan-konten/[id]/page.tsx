import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { findDraftService } from "@/services/draft-service"
import { ChevronLeft, DownloadIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AcceptDraft } from "./accept"
import { RejectDraft } from "./reject"
import { ShowPDF } from "@/app/(public)/publikasi/[id]/showPDF"

type PageProps = {
    params: {
        id?: string,
    }
}

const Page = async ({ params: { id } }: PageProps) => {
    const data = await findDraftService(id ?? "")

    return (
        <section className="space-y-5 py-5">
            <Button asChild variant={'default'} size={'icon'} className=" rounded-full">
                <Link href={"/backoffice/pengajuan-konten"}>
                    <ChevronLeft />
                </Link>
            </Button>
            <AspectRatio ratio={2 / 1} className="w-full rounded overflow-hidden">
                <div className="w-full h-full relative">
                    <Image src={'http://103.175.217.118:43124/thumbnail/' + data?.thumbnail} alt="" fill sizes="100vh" className=" bg-cover" />
                </div>
            </AspectRatio>
            <div className="flex flex-col">
                <h1 className="text-2xl leading-none font-bold">{data.title}</h1>
                <small className="text-sm">{data.publishedAt == null ? data.createdAt.toDateString() : data.publishedAt.toDateString()}</small>
                <small className="text-sm">Ditulis oleh {data.author?.name}</small>
            </div>
            {
                data.content.split("\n").map((content, i) => (
                    <p className=" text-base" key={i}>{content}</p>
                ))
            }
            {data?.media != undefined && data.media.length > 0 && (
                    <section className="space-y-3">
                        <h3 className=" text-lg font-bold">Dokumen</h3>
                        <div className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6">
                            {data.media.map((item) => (
                                <div className=" bg-background rounded" key={item.media.id}>
                                    <AspectRatio ratio={2 / 1}>
                                        <div className="p-4 2xl:p-4 flex flex-col justify-end h-full w-full gap-2">
                                            <p className="text-sm">{item.media.name.split("Z-")[1].slice(0,25)}</p>
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
            {data.vote != undefined && (
                <div className=" space-y-3">
                    <h3 className=" text-lg font-bold">Voting</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        {data.vote.vote.options.map((item) => (
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
            {data.link != undefined && data.link.length > 0 && (
                <section className="space-y-3">
                    <h3 className=" text-lg font-bold">Sumber</h3>
                    <div className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6">
                        {data.link.map((item) => (
                            <Button size={'sm'} asChild key={item.link.id}>
                                <Link href={item.link.url} target={"_blank"}>{item.link.url.slice(0, 25)}...</Link>
                            </Button>
                        ))}
                    </div>
                </section>
            )}
            {data.status === "PROCESS" && <div className="w-full flex justify-end gap-3">
                <RejectDraft id={data.id} />
                <AcceptDraft id={data.id} />
            </div>}
        </section>
    )
}

export default Page