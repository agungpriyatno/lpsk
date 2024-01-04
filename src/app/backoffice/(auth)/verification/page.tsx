"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { EmailDto, emailDto } from "@/lib/validators/auth"
import { sendVerificationService } from "@/services/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"

const SendVerification = () => {
    const [obsecure, setObsecure] = useState(true)
    const [loading, setLoading] = useState(false)
    const form = useForm<EmailDto>({
        resolver: zodResolver(emailDto),
    })
    const { toast } = useToast()

    const submitHandler = async (data: EmailDto) => {
        try {
            setLoading(true)
            await sendVerificationService(data)
            toast({
                title: "Berhasil mengirim link Verifikasi",
                description: "Silahkan cek Email anda",
                variant: "default",
            })
        } catch (error) {
            toast({
                title: "Gagal Mengirim link Verifikasi",
                description: "Alamat Email tidak ditemukan",
                variant: "destructive",
            })
        } finally {
            setLoading(false)
        }
    }
    return (
        <Card className="max-w-[380px] md:max-w-[500px]">
            <CardHeader>
                <CardTitle>
                    Verifikasi Email
                </CardTitle>
                <CardDescription>
                    Silahkan masukan Email anda untuk melanjutkan.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-3">
                        <FormField name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Masukan Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <Button className={cn("w-full", { "bg-muted-foreground": loading })}>{loading ? "Mengunggah..." : "KIRIM"}</Button>
                        <Button type="button" className="w-full" asChild variant={'outline'}>
                            <Link  href={'/backoffice/signin'}>KEMBALI</Link>
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default SendVerification