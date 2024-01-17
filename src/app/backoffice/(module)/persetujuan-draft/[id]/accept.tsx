"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { acceptCreateService } from "@/services/draft-service"
import { useState } from "react"

type AcceptDraftProps = {
    id: string,
}

export const AcceptDraft = ({ id }: AcceptDraftProps) => {
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    const onClick = async () => {
        setLoading(true)
        try {
            await acceptCreateService(id)
            toast({
                title: "Berhasil Menerima Pengajuan",
                variant: "default",
            })
        } catch (error) {
            toast({
                title: "Gagal Menerima Pengajuan",
                variant: "destructive",
            })
        } finally {
            setLoading(false)
        }
    }
    return (
        <Button variant={'default'} onClick={onClick} disabled={loading}>{loading ? "Mengunggah" : "TERIMA"}</Button>
    )
}
