"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { PubCategoryDto, pubCategoryDto } from "@/lib/validators/publication"
import { createPubCategory, deleteSubCategory, findAllSubCategory } from "@/services/publication-service"
import { zodResolver } from "@hookform/resolvers/zod"
import { PublicationCategory, PublicationSubCategory } from "@prisma/client"
import { setDate } from "date-fns"
import { PlusIcon, Trash2Icon } from "lucide-react"
import { useEffect, useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"

export const CreateUser = ({ id }: { id: string }) => {
    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState<PublicationSubCategory[]>([])

    const form = useForm<PubCategoryDto>({
        resolver: zodResolver(pubCategoryDto),
        defaultValues: {
            name: id,
            subs: [{
                name: ""
            }]
        }
    })

    const { toast } = useToast()
    const { append, fields, remove } = useFieldArray({
        name: "subs",
        control: form.control
    })
    const handleKeyDown =(e:any) => {
        if(e.key===' '){
            e.stopPropagation()
        }
    }

    const onDelete = async (id: string) => {
        try {
            await deleteSubCategory(id)
            toast({
                title: "Berhasil Hapus Kategori",
                variant: "default",
            })
            form.reset()
            setOpen(false)
        } catch (error) {
            toast({
                title: "Gagal Hapus Kategori",
                description: "",
                variant: "destructive",
            })
        }
    }

    const findAll = async () => {
        const res = await findAllSubCategory(id)
        setCurrent(res)
    }

    const submitHandler = async (data: PubCategoryDto) => {
        try {
            await createPubCategory(data)
            toast({
                title: "Berhasil Tambah Kategori",
                variant: "default",
            })
            form.reset()
            setOpen(false)
        } catch (error) {
            toast({
                title: "Gagal Tambah Kategori",
                description: "",
                variant: "destructive",
            })
        }
    }

    useEffect(() => {
        findAll()
    }, [])

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <Button asChild>
                <DialogTrigger>
                    Sesuaikan
                </DialogTrigger>
            </Button>
            <DialogContent onKeyDown={(e) => handleKeyDown(e)
            }>
                <DialogHeader>
                    <DialogTitle>Penyesuaian Kategori</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-3">
                        {/* <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nama</FormLabel>
                                <FormControl>
                                    <Input placeholder="Masukan Nama" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} /> */}
                        {current.map((item, i) => (
                            <div className="flex w-full gap-3" key={i}>
                                <div className="px-3 py-2 rounded bg-muted flex-1">
                                    {item.name}
                                </div>
                                <Button type="button" onClick={() => onDelete(item.id)} size={'icon'} variant={'destructive'}><Trash2Icon /></Button>
                            </div>
                        ))}
                        {fields.map((item, i) => (
                            <FormField control={form.control} name={`subs.${i}.name`} key={item.id} render={({ field }) => (
                                <div className="flex gap-3 w-full">
                                    <FormItem className="flex-1">
                                        <FormControl>
                                            <Input placeholder="Masukan Sub Kategori"  {...field}  />
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