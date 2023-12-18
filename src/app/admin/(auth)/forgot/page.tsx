"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { EmailDto, emailDto } from "@/lib/validators/auth"
import { sendResetService } from "@/services/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"

const SendForgotPage = () => {
    const [loading, setLoading] = useState(false)
    const form = useForm<EmailDto>({
        resolver: zodResolver(emailDto),
    })
    const { toast } = useToast()

    const submitHandler = async (data: EmailDto) => {
        try {
            setLoading(true)
            await sendResetService(data)
            toast({
                title: "Berhasil Mengirimkan Email",
                description: "Silahkan cek Email anda",
                variant: "default",
            })
        } catch (error) {
            console.log(error);

            toast({
                title: "Gagal Mengirimkan Email",
                description: "Email anda tidak ditemukan",
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
                    Lupa Password
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
                            <Link href={'/admin/signin'}>KEMBALI</Link>
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default SendForgotPage