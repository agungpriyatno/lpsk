import { Skeleton } from "./skeleton"

export type ScheduleCardProps = {
    title: string,
    date: string
}

export const ScheduleCard = ({title, date}: ScheduleCardProps) => {
    return (
        <div className="px-3 py-2 2xl:px-4 2xl:py-3 bg-background rounded">
            <span className="font-bold text-sm">{date}</span>
            <h4 className="text-base">{title}</h4>
        </div>
    )
}

export const ScheduleCardLoading = () => {
    return (
        <Skeleton className="px-4 py-3 bg-background rounded h-20">
        </Skeleton>
    )
}