import { Scroller } from "@/components/features/scroll"
import { AppContainer } from "@/components/ui/container"
import { SideBar } from "./sidebar"
import { sessionService } from "@/services/auth"

export default async function ModuleLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const session = await sessionService()
    return (
        <AppContainer>
            <div className='w-full flex gap-3'>
                <div className="xl:w-[250px] py-3 hidden xl:block">
                        <SideBar modules={session.role?.modules ?? []}/>
                </div>
                <div className="flex-1 relative">
                    <Scroller>
                        <div className="bg-background px-3 py-2 absolute top-3 h-[50px] rounded left-0 w-full z-30"></div>
                        <div className="w-full pt-[60px]">
                            {children}
                        </div>
                    </Scroller>
                </div>
            </div>
        </AppContainer>
    )
}
