"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { takedownPublication } from "@/services/publication-service"
import { useState } from "react"

type HighlightProps = {
    id: string,
}

export const Highlight = ({ id }: HighlightProps) => {
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    const onClick = async () => {
        setLoading(true)
        try {
            await takedownPublication(id)
            toast({
                title: "Berhasil Menurunkan Konten",
                variant: "default",
            })
        } catch (error) {
            toast({
                title: "Gagal Menurunkan Konten",
                variant: "destructive",
            })
        } finally {
            setLoading(false)
        }
    }
    return (
        <Button variant={'destructive'} onClick={onClick} disabled={loading}>{loading ? "Mengunggah" : "TURUNKAN"}</Button>
    )
}
