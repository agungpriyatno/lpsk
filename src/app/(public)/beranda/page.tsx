import { AplicationExternalSection, AplicationSection } from '@/components/features/application-section';
import { CardSection } from '@/components/features/card-section';
import { CarouselSection } from '@/components/features/carousel-section';
import { ChartSection } from '@/components/features/chart-section';
import { FooterFE } from '@/components/features/footer-section';
import { GallerySection } from '@/components/features/gallery-section';
import IDMap from '@/components/features/map';
import { AppRunningText } from '@/components/features/running-text';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { AppContainer } from '@/components/ui/container';
import { ContentCardA } from '@/components/ui/content-card';
import { LinkCard } from '@/components/ui/link-card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { HeaderSection } from '@/components/ui/typography';
import db from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';

export interface Artwork {
  artist: string
  art: string
}

export default async function Home() {
  const list = await db.publication.findMany({
    include: { selected: { include: { media: true, author: true, category: true, subCategory: true } } },
    where: { AND: [{ selected: { category: { code: "LPSK-BERITA" } } }] }
  })
  const carousel = await db.highlight.findUnique({ where: { code: "LPSK-CAROUSEL" }, include: { publications: { include: { publication: { include: { selected: true } } } } } })
  
  return (
    <div className='flex flex-col gap-10'>
      {/* <div className='fixed h-screen w-screen left-0 top-0 bg-slate-800/50 z-50 flex justify-center place-items-center'>
        <div className=' bg-background p-5 rounded w-[350px] h-[600px] md:w-[600px] md:h-[400px] xl:w-[800px] xl:h-[600px]'></div>
      </div> */}
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
      {/* <div className='w-full bg-background py-5'>
        <AppContainer>
          <HeaderSection className='flex gap-2'>
            BERITA
          </HeaderSection>
        </AppContainer>
        <ScrollArea className="min-w-full whitespace-nowrap rounded-md">
          <div className="flex min-w-full space-x-4 py-4">
            <figure className="shrink-0 w-[12px] md:w-[28px] xl:w-[56px] 2xl:w-[156px] h-[400px]">
            </figure>
            {list.map((item) => (
              <figure key={item.id} className="shrink-0 relative group">
                <div className="overflow-hidden rounded-md bg-slate-800">
                  <Image
                    src={item.selected?.media ? process.env.BUCKET_URL_ACCESS + "/publikasi/" + item.selected.thumbnail : "/images/lpsk-lg.png"}
                    alt={`Photo by ${item.selected?.author?.name}`}
                    className="aspect-[3/4] h-fit w-fit object-cover opacity-50 group-hover:scale-125 duration-300 transition-all"
                    width={300}
                    height={400}
                  />
                </div>
                <Link href={"/berita/" + item.id}>
                  <div className="flex flex-col max-w-full p-5 absolute left-0 top-0 w-full h-full justify-end z-10 text-slate-50">
                    <h5 className="text-base font-bold max-w-full">{item.selected?.title.slice(0, 25)}</h5>
                    <p className="text-sm">{item.selected?.content?.slice(0, 40)}...</p>
                    <small className="text-xs">Diunggah oleh {item.selected?.author?.name}</small>
                  </div>
                </Link>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div> */}
      <AplicationExternalSection />
      <AppContainer>
        <IDMap />
      </AppContainer>
      <ChartSection />
      <CardSection />
      <GallerySection />
      <AppRunningText />
    </div>
  )
}
