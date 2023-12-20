"use client"


import { AplicationExternalSection, AplicationSection } from '@/components/features/application-section';
import { CarouselSection } from '@/components/features/carousel-section';
import { ChartSection } from '@/components/features/chart-section';
import { FooterFE } from '@/components/features/footer-section';
import { GallerySection } from '@/components/features/gallery-section';
import { AppHeader } from '@/components/features/header';
import { AppRunningText } from '@/components/features/running-text';
import { Button } from '@/components/ui/button';
import { AppContainer } from '@/components/ui/container';
import { ContentCardA } from '@/components/ui/content-card';
import { LinkCard } from '@/components/ui/link-card';
import { HeaderSection } from '@/components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-screen w-full'>
      <div className='h-full w-full relative bg-slate-800'>
        <Image src={'/images/lpsk-carousel.png'} alt='' fill sizes='100vh' className=' object-cover opacity-50' />
        <div className=' absolute left-0 top-0 right-0 bottom-0 flex flex-col gap-5 justify-center place-items-center'>
          <h1 className='text-4xl font-bold'>Selamat datang di Website LPSK</h1>
          <Button variant={'default'} asChild>
            <Link href={'/home'}>
              MASUK
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
