"use client"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import Image from "next/image";
import Link from "next/link";

const Background = ({ token }: { token: RequestCookie | undefined }) => {
    return (
        <div className='h-full w-full relative bg-slate-800'>
            <motion.img
                src='/images/background.webp'
                className="w-full h-full object-cover blur-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
            />
            <div className=' absolute left-0 top-0 right-0 bottom-0 '>
                <motion.div
                    className='flex flex-col gap-5 justify-center place-items-center h-full'
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                >

                    <div className='h-[200px] w-[200px] relative'>
                        <Image src={"/images/lpsk-lg.png"} alt='' fill></Image>
                    </div>
                    <h1 className='text-4xl font-bold text-slate-100 text-center'>Admin Lembaga Perlindungan Saksi dan Korban</h1>
                    <Button variant={'default'} asChild className='text-slate-100 dark:text-slate-800'>
                        <Link href={token == undefined ? "/backoffice/signin" : "/backoffice/dashboard"}>
                            MASUK
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}

export default Background