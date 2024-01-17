"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { rejectDraftService } from "@/services/draft-service"
import { useState } from "react"

type RejectDraftProps = {
    id: string,
}

export const RejectDraft = ({ id }: RejectDraftProps) => {
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    const onClick = async () => {
        setLoading(true)
        try {
            await rejectDraftService(id)
            toast({
                title: "Berhasil Menolak Pengajuan",
                variant: "default",
            })
        } catch (error) {
            toast({
                title: "Gagal Menolak Pengajuan",
                variant: "destructive",
            })
        } finally {
            setLoading(false)
        }
    }
    return (
        <Button variant={'destructive'} onClick={onClick} disabled={loading}>{loading ? "Mengunggah" : "TOLAK"}</Button>
    )
}
