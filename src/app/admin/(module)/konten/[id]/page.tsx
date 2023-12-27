import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { findPublicationService } from "@/services/publication-service"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CreateDraftFromPost } from "./create"
import { Takedown } from "./takedown"
import { Takeup } from "./takeup"

type PageProps = {
    params: {
        id?: string,
    }
}

const Page = async ({ params: { id } }: PageProps) => {
    const data = await findPublicationService(id ?? "")

    return (
        <div className=" space-y-5 py-5">
            <section className="space-y-5">
                <Button asChild variant={'default'} size={'icon'} className=" rounded-full">
                    <Link href={"/admin/konten"}>
                        <ChevronLeft />
                    </Link>
                </Button>
                <AspectRatio ratio={2 / 1} className="w-full rounded overflow-hidden">
                    <div className="w-full h-full relative">
                        <Image src={'http://103.175.217.118:43124/publication/' + data.selected?.thumbnail} alt="" fill sizes="100vh" className=" bg-cover" />
                    </div>
                </AspectRatio>
                <div className="flex flex-col">
                    <h1 className="text-2xl leading-none font-bold">{data.selected?.title}</h1>
                    <small className="text-sm">{data.selected?.publishedAt == null ? data.selected?.createdAt.toDateString() : data.selected?.publishedAt.toDateString()}</small>
                    <small className="text-sm">Ditulis oleh {data.author?.name}</small>
                </div>
                <p className="text-base">
                    {data.selected?.content}
                </p>
                { data.status === "PUBLISH" ? <Takedown id={data.id}/> : <Takeup id={data.id}/> }
            </section>
            <Separator className="bg-background" />
            <section className="space-y-3">
                <div className="flex justify-between">
                    <h3 className="text-xl font-bold">Log Pengajuan</h3>
                    <CreateDraftFromPost id={data.id} title={data.selected?.title ?? ""} content={data.selected?.content ?? ""} publishedAt={data.selected?.publishedAt ?? null} sub={data.subCategoryId} category={data.categoryId} link={[]}/>
                </div>
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
            </section>
        </div>
    )
}

export default Page