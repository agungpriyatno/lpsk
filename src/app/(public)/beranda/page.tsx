import { AplicationExternalSection, AplicationSection } from '@/components/features/application-section';
import { CardSection } from '@/components/features/card-section';
import { CarouselSection } from '@/components/features/carousel-section';
import { ChartSection } from '@/components/features/chart-section';
import { GallerySection } from '@/components/features/gallery-section';
import IDMap from '@/components/features/map';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import { AppContainer } from '@/components/ui/container';
import { ContentCardA } from '@/components/ui/content-card';
import { LinkCard } from '@/components/ui/link-card';
import { HeaderSection } from '@/components/ui/typography';
import db from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';
import { SorotModal } from './modal';
import { ChartPidana } from '@/components/features/chart-pidana';

export interface Artwork {
  artist: string
  art: string
}

export default async function Home() {
  const list = await db.publication.findMany({
    take: 20,
    orderBy: { selected: { createdAt: "desc" } },
    include: { selected: { include: { media: true, author: true, category: true, subCategory: true } } },
    where: { AND: [{ selected: { category: { code: "LPSK-BERITA" } } }, { status: "PUBLISH" }] }
  })
  const carousel = await db.highlight.findUnique({
    where: { code: "LPSK-CAROUSEL" },
    include: { publications: { orderBy: { publication: { selected: { createdAt: "desc" } } }, include: { publication: { include: { selected: true } } } } },
  })
  const modal = await db.highlight.findUnique({
    where: { code: "LPSK-MODAL" },
    include: { publications: { orderBy: { publication: { selected: { createdAt: "desc" } } }, include: { publication: { include: { selected: true } } } } }
  })

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
            <LinkCard href='/beranda/cara-mengajukan' title='CARA MENGAJUKAN PERMOHONAN' description='Tuntunan Cara Pengajuan Permohonan Perlindungan' image='/images/melakukan-permohonan.png' />
          </div>
        </AppContainer>
      </div>
      <ContentCardA
        title='TENTANG LPSK'
        description='Lembaga Perlindungan Saksi dan Korban adalah lembaga nonstruktural yang didirikan dan bertanggung jawab untuk menangani pemberian perlindungan dan bantuan pada saksi dan korban. LPSK dibentuk berdasarkan UU No 13 Tahun 2006 tentang Perlindungan Saksi dan Korban.'
        image='/images/lpsk-carousel.png'
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
                      src={process.env.BUCKET_URL_ACCESS + "/publikasi/" + (item.selected?.thumbnail ?? "default_zz.jpg")}
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

      {/* <CardSection /> */}
      <GallerySection />
    </div>
  )
}
