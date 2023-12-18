"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { SignInDto, SignUpDto, signUpDto } from "@/lib/validators/auth"
import { signInService, signUpService } from "@/services/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

const SignUpPage = () => {
    const [obsecure, setObsecure] = useState(true)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const form = useForm<SignUpDto>({
        resolver: zodResolver(signUpDto),
    })
    const { toast } = useToast()

    const submitHandler = async (data: SignUpDto) => {
        try {
            setLoading(true)
            await signUpService(data)
            toast({
                title: "Berhasil Daftar",
                variant: "default",
            })
            router.push("/admin/signin")
        } catch (error) {
            console.log(error);

            toast({
                title: "Gagal Daftar",
                description: "Email anda sudah digunakan!",
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
                    DAFTAR
                </CardTitle>
                <CardDescription>
                    Silahkan masukan Nama, Email dan Password anda untuk melanjutkan.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-3">
                        <FormField name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nama</FormLabel>
                                <FormControl>
                                    <Input placeholder="Masukan Nama" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
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
                        <div className="w-full flex justify-end">
                            <Button type="button" className="w-fit" asChild variant={'link'} size={'sm'}>
                                <Link href={'/admin/forgot'}>Lupa Password ?</Link>
                            </Button>
                        </div>
                        <Button className={cn("w-full", { "bg-muted-foreground": loading })}>{loading ? "Mengunggah..." : "DAFTAR"}</Button>
                        <Button type="button" className="w-full" asChild variant={'outline'}>
                            <Link href={'/admin/signin'}>MASUK</Link>
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default SignUpPage