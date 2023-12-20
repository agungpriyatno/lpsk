"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { SignUpDto, signUpDto } from "@/lib/validators/auth"
import { createUserService } from "@/services/user-service"
import { zodResolver } from "@hookform/resolvers/zod"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const CreateUser = () => {

    const [obsecure, setObsecure] = useState(true)

    const [open, setOpen] = useState(false)
    const form = useForm<SignUpDto>({
        resolver: zodResolver(signUpDto),
    })
    const { toast } = useToast()

    const submitHandler = async (data: SignUpDto) => {
        try {
            await createUserService(data)
            toast({
                title: "Berhasil Tambah Pengguna",
                variant: "default",
            })
            form.reset()
            setOpen(false)
            // router.refresh()
        } catch (error) {
            toast({
                title: "Gagal Tambah Pengguna",
                description: "Email anda sudah digunakan!",
                variant: "destructive",
            })
        } 
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <Button asChild>
                <DialogTrigger>
                    Tambah Data
                </DialogTrigger>
            </Button>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Tambah Pengguna</DialogTitle>
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
                        <FormField name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Masukan Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <div className="flex gap-2">
                                    <FormControl className="flex-1">
                                        <Input placeholder="Masukan Kata Sandi" {...field} type={obsecure ? "password" : "text"} />
                                    </FormControl>
                                    <Button type="button" size={'icon'} variant={'outline'} onClick={() => setObsecure(!obsecure)}>
                                        {obsecure ? <EyeIcon /> : <EyeOffIcon />}
                                    </Button>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <Button className={cn("w-full", { "bg-muted-foreground": form.formState.isSubmitting })}>{form.formState.isSubmitting ? "Mengunggah..." : "TAMBAH"}</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}