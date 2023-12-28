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
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { objectToFormdata } from "@/helpers/formdata"
import { cn } from "@/lib/utils"
import { DraftCreateDto, draftCreateDto } from "@/lib/validators/draft"
import { createDraftService } from "@/services/draft-service"
import { findAllCategory } from "@/services/publication-service"
import { Prettify } from "@/types/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { PublicationCategory, PublicationSubCategory } from "@prisma/client"
import { format } from "date-fns"
import { CalendarIcon, Loader2Icon, PlusIcon, Trash2Icon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import TextareaAutosize from 'react-textarea-autosize'

type CategoryType = Prettify<PublicationCategory & { subs: PublicationSubCategory[] }>

const CreateFeature = () => {
    const { toast } = useToast()
    const router = useRouter()
    const [category, setCategory] = useState<CategoryType[]>([])
    const [loadingCategory, setLoadingCategory] = useState<boolean>(false)
    const [published, setPublished] = useState(false)
    const [message, setMessage] = useState<string | null>(null)
    const [thumbnail, setThumbnail] = useState<FileList | null>(null)

    const [file, setFile] = useState<FileList | null>(null)
    const [includeFile, setIncludeFile] = useState(false)
    const [includeLink, setIncludeLink] = useState(false)
    const [includeVote, setIncludeVote] = useState(false)
    const [fileVote, setFileVote] = useState<FileList[] | null>(null)


    const form = useForm<DraftCreateDto>({
        resolver: zodResolver(draftCreateDto),
        defaultValues: {
            publishedAt: null,
            category: null,
            sub: null,
            title: undefined,
            content: undefined,
            closedAt: null,
            link: [],
            vote: [],
        }
    })

    const onEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey === false) {
            const current = form.getValues("content")
            form.setValue("content", current + "\n")
        }
    }


    const { append, fields, remove } = useFieldArray({
        name: "link",
        control: form.control
    })

    const voteList = useFieldArray({
        name: "vote",
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

    const onFileVote = (data: FileList | null, i: number) => {
        if (data) {
            if (fileVote) {
                setFileVote([...fileVote, data])
            } else {
                setFileVote([data])

            }
        }

    }

    const onRemoveVote = (i: number) => {
        voteList.remove(i)
        if (fileVote) {
            setFileVote(fileVote.filter((item, j) => i != j))
        }
    }

    const onAddVote = () => {
        voteList.append({ name: "", description: "" })
    }

    const reset = () => {
        form.reset()
        setFileVote(null)
        setFile(null)
        setThumbnail(null)
        router.back()
    }

    const submitHandler = async ({ title, content, publishedAt, category, sub, link, vote, closedAt }: DraftCreateDto) => {
        try {
            const formData = objectToFormdata({
                title,
                content,
                category,
                closed_at: closedAt?.toISOString(),
                sub_category: sub,
                link: link.map((item) => item.url),
                vote_options: vote.map((item) => item.name),
                vote_descriptions: vote.map((item) => item.description),
                thumbnail: thumbnail != null ? Array.from(thumbnail) : null,
                published_at: published ? publishedAt?.toISOString() : null,
                file: includeFile && file != null ? Array.from(file) : null,
            })

            if (includeVote && fileVote) {
                fileVote.forEach((item, i) => {
                    formData.append("vote_thumbnail", item[0])
                })
            }


            await createDraftService(formData)
            toast({
                title: "Berhasil Tambah Pengajuan",
                variant: "default",
            })
            reset()
        } catch (error) {
            toast({
                title: "Gagal Tambah Pengajuan",
                variant: "destructive",
            })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitHandler, (err) => console.log(err))} className="space-y-3">
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
                            <TextareaAutosize placeholder="Masukan konten" onKeyDown={onEnter} className="p-3 w-full  focus:outline-none mb-5 text-foreground border bg-transparent rounded" {...field}></TextareaAutosize>
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
                                    ) : category.map(((item, i) => <SelectItem key={i} value={item.id}>{item.name}</SelectItem>))
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
                                                return item.subs.map((sub, i) => <SelectItem key={i} value={sub.id}>{sub.name}</SelectItem>)
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
                <LabelCheckBox id="schedule" label="Atur Jadwal Terbit" checked={published} onCheckedChange={() => setPublished(!published)} />
                {published && (
                    <div className="space-y-3 border p-5 rounded">
                        <FormField control={form.control} name="publishedAt" render={({ field }) => (
                            <FormItem>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button variant={"outline"}
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )} >
                                                {field.value ? (format(field.value, "PPP")) : (<span>Pilih Tanggal Terbit</span>)}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value ?? undefined}
                                            onSelect={field.onChange}
                                            // disabled={(date) =>
                                            //     date < new Date()
                                            // }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>

                            </FormItem>
                        )} />
                    </div>
                )}
                <LabelCheckBox id="documents" label="Tambahkan Dokumen" checked={includeFile} onCheckedChange={() => setIncludeFile(!includeFile)} />
                {includeFile && (
                    <div className="space-y-3 border p-5 rounded">
                        <FormItem>
                            <Input placeholder="Pilih Dokumen" type={"file"} multiple onChange={(e => setFile(e.target.files))} />
                        </FormItem>
                    </div>
                )}
                <LabelCheckBox id="source" label="Tambahkan Sumber" checked={includeLink} onCheckedChange={() => setIncludeLink(!includeLink)} />
                {includeLink && (
                    <div className="space-y-3 border p-5 rounded">
                        {includeLink && fields.map((item, i) => (
                            <FormField control={form.control} name={`link.${i}.url`} key={item.id} render={({ field }) => (
                                <div className="flex gap-3 w-full">
                                    <FormItem className="flex-1">
                                        <FormControl>
                                            <Input placeholder="Masukan Sumber" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    <Button type="button" onClick={() => remove(i)} size={'icon'} variant={'destructive'}><Trash2Icon /></Button>
                                </div>
                            )} />
                        ))}
                        {includeLink && (
                            <div className="flex w-full gap-3 place-items-center">
                                <div className=" h-10 w-full bg-muted rounded"></div>
                                <Button type="button" onClick={() => append({ url: "" })} size={'icon'} variant={'outline'}><PlusIcon /></Button>
                            </div>
                        )}
                    </div>
                )}
                <LabelCheckBox id="vote" label="Tambahkan Voting" checked={includeVote} onCheckedChange={() => setIncludeVote(!includeVote)} />
                {includeVote && (
                    <div className="space-y-3 border p-5 rounded">
                        <FormField control={form.control} name={`closedAt`} render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )} >
                                                    {field.value ? (format(field.value, "PPP")) : (<span>Pilih Tanggal Terakhir Voting</span>)}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value ?? undefined}
                                                onSelect={field.onChange}
                                                // disabled={(date) =>
                                                //     date < new Date()
                                                // }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        {voteList.fields.map((item, i) => (
                            <div className="space-y-3">
                                <Separator className=" my-2" />
                                <FormField control={form.control} name={`vote.${i}.name`} key={item.id} render={({ field }) => (
                                    <div className="flex gap-3 w-full">
                                        <FormItem className="flex-1">
                                            <FormControl>
                                                <Input placeholder="Masukan Pilihan" className="" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                        <Button type="button" onClick={() => onRemoveVote(i)} size={'icon'} variant={'destructive'}><Trash2Icon /></Button>
                                    </div>
                                )} />
                                <FormField control={form.control} name={`vote.${i}.description`} key={item.id} render={({ field }) => (
                                    <FormItem className="">
                                        <FormControl>
                                            <TextareaAutosize placeholder="Deskripsi Pilihan" onKeyDown={(e) => {
                                                if (e.key === 'Enter' && e.shiftKey === false) {
                                                    const current = form.getValues(`vote.${i}.description`)
                                                    form.setValue("content", current + "\n")
                                                }
                                            }} className="p-3 w-full  focus:outline-none text-foreground border bg-transparent rounded" {...field}></TextareaAutosize>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <Input placeholder="Pilih Dokumen" type={"file"} multiple onChange={(e => onFileVote(e.target.files, i))} />
                            </div>
                        ))}
                        <div className="flex w-full gap-3 place-items-center">
                            <div className=" h-10 w-full bg-muted rounded"></div>
                            <Button type="button" onClick={onAddVote} size={'icon'} variant={'outline'}><PlusIcon /></Button>
                        </div>
                    </div>
                )}
                <div className=" w-full flex justify-end gap-3">
                    <Button type={"button"} onClick={() => router.back()} variant={'destructive'}>Kembali</Button>
                    <Button className={cn({ "bg-muted-foreground": form.formState.isSubmitting })}>{form.formState.isSubmitting ? "Mengunggah..." : "TAMBAH"}</Button>
                </div>
            </form>
        </Form>
    )
}

export const LabelCheckBox = ({ id, label, checked, onCheckedChange }: { id: string, label: string, checked: boolean, onCheckedChange: () => void }) => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
            <label htmlFor={id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {label}
            </label>
        </div>
    )
}

export default CreateFeature