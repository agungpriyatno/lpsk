import { cn } from "@/lib/utils"

export type ContainterProps = {
    children: React.ReactNode,
    className?: string
}

export const AppContainer = ({ children, className }: ContainterProps) => {
    return (
        <div className={cn(
            "px-[16px] md:px-[32px] xl:px-[60px] 2xl:px-[160px] w-full h-full",
            className
        )}>
            {children}
        </div>
    )
}