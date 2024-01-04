"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { EmailDto, ResetDto, emailDto, resetDto } from "@/lib/validators/auth"
import { resetPasswordService, sendResetService } from "@/services/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

const ForgotPage = ({ params: { id } }: { params: { id: string } }) => {
    const [obsecure, setObsecure] = useState(true)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const form = useForm<ResetDto>({
        resolver: zodResolver(resetDto),
    })
    const { toast } = useToast()

    const submitHandler = async (data: ResetDto) => {
        try {
            setLoading(true)
            await resetPasswordService(id, data)
            toast({
                title: "Berhasil Mereset Kata Sandi",
                variant: "default",
            })
            router.push("/backoffice/signin")
        } catch (error) {
            console.log(error);

            toast({
                title: "Gagal Mereset Kata Sandi",
                description: "Kata Sandi Lama t",
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
                    Silahkan masukan Kata Sandi anda untuk melanjutkan.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-3">
                    <FormField name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <div className="flex gap-2">
                                    <FormControl className="flex-1">
                                        <Input placeholder="Masukan Kata Sandi" {...field} type={obsecure ? "password" : "text"} />
                                    </FormControl>
                                    <Button type="button" size={'icon'} variant={'outline'} onClick={() => setObsecure(!obsecure)}>
                                        {obsecure ? <EyeIcon /> : <EyeOffIcon />}
                                    </Button>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <Button className={cn("w-full", { "bg-muted-foreground": loading })}>{loading ? "Mengunggah..." : "RESET"}</Button>
                        <Button type="button" className="w-full" asChild variant={'outline'}>
                            <Link  href={'/backoffice/signin'}>KEMBALI</Link>
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default ForgotPage