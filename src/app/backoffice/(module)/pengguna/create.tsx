"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { CreateUserDto, createUserDto } from "@/lib/validators/user"
import { findAllBiro } from "@/services/biro-service"
import { findAllRole } from "@/services/role-service"
import { createUserService } from "@/services/user-service"
import { zodResolver } from "@hookform/resolvers/zod"
import { Biro, Role } from "@prisma/client"
import { EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const CreateUser = () => {

    const [obsecure, setObsecure] = useState(true)
    const [loadingBiro, setLoadingBiro] = useState<boolean>(false)
    const [biro, setBiro] = useState<Biro[]>([])

    const findBiro = async () => {
        try {
            setLoadingBiro(true)
            const res = await findAllBiro()
            console.log(res);
            
            setBiro(res)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }


    const [loading, setLoading] = useState(true)
    const [role, setRole] = useState<Role[]>([])
    const fetchRole = async () => {
        setLoading(true)
        try {
            const res = await findAllRole()
            setRole(res)
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    const [open, setOpen] = useState(false)
    const form = useForm<CreateUserDto>({
        resolver: zodResolver(createUserDto),
    })
    const { toast } = useToast()

    const submitHandler = async (data: CreateUserDto) => {
        try {
            await createUserService(data)
            toast({
                title: "Berhasil Tambah Pengguna",
                variant: "default",
            })
            form.reset()
            setOpen(false)
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
                        <FormField control={form.control} name={`role`} render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Hak Akses</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value} onOpenChange={() => role.length == 0 && fetchRole()} >
                                    <FormControl className="w-full">
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Hak Akses" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {loading ? <Loader2Icon className=" animate-spin" /> : (
                                            role.map((item, i) => <SelectItem key={i} value={item.id}>{item.name}</SelectItem>)
                                        )}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name={"biro"} render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Biro</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value ?? ""} onOpenChange={findBiro} >
                                    <FormControl className="w-full">
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Pilih Kategori" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            !loadingBiro ? (
                                                <div className="w-full flex justify-center place-items-center">
                                                    <Loader2Icon className=" animate-spin" />
                                                </div>
                                            ) : biro.map(((item, i) => <SelectItem key={i} value={item.id}>{item.name}</SelectItem>))
                                        }
                                    </SelectContent>
                                </Select>
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