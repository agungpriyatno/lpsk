"use client"

import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { deleteUserService } from "@/services/user-service"
import { DeleteIcon } from "lucide-react"
import { useState } from "react"

export const DeleteUser = ({ id }: { id: string }) => {

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

    const submitHandler = async () => {
        try {
            setLoading(true)
            await deleteUserService({ id })
            toast({
                title: "Berhasil Hapus Pengguna",
                variant: "default",
            })
            setOpen(false)
        } catch (error) {
            toast({
                title: "Gagal Hapus Pengguna",
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
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <>
                        This action cAlertDialogDescriptionannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Button variant={'destructive'} className={cn({ "bg-muted-foreground": loading })} onClick={submitHandler}>{loading ? "Mengunggah..." : "Hapus"}</Button>
                    <AlertDialogCancel>Batal</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}