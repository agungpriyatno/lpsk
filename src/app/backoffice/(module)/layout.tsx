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
            <div className='w-full grid grid-cols-12'>
                <div className="absolute xl:relative xl:col-span-3 2xl:col-span-2">
                    <div className="h-screen w-full py-5">
                        <SideBar/>
                    </div>
                </div>
                <div className=" col-span-12 xl:col-span-9 2xl:col-span-10">
                    <Scroller>
                        <div className="w-full px-5">
                            {children}
                        </div>
                    </Scroller>
                </div>
            </div>
        </AppContainer>
    )
}
