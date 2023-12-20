import { Suspense } from "react"
import { AppContainer } from "../ui/container"
import { LinkCard, LinkCardLoading } from "../ui/link-card"
import { ScheduleCard, ScheduleCardLoading } from "../ui/schedule-card"
import { Skeleton } from "../ui/skeleton"
import { HeaderSection } from "../ui/typography"
import { ScrollArea } from "../ui/scroll-area"
import { EXTERNAL_APLICATION, INTERNAL_APLICATION } from "@/data/aplication"

export const AplicationExternalSection = () => {
    return (
        <section className="w-full">
            <AppContainer className="space-y-5">
                <HeaderSection>APLIKASI EKSTERNAL LPSK</HeaderSection>
                <div className="grid grid-cols-3 md:grid-cols-8 xl:grid-cols-12 gap-3 xl:gap-5">
                    <div className=" col-span-3 md:col-span-9">
                        <AplicationExternalContent />
                    </div>
                    <div className="col-span-3 bg-background max-h-full overflow-hidden rounded">
                        
                    </div>
                </div>
            </AppContainer>
        </section>
    )
}

export const AplicationSection = () => {
    return (
        <section className="w-full">
            <AppContainer className="space-y-5">
                <HeaderSection>APLIKASI LPSK</HeaderSection>
                <div className="grid grid-cols-3 md:grid-cols-8 xl:grid-cols-12 gap-3 xl:gap-5">
                    <div className=" col-span-3 md:col-span-9">
                        <AplicationContent />
                    </div>
                    <div className="col-span-3 bg-background max-h-full overflow-hidden rounded">

                    </div>
                </div>
            </AppContainer>
        </section>
    )
}

export const AplicationContent = () => {
    const data = INTERNAL_APLICATION
    return (
        <Suspense fallback={<AplicationContentLoading />}>
            <div className="grid grid-cols-3 md:grid-cols-9 gap-3 xl:gap-5">
                {data.map((item) => <LinkCard className="col-span-3" href={item.link} target="blank" title={item.name} description={item.description ?? ""} image={item.images ?? ""}/>)}
            </div>
        </Suspense>
    )
}


export const AplicationExternalContent = () => {
    const data = EXTERNAL_APLICATION
    return (
        <Suspense fallback={<AplicationContentLoading />}>
            <div className="grid grid-cols-3 md:grid-cols-9 gap-3 xl:gap-5">
                {data.map((item) => <LinkCard className="col-span-3" href={item.link} target="blank" title={item.name} description={item.description ?? ""} image={item.images ?? ""}/>)}
            </div>
        </Suspense>
    )
}
export const AplicationContentLoading = () => {
    return (
        <div className="grid grid-cols-9 gap-3 xl:gap-5">
            <LinkCardLoading className="col-span-3" />
            <LinkCardLoading className="col-span-3" />
            <LinkCardLoading className="col-span-3" />
            <LinkCardLoading className="col-span-3" />
            <LinkCardLoading className="col-span-3" />
            <LinkCardLoading className="col-span-3" />
        </div>
    )
}


export const ScheduleContent = () => {
    return (
        <Suspense>
            <div className="space-y-3 flex flex-col max-h-full">
                <h3 className="text-xl font-bold">KEGIATAN LPSK</h3>
                <ScheduleCard title="Lorem ipsum dolor sit amet" date="29 Agustus 2023" />
                <ScheduleCard title="Lorem ipsum dolor sit amet" date="29 Agustus 2023" />
                <ScheduleCard title="Lorem ipsum dolor sit amet" date="29 Agustus 2023" />
                <ScheduleCard title="Lorem ipsum dolor sit amet" date="29 Agustus 2023" />
                <ScheduleCard title="Lorem ipsum dolor sit amet" date="29 Agustus 2023" />
            </div>
        </Suspense>
        // <ScheduleContentLoading/>
    )
}

export const ScheduleContentLoading = () => {
    return (
        <Suspense>
            <div className="space-y-3">
                <Skeleton className="h-10 w-full bg-background"></Skeleton>
                <ScheduleCardLoading />
                <ScheduleCardLoading />
                <ScheduleCardLoading />
                <ScheduleCardLoading />
                <ScheduleCardLoading />
            </div>
        </Suspense>
    )
}
