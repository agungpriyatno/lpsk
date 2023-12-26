"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { DraftCreateDto, draftCreateDto } from "@/lib/validators/draft"
import { createDraftService } from "@/services/draft-service"
import { findAllCategory } from "@/services/publication-service"
import { Prettify } from "@/types/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { PublicationCategory, PublicationSubCategory } from "@prisma/client"
import { format } from "date-fns"
import { CalendarIcon, Loader2Icon, PlusIcon, Trash2Icon } from "lucide-react"
import { useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"

type CategoryType = Prettify<PublicationCategory & { subs: PublicationSubCategory[] }>

export const CreateDraft = () => {

    const { toast } = useToast()
    const [category, setCategory] = useState<CategoryType[]>([])
    const [loadingCategory, setLoadingCategory] = useState<boolean>(false)
    const [published, setPublished] = useState(false)
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState<string | null>(null)
    const [thumbnail, setThumbnail] = useState<FileList | null>(null)

    const [file, setFile] = useState<FileList | null>(null)
    const [includeFile, setIncludeFile] = useState(false)

    const [includeLink, setIncludeLink] = useState(false)


    const form = useForm<DraftCreateDto>({
        resolver: zodResolver(draftCreateDto),
        defaultValues: {
            publishedAt: null,
            category: null,
            sub: null,
            title: "",
            content: "",
            link: [{ url: "" }]
        }
    })

    const { append, fields, remove } = useFieldArray({
        name: "link",
        control: form.control
    })

    const findOptions = async () => {
        try {
            setLoadingCategory(true)
            const res = await findAllCategory()
            setCategory(res)
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingCategory(false)
        }
    }

    const submitHandler = async ({ title, content, publishedAt, category, sub, link }: DraftCreateDto) => {

        if (thumbnail?.length && thumbnail.length > 0) {
            try {
                const formData = new FormData()
                formData.append("title", title)
                formData.append("content", content)
                formData.append("thumbnail", thumbnail[0])
                if (category) formData.append("category", category)
                if (sub) formData.append("sub", sub)
                if (publishedAt && published) formData.append("published_at", publishedAt.toISOString())
                if (includeFile && file) {
                    for (let i = 0; i < file.length; i++) {
                        const data = file[i]
                        formData.append("file", data)
                    }
                }
                if (includeLink && link.length > 0) {
                    link.forEach((item) => {
                        formData.append("link", item.url)
                    })
                }

                await createDraftService(formData)
                toast({
                    title: "Berhasil Tambah Pengajuan",
                    variant: "default",
                })
                form.reset()
                setOpen(false)
            } catch (error) {
                toast({
                    title: "Gagal Tambah Pengajuan",
                    description: "",
                    variant: "destructive",
                })
            }
        } else {
            setMessage("File is required")
        }

    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <Button asChild>
                <DialogTrigger>
                    Tambah Data
                </DialogTrigger>
            </Button>
            <DialogContent className=" max-w-screen overflow-hidden">
                <ScrollArea className=" max-h-screen py-3">
                    <DialogHeader>
                        <DialogTitle>Tambah Pengajuan Konten</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-3">
                            <FormField control={form.control} name="title" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Judul</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Masukan Judul" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="content" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Konten</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Masukan Konten" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name={`category`} render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Kategori</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value ?? ""} onOpenChange={() => category.length <= 0 && findOptions()} >
                                        <FormControl className="w-full">
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Pilih Kategori" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {
                                                loadingCategory ? (
                                                    <div className="w-full flex justify-center place-items-center">
                                                        <Loader2Icon className=" animate-spin" />
                                                    </div>
                                                ) : category.map((item => <SelectItem value={item.id}>{item.name}</SelectItem>))
                                            }
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            {
                                form.getValues("category") != null && <FormField control={form.control} name={`sub`} render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Sub Kategori</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value ?? ""} >
                                            <FormControl className="w-full">
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Pilih Sub Kategori" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    category.map((item => {
                                                        if (item.id === form.getValues("category")) {
                                                            return item.subs.map(sub => <SelectItem value={sub.id}>{sub.name}</SelectItem>)
                                                        }
                                                    }))
                                                }
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            }
                            <FormItem>
                                <FormLabel>Foto Sampul</FormLabel>
                                <Input placeholder="Foto Sampul" type={"file"} onChange={(e => { setThumbnail(e.target.files), setMessage("") })} />
                                {message != null && <span className="text-base text-destructive">{message}</span>}
                            </FormItem>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" checked={published} onCheckedChange={() => { setPublished(!published), console.log("test") }} />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Atur Jadwal Terbit
                                </label>
                            </div>
                            <FormField control={form.control} name="publishedAt" render={({ field }) => (
                                <FormItem className={cn({ "hidden": !published })}>
                                    <FormLabel>Tanggal Terbit</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pilih Tanggal Terbit</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value ?? undefined}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date < new Date()
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>

                                </FormItem>
                            )} />
                            <div className="flex items-center space-x-2">
                                <Checkbox id="dokumen" checked={includeFile} onCheckedChange={() => setIncludeFile(!includeFile)} />
                                <label
                                    htmlFor="dokumen"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Tambahkan Dokumen
                                </label>
                            </div>
                            {includeFile && (
                                <FormItem>
                                    <FormLabel>Dokumen</FormLabel>
                                    <Input placeholder="Pilih Dokumen" type={"file"} multiple onChange={(e => setFile(e.target.files))} />
                                </FormItem>
                            )}

                            <div className="flex items-center space-x-2">
                                <Checkbox id="sumber" checked={includeLink} onCheckedChange={() => setIncludeLink(!includeLink)} />
                                <label
                                    htmlFor="sumber"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Tambahkan Sumber
                                </label>
                            </div>

                            {includeLink && fields.map((item, i) => (
                                <FormField control={form.control} name={`link.${i}.url`} key={item.id} render={({ field }) => (
                                    <div className="flex gap-3 w-full">
                                        <FormItem className="flex-1">
                                            <FormControl>
                                                <Input placeholder="Masukan Sumber" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        <Button type="button" onClick={() => remove(fields.length - 1)} size={'icon'} variant={'destructive'}><Trash2Icon /></Button>
                                    </div>
                                )} />
                            ))}
                            {includeLink && (
                                <div className="flex w-full gap-3 place-items-center">
                                    <div className=" h-10 w-full bg-muted rounded"></div>
                                    <Button type="button" onClick={() => append({ url: "" })} size={'icon'} variant={'outline'}><PlusIcon /></Button>
                                </div>
                            )}
                            <Button className={cn("w-full", { "bg-muted-foreground": form.formState.isSubmitting })}>{form.formState.isSubmitting ? "Mengunggah..." : "TAMBAH"}</Button>
                        </form>
                    </Form>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}
