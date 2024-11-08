import { AplicationExternalSection, AplicationSection } from '@/components/features/application-section';
import { CarouselSection } from '@/components/features/carousel-section';
import { ChartSection } from '@/components/features/chart-section';
import IDMap from '@/components/features/map';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import { ChartPidana } from '@/components/features/chart-pidana';
import { AppContainer } from '@/components/ui/container';
import { ContentCardA } from '@/components/ui/content-card';
import { GalleryItem } from '@/components/ui/gallery';
import { LinkCard } from '@/components/ui/link-card';
import { HeaderSection } from '@/components/ui/typography';
import db from '@/lib/db';
import { fetchNews, fetchPublication } from '@/services/fetching';
import Image from 'next/image';
import Link from 'next/link';
import { SorotModal } from './modal';

export interface Artwork {
  artist: string
  art: string
}

export default async function Home() {
  const list = await fetchNews({skip: 0, take: 12});

  const carousel = await db.highlight.findUnique({
    where: { code: "LPSK-CAROUSEL" },
    include: {
      publications: {
        orderBy: { publication: { createdAt: "desc" } },
        include: { publication: { include: { selected: true } } }
      }
    },
  })

  const modal = await db.highlight.findUnique({
    where: { code: "LPSK-MODAL" },
    include: {
      publications: {
        orderBy: { publication: { createdAt: "desc"  } },
        include: { publication: { include: { selected: true } } }
      }
    }
  })

  const gallery = await fetchPublication({skip: 0, take: 12, status: "clraaing4000d65qnqdxshbh6"});


  return (
    <div className='flex flex-col gap-10'>
      <SorotModal data={modal} />
      <CarouselSection data={carousel} />
      <div className='w-full'>
        <AppContainer className=' space-y-5'>
          <HeaderSection>INFORMASI LPSK</HeaderSection>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-5'>
            <LinkCard href='/beranda/subjek-perlindungan' title='SUBJEK PERLINDUNGAN' description='Saksi, Korban, Saksi Pelaku, Pelapor, Ahli' image='/images/subjek-perlindungan.png' />
            <LinkCard href='/beranda/kasus-prioritas' title='KASUS PRIORITAS' description='Terorisme, Pelanggaran HAM yang Berat, Korupsi,Pencucian Uang, Tindak pidana lain' image='/images/kasus-prioritas.png' />
            <LinkCard href='/beranda/program-perlindungan' title='PROGRAM PERLINDUNGAN' description='Perlindungan Fisik, Perlindungan Prosedural, Perlindungan Hukum, dan lainnya' image='/images/program-perlindungan.png' />
            <LinkCard href='/beranda/cara-mengajukan' title='MEKANISME MENGAJUKAN PERMOHONAN' description='Tuntunan Cara Pengajuan Permohonan Perlindungan' image='/images/melakukan-permohonan.png' />
          </div>
        </AppContainer>
      </div>
      <ContentCardA
        title='TENTANG LPSK'
        description='Lembaga Perlindungan Saksi dan Korban adalah lembaga nonstruktural yang didirikan dan bertanggung jawab untuk menangani pemberian perlindungan dan bantuan pada saksi dan korban. LPSK dibentuk berdasarkan UU No 13 Tahun 2006 tentang Perlindungan Saksi dan Korban.'
        image='/images/about.jpg'
      />
      <AplicationSection />
      <AppContainer className=' space-y-3'>
        <HeaderSection>
          BERITA
        </HeaderSection>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {list.map((item, index) => (
              <CarouselItem key={index} className=" basis-1 md:basis-1/3 lg:basis-1/5">
                <figure key={item.id} className="shrink-0 relative group">
                  <div className="overflow-hidden rounded-md bg-slate-800">
                    <Image
                      src={process.env.BUCKET_URL_ACCESS + (item.selected?.thumbnail ?? "default_zz.jpg")}
                      alt={`Photo by ${item.selected?.author?.name}`}
                      className="aspect-[3/4] h-fit w-fit object-cover opacity-50 group-hover:scale-125 duration-300 transition-all"
                      width={300}
                      height={400}
                    />
                  </div>
                  <Link href={"/berita/" + item.id}>
                    <div className="flex flex-col max-w-full p-5 absolute left-0 top-0 w-full h-full justify-end z-10 text-slate-50">
                      <h5 className="text-base font-bold max-w-full">{item.selected?.title.slice(0, 25)}</h5>
                      <small className="text-xs">Diunggah oleh {item.selected?.author?.name ?? "admin"}</small>
                    </div>
                  </Link>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </AppContainer>
      <AplicationExternalSection />
      <AppContainer>
        <IDMap />
      </AppContainer>
      <ChartSection />
      <ChartPidana />

      <div className="w-full">
      <AppContainer className=" space-y-3">
        <HeaderSection>GALERI</HeaderSection>
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-[16px]">
          {gallery.map((item, i) => {
            if (i == 0) {
              return (
                <div className="col-span-2 row-span-2 h-full" key={item.id}>
                  <GalleryItem
                    url={
                      process.env.BUCKET_URL_ACCESS +
         
                      (item.selected?.thumbnail ?? "default_zz.jpg")
                    }
                  />
                </div>
              );
            }
            return (
              <div className="col-span-1" key={item.id}>
                <GalleryItem
                  url={
                    process.env.BUCKET_URL_ACCESS +
       
                    (item.selected?.thumbnail ?? "default_zz.jpg")
                  }
                />
              </div>
            );
          })}
        </div>
      </AppContainer>
    </div>
    </div>
  )
}
