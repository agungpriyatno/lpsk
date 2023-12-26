"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { DraftCreateDto, draftCreateDto } from "@/lib/validators/draft"
import { createUpdateDraftService } from "@/services/draft-service"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import TextareaAutosize from 'react-textarea-autosize'

export const CreateDraftFromPost = ({ id, title, content, publishedAt, category, sub }: { id: string } & DraftCreateDto) => {
    const [file, setFile] = useState<FileList | null>(null)
    const [message, setMessage] = useState<string | null>(null)
    const [published, setPublished] = useState(false)
    const [open, setOpen] = useState(false)
    const { toast } = useToast()

    const form = useForm<DraftCreateDto>({
        resolver: zodResolver(draftCreateDto),
        defaultValues: {
            publishedAt: publishedAt,
            title: title,
            content: content,
            category: category,
            sub: sub,
        }
    })

    const onEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {

        if (e.key === 'Enter' && e.shiftKey === false) {
            const current = form.getValues("content")
            form.setValue("content", current + "\n")
        }
    }

    const submitHandler = async ({ title, content, publishedAt, category, sub }: DraftCreateDto) => {
        try {
            const formData = new FormData()
            formData.append("title", title)
            formData.append("content", content)
            if (file?.length && file.length > 0) {
                formData.append("thumbnail", file[0])
            }
            if (category) formData.append("category", category)
            if (sub) formData.append("sub", sub)
            if (publishedAt) formData.append("published_at", publishedAt.toISOString())
            if (publishedAt) {
                formData.append("published_at", publishedAt.toISOString())
            }
            await createUpdateDraftService(formData, id)
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

    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <Button asChild>
                <DialogTrigger>
                    Tambah Data
                </DialogTrigger>
            </Button>
            <DialogContent className=" max-h-screen overflow-hidden">
                <ScrollArea className=" max-h-screen">
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
                                        <TextareaAutosize placeholder="Masukan konten" maxLength={255} onKeyDown={onEnter} className="p-3 w-full focus:border-none focus:outline-none mb-5 text-foreground bg-background" {...field}></TextareaAutosize>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormItem>
                                <FormLabel>Thumbnail</FormLabel>
                                <Input placeholder="Foto Depan" type={"file"} onChange={(e => { setFile(e.target.files), setMessage("") })} />
                                <span className="text-sm">Kosongkan apabila tidak mengubah gambar</span>
                                {message != null && <span className="text-base text-destructive">{message}</span>}
                            </FormItem>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" onCheckedChange={() => { setPublished(!published), console.log("test") }} />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Atur Jadwal Terbit
                                </label>
                            </div>
                            <FormField control={form.control} name="publishedAt" render={({ field }) => (
                                <FormItem className={cn({ "hidden": !published })}>
                                    <FormLabel>Konten</FormLabel>
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
                                                        <span>Pick a date</span>
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
                            <Button className={cn("w-full", { "bg-muted-foreground": form.formState.isSubmitting })}>{form.formState.isSubmitting ? "Mengunggah..." : "TAMBAH"}</Button>
                        </form>
                    </Form>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}