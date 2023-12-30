"use client"

import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { deleteDraftService } from "@/services/draft-service"
import { DeleteIcon } from "lucide-react"
import { useState } from "react"

export const DeleteContent = ({ id }: { id: string }) => {

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

    const submitHandler = async () => {
        try {
            setLoading(true)
            await deleteDraftService({ id })
            toast({
                title: "Berhasil Hapus Pengajuan",
                variant: "default",
            })
            setOpen(false)
        } catch (error) {
            toast({
                title: "Gagal Hapus Pengajuan",
                variant: "destructive",
            })
        } finally {
            setLoading(false)
        }
    }
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger>
                <div className="flex gap-2">
                    <DeleteIcon size={20} /> <span>Hapus</span>
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Kamu yakin ingin menghapus data ini ?</AlertDialogTitle>
                    {/* <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </AlertDialogDescription> */}
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Button variant={'destructive'} className={cn({ "bg-muted-foreground": loading })} onClick={submitHandler}>{loading ? "Mengunggah..." : "Hapus"}</Button>
                    <AlertDialogCancel>Batal</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}