"use client"

import { Button } from "@/components/ui/button"
import { signOutService } from "@/services/auth"

const DashboardPage = () => {
    return (
        <Button onClick={() => signOutService()} variant={'destructive'}>Keluar</Button>
    )
}

export default DashboardPage