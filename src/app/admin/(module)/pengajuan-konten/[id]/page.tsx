import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { findDraftService } from "@/services/draft-service"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AcceptDraft } from "./accept"
import { RejectDraft } from "./reject"

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
                <Link href={"/admin/pengajuan-konten"}>
                    <ChevronLeft />
                </Link>
            </Button>
            <AspectRatio ratio={2 / 1} className="w-full rounded overflow-hidden">
                <div className="w-full h-full relative">
                <Image src={'http://103.175.217.118:43124/publication/' + data?.thumbnail} alt="" fill sizes="100vh" className=" bg-cover" />
                </div>
            </AspectRatio>
            <div className="flex flex-col">
                <h1 className="text-2xl leading-none font-bold">{data.title}</h1>
                <small className="text-sm">{data.publishedAt == null ? data.createdAt.toDateString() : data.publishedAt.toDateString()}</small>
                <small className="text-sm">Ditulis oleh {data.author?.name}</small>
            </div>
            {
                data.content.split("\n").map((content, i) => (
                    <p className=" text-base" key={i}>{ content }</p>
                ))
            }
            {data.status === "PROCESS" && <div className="w-full flex justify-end gap-3">
                <RejectDraft id={data.id} />
                <AcceptDraft id={data.id} />
            </div>}
        </section>
    )
}

export default Page