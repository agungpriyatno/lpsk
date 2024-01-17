"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { UpdateUserDto, updateUserDto } from "@/lib/validators/user"
import { findAllRole } from "@/services/role-service"
import { updateUserService } from "@/services/user-service"
import { zodResolver } from "@hookform/resolvers/zod"
import { Role } from "@prisma/client"
import { Edit2Icon, Loader2Icon, Trash2Icon } from "lucide-react"
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

    const submitHandler = async (value: UpdateUserDto) => {
        try {
            await updateUserService({ name: value.name, id: data.id, role: value.role, biro: value.biro })
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
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nama</FormLabel>
                                <FormControl>
                                    <Input placeholder="Masukan Nama" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name={`role`} render={({ field }) => (
                            <FormItem className="flex-1">
                                <Select onValueChange={field.onChange} defaultValue={field.value} onOpenChange={() => role.length == 0 && fetchRole()} >
                                    <FormControl className="w-full">
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Hak Akses" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {loading ? <Loader2Icon className=" animate-spin"/> : (
                                            role.map((item, i) => <SelectItem key={i} value={item.id}>{item.name}</SelectItem>)
                                        )}
                                    </SelectContent>
                                </Select>
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