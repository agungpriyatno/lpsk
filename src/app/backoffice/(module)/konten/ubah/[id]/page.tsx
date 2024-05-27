import { findDraftService } from "@/services/draft-service"
import UpdateFeature from "./update"

type PageProps = {
    params: {id: string}
}
const Page = async ({params: {id}}: PageProps) => {
    const initialData = await findDraftService(id ?? "")

    return (
        <div className="space-y-3 py-3">
            <div className="flex flex-col xl:flex-row xl:justify-between gap-3">
                <h1 className="text-2xl font-bold">Ubah Konten</h1>
            </div>
            <div className="bg-background p-5 rounded">
               <UpdateFeature initialData={initialData}/>
            </div>
        </div>
    )
}

export default Page