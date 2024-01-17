"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { BiroDto, biroDto } from "@/lib/validators/biro"
import { createBiro } from "@/services/biro-service"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const Create = () => {
    const [open, setOpen] = useState(false)
    const form = useForm<BiroDto>({
        resolver: zodResolver(biroDto),
        defaultValues: {
            name: "",
        }
    })

    const { toast } = useToast()
    
    const handleKeyDown = (e: any) => {
        if (e.key === ' ') {
            e.stopPropagation()
        }
    }


    const submitHandler = async (data: BiroDto) => {
        try {
            await createBiro(data)
            toast({
                title: "Berhasil Tambah Biro",
                variant: "default",
            })
            form.reset()
            setOpen(false)
        } catch (error) {
            toast({
                title: "Gagal Tambah Biro",
                description: "",
                variant: "destructive",
            })
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <Button asChild>
                <DialogTrigger>
                    Tambah
                </DialogTrigger>
            </Button>
            <DialogContent onKeyDown={(e) => handleKeyDown(e)
            }>
                <DialogHeader>
                    <DialogTitle>Tambah Biro</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-3">
                        <FormField name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl className="flex-1">
                                    <Input placeholder="Masukan Nama Biro" {...field} />
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