import { Scroller } from "@/components/features/scroll"
import { AppContainer } from "@/components/ui/container"
import { LayoutDashboardIcon } from "lucide-react"
import Link from "next/link"
import { SideBar } from "./sidebar"

export default function ModuleLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AppContainer>
            <div className='w-full flex gap-3'>
                <div className="xl:w-[250px] py-3">
                        <SideBar/>
                </div>
                <div className="flex-1 relative">
                    <Scroller>
                        <div className=" bg-background px-3 py-2 absolute top-3 h-[50px] rounded left-0 w-full"></div>
                        <div className="w-full pt-[60px]">
                            {children}
                        </div>
                    </Scroller>
                </div>
            </div>
        </AppContainer>
    )
}
