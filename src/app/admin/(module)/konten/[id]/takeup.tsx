"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { publishPublication } from "@/services/publication-service"
import { useState } from "react"

type TakeupProps = {
    id: string,
}

export const Takeup = ({ id }: TakeupProps) => {
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    const onClick = async () => {
        setLoading(true)
        try {
            await publishPublication(id)
            toast({
                title: "Berhasil Menaikan Konten",
                variant: "default",
            })
        } catch (error) {
            toast({
                title: "Gagal Menaikan Konten",
                variant: "destructive",
            })
        } finally {
            setLoading(false)
        }
    }
    return (
        <Button variant={'default'} onClick={onClick} disabled={loading}>{loading ? "Mengunggah" : "NAIKAN"}</Button>
    )
}
