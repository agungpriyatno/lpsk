"use client"

import { Button } from '@/components/ui/button';
import { Settings2Icon, SettingsIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFound() {

  const router = useRouter()
  return (
    <div className='h-screen w-full'>
      <div className='h-full w-full relative '>
        {/* <Image src={'/images/lpsk-carousel.png'} alt='' fill sizes='100vh' className=' object-cover opacity-50' /> */}
        <div className=' absolute left-0 top-0 right-0 bottom-0 flex flex-col gap-5 justify-center place-items-center'>
          <SettingsIcon size={50} className=' animate-spin' />
          <h1 className='text-xl font-bold'>Sedang Dalan Tahap Pengembangan</h1>
          <Button onClick={() => router.back()}>Kembali</Button>
        </div>
      </div>
    </div>
  )
}
