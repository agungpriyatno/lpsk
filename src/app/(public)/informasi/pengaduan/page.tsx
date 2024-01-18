"use client"


import { FooterFE } from '@/components/features/footer-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { AppContainer } from '@/components/ui/container';
import { DownloadCloudIcon, FileIcon } from 'lucide-react';
import Image from 'next/image';
import CreateFeature from './create';

export default function Page() {
    return (
        <div className='flex flex-col gap-10'>
            <div className=' h-[400px] w-full bg-background'>
                <div className=' flex w-full h-full justify-center place-items-center relative'>
                    <div className='h-full w-full absolute bg-slate-800'>
                        <Image src={'/images/fondasi.png'} fill alt='' sizes='100vh' className=' object-cover opacity-50' />
                    </div>
                    <div className=' absolute left-0 top-0 right-0 bottom-0 flex justify-center place-items-center'>
                        <h1 className=' text-3xl font-bold absolute text-slate-100'>Pengaduan Layanan Publik</h1>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <AppContainer>
                    <div className=' bg-background p-5 rounded'>
                        <CreateFeature />
                    </div>
                </AppContainer>
            </div>


        </div>
    )
}
