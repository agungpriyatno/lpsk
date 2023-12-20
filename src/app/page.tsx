"use client"


import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-screen w-full'>
      <div className='h-full w-full relative bg-slate-800'>
        <Image src={'/images/lpsk-carousel.png'} alt='' fill sizes='100vh' className=' object-cover opacity-50' />
        <div className=' absolute left-0 top-0 right-0 bottom-0 flex flex-col gap-5 justify-center place-items-center'>
          <h1 className='text-4xl font-bold text-slate-100'>Selamat datang di Website LPSK</h1>
          <Button variant={'default'} asChild className='text-slate-100 dark:text-slate-800'>
            <Link href={'/beranda'}>
              MASUK
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
