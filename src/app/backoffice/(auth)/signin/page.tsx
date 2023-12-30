"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { SignInDto, signInDto } from "@/lib/validators/auth"
import { signInService } from "@/services/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

const SignInPage = () => {

    const [obsecure, setObsecure] = useState(true)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const form = useForm<SignInDto>({
        resolver: zodResolver(signInDto),
    })
    const { toast } = useToast()

    const submitHandler = async (data: SignInDto) => {
        try {
            setLoading(true)
            await signInService(data)
            toast({
                title: "Berhasil Masuk",
                variant: "default",
            })
            router.push("/backoffice/dashboard")
        } catch (error) {
            console.log(error);

            toast({
                title: "Gagal Masuk",
                description: "Silahkan cek kembali Email dan Kata Sandi Anda!",
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
                    MASUK
                </CardTitle>
                <CardDescription>
                    Silahkan masukan Email dan Password anda untuk melanjutkan.
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
                        <div className="w-full flex justify-between">
                            <Button type="button" className="w-fit" asChild variant={'link'} size={'sm'}>
                                <Link shallow href={'/backoffice/verification'}>Verifikasi Email</Link>
                            </Button>
                            <Button type="button" className="w-fit" asChild variant={'link'} size={'sm'}>
                                <Link shallow href={'/backoffice/forgot'}>Lupa Password ?</Link>
                            </Button>
                        </div>
                        <Button className={cn("w-full", { "bg-muted-foreground": loading })}>{loading ? "Mengunggah..." : "MASUK"}</Button>
                        <Button type="button" className="w-full" asChild variant={'outline'}>
                            <Link shallow href={'/backoffice/signup'}>DAFTAR</Link>
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default SignInPage