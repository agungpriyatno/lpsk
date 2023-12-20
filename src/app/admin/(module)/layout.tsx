import { AppContainer } from "@/components/ui/container"

export default function ModuleLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AppContainer>
            <div className='w-full grid grid-cols-12 gap-5'>
                <div className="absolute xl:relative xl:col-span-3 2xl:col-span-2">
                    <div className=" bg-background h-screen w-full"></div>
                </div>
                <div className=" col-span-12 xl:col-span-9 2xl:col-span-10">
                    {children}
                </div>
            </div>
        </AppContainer>
    )
}
