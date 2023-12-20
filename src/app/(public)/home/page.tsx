"use client"


import { AplicationExternalSection, AplicationSection } from '@/components/features/application-section';
import { CarouselSection } from '@/components/features/carousel-section';
import { ChartSection } from '@/components/features/chart-section';
import { FooterFE } from '@/components/features/footer-section';
import { GallerySection } from '@/components/features/gallery-section';
import { AppHeader } from '@/components/features/header';
import { AppRunningText } from '@/components/features/running-text';
import { AppContainer } from '@/components/ui/container';
import { ContentCardA } from '@/components/ui/content-card';
import { LinkCard } from '@/components/ui/link-card';
import { HeaderSection } from '@/components/ui/typography';

export default function Home() {
  return (
    <div className='flex flex-col gap-10'>
      <CarouselSection />
      <div className='w-full'>
        <AppContainer className=' space-y-5'>
          <HeaderSection>INFORMASI LPSK</HeaderSection>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-5'>
            <LinkCard href='/' title='SUBJEK PERLINDUNGAN' description='Saksi, Korban, Saksi Pelaku, Pelapor, Ahli' image='/images/subjek-perlindungan.png' />
            <LinkCard href='/' title='KASUS PRIORITAS' description='Terorisme, Pelanggaran HAM yang Berat, Korupsi,Pencucian Uang, Tindak pidana lain' image='/images/kasus-prioritas.png' />
            <LinkCard href='/' title='PROGRAM PERLINDUNGAN' description='Perlindungan Fisik, Perlindungan Prosedural, Perlindungan Hukum, dan lainnya' image='/images/program-perlindungan.png' />
            <LinkCard href='/' title='CARA MENGAJUKAN PERMOHONAN' description='Tuntunan Cara Pengajuan Permohonan Perlindungan' image='/images/melakukan-permohonan.png' />
          </div>
        </AppContainer>
      </div>
      <ContentCardA
        title='TENTANG LPSK'
        description='Lembaga Perlindungan Saksi dan Korban adalah lembaga nonstruktural yang didirikan dan bertanggung jawab untuk menangani pemberian perlindungan dan bantuan pada saksi dan korban. LPSK dibentuk berdasarkan UU No 13 Tahun 2006 tentang Perlindungan Saksi dan Korban.'
        image='/images/lpsk-carousel.png'
      />
      <AplicationSection />
      <AplicationExternalSection />
      <ChartSection />
      <GallerySection />
      <FooterFE />
      <AppRunningText />
    </div>
  )
}
