"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { SignUpDto, signUpDto } from "@/lib/validators/auth"
import { UpdateUserDto, updateUserDto } from "@/lib/validators/user"
import { signUpService } from "@/services/auth"
import { createUserService, updateUserService } from "@/services/user-service"
import { zodResolver } from "@hookform/resolvers/zod"
import { Edit2Icon, EyeIcon, EyeOffIcon, Link } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const UpdateUser = (data: UpdateUserDto & { id: string }) => {

    const [open, setOpen] = useState(false)
    const form = useForm<UpdateUserDto>({
        resolver: zodResolver(updateUserDto),
        defaultValues: {
            name: data.name
        }
    })
    const { toast } = useToast()

    const submitHandler = async (value: UpdateUserDto) => {
        try {
            await updateUserService({ name: value.name, id: data.id })
            toast({
                title: "Berhasil Ubah Pengguna",
                variant: "default",
            })
            form.reset()
            setOpen(false)
        } catch (error) {
            toast({
                title: "Gagal Ubah Pengguna",
                variant: "destructive",
            })
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <div className="flex gap-2">
                    <Edit2Icon size={20} /> <span>Edit</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Ubah Pengguna</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-3">
                        <FormField name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nama</FormLabel>
                                <FormControl>
                                    <Input placeholder="Masukan Nama" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <Button className={cn("w-full", { "bg-muted-foreground": form.formState.isSubmitting })}>{form.formState.isSubmitting ? "Mengunggah..." : "UBAH"}</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}