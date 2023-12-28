"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { PubCategoryDto, pubCategoryDto } from "@/lib/validators/publication"
import { createPubCategory } from "@/services/publication-service"
import { zodResolver } from "@hookform/resolvers/zod"
import { PublicationCategory, PublicationSubCategory } from "@prisma/client"
import { PlusIcon, Trash2Icon } from "lucide-react"
import { useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"

export const CreateUser = () => {
    const [open, setOpen] = useState(false)
    
    const form = useForm<PubCategoryDto>({
        resolver: zodResolver(pubCategoryDto),
        defaultValues: {
            name: "",
            subs: []
        }
    })

    const { toast } = useToast()
    const { append, fields, remove } = useFieldArray({
        name: "subs",
        control: form.control
    })

    const submitHandler = async (data: PubCategoryDto) => {
        try {
            await createPubCategory(data)
            toast({
                title: "Berhasil Tambah Ketegori",
                variant: "default",
            })
            form.reset()
            setOpen(false)
        } catch (error) {
            toast({
                title: "Gagal Tambah Ketegori",
                description: "",
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
                    <DialogTitle>Tambah Kategori</DialogTitle>
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
                        {fields.map((item, i) => (
                            <FormField control={form.control} name={`subs.${i}.name`} key={item.id} render={({ field }) => (
                                <div className="flex gap-3 w-full">
                                    <FormItem className="flex-1">
                                        <FormControl>
                                            <Input placeholder="Masukan Sub Kategori" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    <Button type="button" onClick={() => remove(fields.length - 1)} size={'icon'} variant={'destructive'}><Trash2Icon /></Button>
                                </div>
                            )} />
                            

                        ))}
                        <div className="flex w-full gap-3 place-items-center">
                            <div className=" h-10 w-full bg-muted rounded"></div>
                            <Button type="button" onClick={() => append({ name: "" })} size={'icon'} variant={'outline'}><PlusIcon /></Button>
                        </div>

                        <Button className={cn("w-full", { "bg-muted-foreground": form.formState.isSubmitting })}>{form.formState.isSubmitting ? "Mengunggah..." : "TAMBAH"}</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}