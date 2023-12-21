"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { DraftCreateDto, draftCreateDto } from "@/lib/validators/draft"
import { createDraftService } from "@/services/draft-service"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const CreateUser = () => {

    const [file, setFile] = useState<FileList | null>(null)
    const [message, setMessage] = useState<string | null>(null)
    const [published, setPublished] = useState(false)
    const [open, setOpen] = useState(false)
    const form = useForm<DraftCreateDto>({
        resolver: zodResolver(draftCreateDto),
        defaultValues: {
            publishedAt: null
        }
    })
    const { toast } = useToast()

    const submitHandler = async ({title, content, publishedAt}: DraftCreateDto) => {
        
        if (file?.length && file.length > 0) {
            console.log({title, content, publishedAt, file: file[0]});
            try {
                const formData = new FormData()
                formData.append("title", title)
                formData.append("content", content)
                formData.append("thumbnail", file[0])
                if (publishedAt) {
                    formData.append("published_at", publishedAt.toISOString())
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
                    description: "Email anda sudah digunakan!",
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
            <DialogContent>
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
                        <FormItem>
                            <FormLabel>Thumbnail</FormLabel>
                            <Input placeholder="Foto Depan" type={"file"} onChange={(e => { setFile(e.target.files), setMessage("") })} />
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
            </DialogContent>
        </Dialog>
    )
}