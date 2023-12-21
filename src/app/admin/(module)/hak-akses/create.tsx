"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { RoleDto, roleDto } from "@/lib/validators/roles"
import { createRoleService } from "@/services/role-service"
import { zodResolver } from "@hookform/resolvers/zod"
import { PlusIcon, Trash2Icon } from "lucide-react"
import { useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"

export const CreateRole = () => {
    const [open, setOpen] = useState(false)
    const form = useForm<RoleDto>({
        resolver: zodResolver(roleDto),
        defaultValues: {
            modules: [
                { code: "" }
            ]
        }
    })

    const { toast } = useToast()
    const { append, fields, remove } = useFieldArray({
        name: "modules",
        control: form.control
    })

    const submitHandler = async (data: RoleDto) => {
        try {
            await createRoleService(data)
            toast({
                title: "Berhasil Tambah Hak Akses",
                variant: "default",
            })
            form.reset()
            setOpen(false)
        } catch (error) {
            toast({
                title: "Gagal Tambah Hak Akses",
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
                    <DialogTitle>Tambah Hak Akses</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-3">
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nama</FormLabel>
                                <FormControl>
                                    <Input placeholder="Masukan Nama" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="descriptions" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Deskripsi</FormLabel>
                                <FormControl>
                                    <Input placeholder="Masukan Deskripsi" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        {fields.map((item, i) => (
                            <FormField control={form.control} name={`modules.${i}.code`} key={item.id} render={({ field }) => (
                                <div className="flex gap-3 w-full">
                                    <FormItem className="flex-1">
                                        <Select onValueChange={field.onChange} defaultValue={field.value} >
                                            <FormControl className="w-full">
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Hak Akses" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="LPSK-USER">Manajemen Pengguna</SelectItem>
                                                <SelectItem value="LPSK-ROLE">Manajemen hak Akses</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                    <Button type="button" onClick={() => remove(fields.length - 1)} size={'icon'} variant={'destructive'}><Trash2Icon /></Button>
                                </div>
                            )} />

                        ))}
                        <div className="flex w-full gap-3 place-items-center">
                            <div className=" h-10 w-full bg-muted rounded"></div>
                            <Button type="button" onClick={() => append({ code: "" })} size={'icon'} variant={'outline'}><PlusIcon /></Button>
                        </div>

                        <Button className={cn("w-full", { "bg-muted-foreground": form.formState.isSubmitting })}>{form.formState.isSubmitting ? "Mengunggah..." : "TAMBAH"}</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}