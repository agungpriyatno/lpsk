import { Scroller } from "@/components/features/scroll"
import { AppContainer } from "@/components/ui/container"
import { sessionService } from "@/services/auth"

export default async function ModuleLayout({
    user,
    konten,
    pengajuanDraft,
    persetujuanDraft,
    children,
}: {
    user: React.ReactNode,
    konten: React.ReactNode,
    pengajuanDraft: React.ReactNode,
    persetujuanDraft: React.ReactNode,
    children: React.ReactNode,
}) {

    const session = await sessionService()

    return (
        <div className=" mt-5 space-y-5">
            {user}
            {pengajuanDraft}
            {persetujuanDraft}
            {konten}
            {children}
        </div>
    )
}
