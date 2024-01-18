"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { ReportDto, reportDto } from "@/lib/validators/biro"
import { createReport } from "@/services/report"
import { Prettify } from "@/types/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { PublicationCategory, PublicationSubCategory } from "@prisma/client"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import TextareaAutosize from 'react-textarea-autosize'

const CreateFeature = () => {
    const { toast } = useToast()
    const router = useRouter()

    const form = useForm<ReportDto>({
        resolver: zodResolver(reportDto),
        defaultValues: {
        }
    })

    const reset = () => {
        form.reset()
        // router.back()
    }

    const submitHandler = async (val: ReportDto) => {
        try {
            await createReport(val)
            toast({
                title: "Berhasil Mengajukan Pengaduan",
                variant: "default",
            })
            reset()
        } catch (error) {
            toast({
                title: "Gagal Mengajukan Pengaduan",
                variant: "destructive",
            })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitHandler, (err) => console.log(err))} className="space-y-3">
                <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nama</FormLabel>
                        <FormControl>
                            <Input placeholder="Masukan Nama" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="identity" render={({ field }) => (
                    <FormItem>
                        <FormLabel>No Kartu Identitas</FormLabel>
                        <FormControl>
                            <Input placeholder="Masukan No Kartu Identitas" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Jenis Kelamin</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a verified email to display" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Pria">Pria</SelectItem>
                                    <SelectItem value="Wanita">Wanita</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="Masukan Email" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                        <FormLabel>No HP</FormLabel>
                        <FormControl>
                            <Input placeholder="Masukan No HP" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="fax" render={({ field }) => (
                    <FormItem>
                        <FormLabel>No Telp RUmah</FormLabel>
                        <FormControl>
                            <Input placeholder="Masukan No Telp RUmah" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="address" render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel>Alamat</FormLabel>
                        <FormControl>
                            <TextareaAutosize onChange={field.onChange} value={field.value} className="px-3 py-2 border rounded text-sm" placeholder="Masukan Alamat" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField control={form.control} name="descriptions" render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel>Pengaduan</FormLabel>
                        <FormControl>
                            <TextareaAutosize onChange={field.onChange} value={field.value} className="px-3 py-2 border rounded text-sm" placeholder="Masukan Pengaduan" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                <div className=" w-full flex justify-end gap-3">
                    <Button className={cn({ "bg-muted-foreground": form.formState.isSubmitting })}>{form.formState.isSubmitting ? "Mengunggah..." : "UNGGAH"}</Button>
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