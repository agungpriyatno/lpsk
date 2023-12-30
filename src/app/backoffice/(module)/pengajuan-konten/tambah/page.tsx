import CreateFeature from "./create"

const Page = async () => {
    return (
        <div className="space-y-3 py-3">
            <div className="flex flex-col xl:flex-row xl:justify-between gap-3">
                <h1 className="text-2xl font-bold">Tambah Pengajuan Konten</h1>
            </div>
            <div className="bg-background p-5 rounded">
               <CreateFeature/>
            </div>
        </div>
    )
}

export default Page