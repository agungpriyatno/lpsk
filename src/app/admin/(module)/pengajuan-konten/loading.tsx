import { DataTableLoading } from "@/components/ui/data-table"
import { Skeleton } from "@/components/ui/skeleton"

const UserPageLoading =  () => {

    return (
        <div className="space-y-5 py-5">
            <div className="flex flex-col xl:flex-row xl:justify-between gap-3">
                <Skeleton className=" bg-background h-10 w-20"/>
                <Skeleton className=" bg-background h-10 w-20"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                <Skeleton className=" bg-background h-24"/>
                <Skeleton className=" bg-background h-24"/>
                <Skeleton className=" bg-background h-24"/>
                <Skeleton className=" bg-background h-24"/>
            </div>
            <DataTableLoading/>
        </div>
    )
}

export default UserPageLoading