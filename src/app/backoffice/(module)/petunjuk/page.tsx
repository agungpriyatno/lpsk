import { Button } from "@/components/ui/button"
import { DownloadIcon } from "lucide-react"

const Page = () => {
    return (
        <div className=" bg-background p-5 rounded mt-5">
            <div className="flex w-full justify-between place-items-center">
                <h1 className=" font-bold text-base">Dokumen Petunjuk Teknis</h1>
                <Button asChild size={'icon'}>
                    <a href={'/documents/petunjuk-teknis.pdf'}>
                        <DownloadIcon size={20} />
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default Page