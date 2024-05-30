import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { findDraftService } from "@/services/draft-service"
import { ChevronLeft, DownloadIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AcceptDraft } from "./accept"
import { RejectDraft } from "./reject"
import { ShowPDF } from "@/components/features/showPDF"


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
                <Link  href={"/backoffice/persetujuan-draft"}>
                    <ChevronLeft />
                </Link>
            </Button>
            <AspectRatio ratio={2 / 1} className="w-full rounded overflow-hidden">
                <div className="w-full h-full relative">
                    <Image src={process.env.BUCKET_URL_ACCESS + (data?.thumbnail ?? "default_zz.jpg")} alt="" fill sizes="100vh" className=" object-cover" />
                </div>
            </AspectRatio>
            <section className="">
                <h1 className=" text-2xl font-bold leading-none">{data?.title}</h1>
                <small>Diunggah oleh {data.author?.name}</small>
            </section>
            <section className="space-y-3" dangerouslySetInnerHTML={{__html: data?.content ?? ""}}>
                </section>
            {data?.media != undefined && data.media.length > 0 && (
                <section className="space-y-3">
                    <h3 className=" text-lg font-bold">Dokumen</h3>
                    <div className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6">
                        {data.media.map((item) => (
                            <div className=" bg-background rounded" key={item.media.id}>
                                <AspectRatio ratio={2 / 1}>
                                    <div className="p-4 2xl:p-4 flex flex-col justify-end h-full w-full gap-2">
                                        <p className="text-sm">{item.media.name.split("Z-")[1]}</p>
                                        <div className="flex gap-2 w-full justify-end">
                                            {item.media.name.split(".")[item.media.name.split(".").length - 1] === "pdf" && <ShowPDF url={process.env.BUCKET_URL_ACCESS + item.media.name} />}
                                            <Button size={'icon'} asChild>
                                                <a href={process.env.BUCKET_URL_ACCESS + item.media.name} download>
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
            {data?.sourceLink != undefined && (
                <section className="space-y-3">
                    <h3 className=" text-lg font-bold">Sumber</h3>
                    <div className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6">
                        <Button size={'sm'} asChild>
                            <Link  href={data.sourceLink} target={"_blank"}>Sumber</Link>
                        </Button>
                    </div>
                </section>
            )}
            {data?.videoLink != undefined && (
                <section className="space-y-3">
                    <h3 className=" text-lg font-bold">Video</h3>
                    <div className=" grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6">
                        <Button size={'sm'} asChild>
                            <Link  href={data.videoLink} target={"_blank"}>Video</Link>
                        </Button>
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