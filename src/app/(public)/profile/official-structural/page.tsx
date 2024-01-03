"use client"


import { FooterFE } from '@/components/features/footer-section';
import { TextToSpeech } from '@/components/features/text-to-speech';
import { AppContainer } from '@/components/ui/container';
import { HeaderSection } from '@/components/ui/typography';
import Image from 'next/image';

export default function Page() {
    return (
        <div className='flex flex-col gap-10'>
            <div className=' h-[400px] w-full bg-background'>
                <div className=' flex w-full h-full justify-center place-items-center relative'>
                    <div className='h-full w-full absolute bg-slate-800'>
                        <Image src={'/images/fondasi.png'} fill alt='' sizes='100vh' className=' object-cover opacity-50' />
                    </div>
                    <div className=' absolute left-0 top-0 right-0 bottom-0 flex justify-center place-items-center'>
                        <h1 className=' text-3xl font-bold absolute text-slate-100'>Pejabat Struktural</h1>
                    </div>
                </div>
            </div>
            <div className='w-full relative md:h-[450px] bg-background'>
                <AppContainer>
                    <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
                        <div className=" col-span-6 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/pejabat.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection>Dr. Ir. Noor Sidharta, M.H. MBA</HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base font-bold'>(Sekretaris Jenderal LPSK RI)</p>
                                </TextToSpeech>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Lahir di Malang pada 5 September 1964. Selepas lulus dari Sekolah Menengah Atas PPSP IKIP Malang, Noor Sidharta kuliah di Fakultas Perikanan Universitas Brawijaya. Dia melanjutkan pendidikan Managemen Business Administration di New Port University, California, Amerika Serikat, dan program pascasarjana di Fakultas Hukum Universitas Padjajaran (Unpad) Bandung. Gelar doktor ilmu hukum diraih setelah…
                                    </p>
                                </TextToSpeech>
                            </div>
                        </div>

                    </div>
                </AppContainer>
            </div>
          
            <FooterFE />
        </div>
    )
}
