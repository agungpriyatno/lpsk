"use client"

import IDMap from "@/components/features/map"
import { AppContainer } from "@/components/ui/container"
import { ReChartBar } from "@/components/ui/rechart"
import { VoteChart } from "@/components/ui/vote-chart"

const Page = () => {
    return (
        <div className="w-full h-screen">
            <AppContainer className="h-screen">
                <ReChartBar/>
            </AppContainer>
        </div>
    )
}

export default Page