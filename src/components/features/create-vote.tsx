"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { CreateVoteDto, createVoteDto } from "@/lib/validators/user"
import { findAllRole } from "@/services/role-service"
import { createVoteService } from "@/services/user-service"
import { zodResolver } from "@hookform/resolvers/zod"
import { Role } from "@prisma/client"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const CreateVote = ({id}: {id: string}) => {

    const [obsecure, setObsecure] = useState(true)

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
    const form = useForm<CreateVoteDto>({
        resolver: zodResolver(createVoteDto),
    })
    const { toast } = useToast()

    const submitHandler = async (data: CreateVoteDto) => {
        try {
            await createVoteService(id, data)
            toast({
                title: "Berhasil Tambah Voting",
                variant: "default",
            })
            form.reset()
            setOpen(false)
        } catch (error) {
            toast({
                title: "Gagal Tambah Voting",
                description: "Email anda sudah digunakan!",
                variant: "destructive",
            })
        } 
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <Button asChild>
                <DialogTrigger>
                    Vote
                </DialogTrigger>
            </Button>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Tambah Voting</DialogTitle>
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
                        <Button className={cn("w-full", { "bg-muted-foreground": form.formState.isSubmitting })}>{form.formState.isSubmitting ? "Mengunggah..." : "TAMBAH"}</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}