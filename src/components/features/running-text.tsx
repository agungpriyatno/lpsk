"use client"

import { cn } from "@/lib/utils"
import { useAppSelector } from "@/redux/store"
import { useEffect, useState } from "react"
import { AppContainer } from "../ui/container"
import { motion } from "framer-motion"
import Link from "next/link"

const marqueeVariants = {
    animate: {
        x: [0, -1035],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
            },
        },
    },
};


export const AppRunningText = () => {
    const [state, setState] = useState(false)
    const height = useAppSelector((state) => state.scrollReducer.value)
    useEffect(() => {
        setState(height > 25)
    }, [height])
    return (
        <div className={cn(
            'bg-background fixed -bottom-20 left-0 right-0 w-full transition-all duration-200 z-40',
            { 'bottom-0': state },
        )}>
            <div className=" absolute left-0 px-5 py-4 bg-secondary z-20">
                INFORMASI
            </div>
            <AppContainer>
                <div className='flex justify-between place-item-center'>
                <div className="flex-1 overflow-hidden">
                    <motion.div
                        className=" px-3 py-4 flex gap-10"
                        variants={marqueeVariants}
                        animate="animate"
                    >
                        <Link href={'/'} className=" flex-shrink-0">
                            :: Penyandang Disabilitas Wajib Punya Hak yang Sama untuk Dilindungi ::
                        </Link>
                        <Link href={'/'} className=" flex-shrink-0">
                            :: Penyandang Disabilitas Wajib Punya Hak yang Sama untuk Dilindungi ::
                        </Link>
                        
                    </motion.div>
                </div>
                </div>
            </AppContainer>
        </div>
    )
}