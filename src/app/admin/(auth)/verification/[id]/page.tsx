"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { EmailDto, emailDto } from "@/lib/validators/auth"
import { sendVerificationService, verificationEmail } from "@/services/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle2Icon, CheckIcon, EyeIcon, EyeOffIcon, Loader2Icon, XCircleIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const SendVerification = ({ params: { id } }: { params: { id: string } }) => {
    const [obsecure, setObsecure] = useState(true)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    const { toast } = useToast()

    const verification = async () => {
        try {
            setLoading(true)
            await verificationEmail({ id })
            setObsecure(true)
            router.push("/admin/signin")
        } catch (error) {
            setObsecure(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        verification()

    }, [])

    return (
        <Card className="max-w-[380px] md:max-w-[500px] min-w-[300px]">
            <CardHeader>
                <CardTitle className="text-center">
                    Verifikasi Email
                </CardTitle>
            </CardHeader>
            <CardContent className=" space-y-5">
                {loading ? (
                    <div className="flex flex-col justify-center place-items-center">
                        <Loader2Icon size={100} className=" text-muted-foreground animate-spin" />
                        <h5 className="text-sm font-bold">Memverifikasi</h5>
                    </div>
                ) : obsecure ? (
                    <div className="flex flex-col justify-center place-items-center">
                        <CheckCircle2Icon size={100} className=" text-green-500" />
                        <h5 className="text-sm font-bold">Berhasil</h5>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center place-items-center">
                        <XCircleIcon size={100} className=" text-destructive" />
                        <h5 className="text-sm font-bold">Gagal</h5>
                    </div>
                )}
                <Button type="button" className="w-full" asChild variant={'default'}>
                    <Link href={'/admin/signin'}>KEMBALI</Link>
                </Button>
            </CardContent>
        </Card>
    )
}

export default SendVerification