"use client"


import { FooterFE } from '@/components/features/footer-section';
import { TextToSpeech } from '@/components/features/text-to-speech';
import { Button } from '@/components/ui/button';
import { AppContainer } from '@/components/ui/container';
import { HeaderSection } from '@/components/ui/typography';
import { MailIcon, PhoneIcon, PinIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <div className='flex flex-col gap-10'>
            <div className=' h-[400px] w-full bg-background'>
                <div className=' flex w-full h-full justify-center place-items-center relative'>
                    <div className='h-full w-full absolute bg-slate-800'>
                        <Image src={'/images/fondasi.png'} fill alt='' sizes='100vh' className=' object-cover opacity-50' />
                    </div>
                    <div className=' absolute left-0 top-0 right-0 bottom-0 flex justify-center place-items-center'>
                        <h1 className=' text-3xl font-bold absolute text-slate-100'>Subjek Perlindungan</h1>
                    </div>
                </div>
            </div>
            <div className='w-full relative md:h-[450px] bg-background'>
                <AppContainer>
                    <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
                        <div className=" col-span-6 md:col-span-4 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/subjek-perlindungan/saksi.png"} fill sizes="100vh" alt="" className=" object-contain group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 md:col-span-8 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection className='flex gap-2'>
                                    SAKSI
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Orang yang dapat memberikan keterangan guna kepentingan penyelidikan, penyidikan, penuntutan dan pemeriksaan di sidang pengadilan tentang suatu tindak pidana yang ia dengar sendiri, ia lihat sendiri, dan/atau ia alami sendiri termasuk pula orang yang dapat memberikan keterangan yang berhubungan dengan suatu perkara pidana meskipun tidak ia dengar sendiri, tidak ia lihat sendiri dan tidak ia alami sendiri, sepanjang keterangan orang itu berhubungan dengan tindak pidana.
                                    </p>
                                </TextToSpeech>
                                <div className=' flex gap-3'>
                                    <Button size={'sm'} asChild>
                                        <Link shallow href="https://jdih.lpsk.go.id/" target={"_blank"}>JDIH</Link>
                                    </Button>
                                    <Button size={'sm'} asChild>
                                        <Link shallow href="https://eppid.lpsk.go.id/" target={"_blank"}>EPPID</Link>
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </AppContainer>
            </div>
            <div className='w-full relative md:h-[450px] bg-background'>
                <AppContainer>
                    <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">

                        <div className=" col-span-6 md:col-span-8 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection className='flex gap-2'>
                                    KORBAN
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Orang yang mengalami penderitaan fisik, mental, dan/atau kerugian ekonomi yang diakibatkan oleh suatu tindak pidana.
                                    </p>
                                </TextToSpeech>
                                <div className=' flex gap-3'>
                                    <Button size={'sm'} asChild>
                                        <Link shallow href="https://jdih.lpsk.go.id/" target={"_blank"}>JDIH</Link>
                                    </Button>
                                    <Button size={'sm'} asChild>
                                        <Link shallow href="https://eppid.lpsk.go.id/" target={"_blank"}>EPPID</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className=" col-span-6 md:col-span-4 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/subjek-perlindungan/korban.png"} fill sizes="100vh" alt="" className=" object-contain group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                    </div>
                </AppContainer>
            </div>
            <div className='w-full relative md:h-[450px] bg-background'>
                <AppContainer>
                    <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
                        <div className=" col-span-6 md:col-span-4 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/subjek-perlindungan/saksi-pelaku.png"} fill sizes="100vh" alt="" className=" object-contain group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 md:col-span-8 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection className='flex gap-2'>
                                    SAKSI PELAKU
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Tersangka, terdakwa, atau terpidana yang bekerja sama dengan penegak hukum untuk mengungkap suatu tindak pidana dalam kasus yang sama.
                                    </p>
                                </TextToSpeech>
                                <div className=' flex gap-3'>
                                    <Button size={'sm'} asChild>
                                        <Link shallow href="https://jdih.lpsk.go.id/" target={"_blank"}>JDIH</Link>
                                    </Button>
                                    <Button size={'sm'} asChild>
                                        <Link shallow href="https://eppid.lpsk.go.id/" target={"_blank"}>EPPID</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </AppContainer>
            </div>
            <div className='w-full relative md:h-[450px] bg-background'>
                <AppContainer>
                    <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">

                        <div className=" col-span-6 md:col-span-8 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection className='flex gap-2'>
                                    PELAPOR
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Orang yang memberikan laporan, informasi, atau keterangan kepada penegak hukum mengenai tindak pidana yang akan, sedang, atau telah terjadi.
                                    </p>
                                </TextToSpeech>
                                <div className=' flex gap-3'>
                                    <Button size={'sm'} asChild>
                                        <Link shallow href="https://jdih.lpsk.go.id/" target={"_blank"}>JDIH</Link>
                                    </Button>
                                    <Button size={'sm'} asChild>
                                        <Link shallow href="https://eppid.lpsk.go.id/" target={"_blank"}>EPPID</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className=" col-span-6 md:col-span-4 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/subjek-perlindungan/pelapor.png"} fill sizes="100vh" alt="" className=" object-contain group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                    </div>
                </AppContainer>
            </div>
            <div className='w-full relative md:h-[450px] bg-background'>
                <AppContainer>
                    <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
                        <div className=" col-span-6 md:col-span-4 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/subjek-perlindungan/ahli.png"} fill sizes="100vh" alt="" className=" object-contain group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 md:col-span-8 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection className='flex gap-2'>
                                    AHLI
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Orang yang memiliki keahlian di bidang tertentu yang diperlukan untuk membuat terang suatu perkara pidana guna kepentingan penyidikan, penuntutan, dan pemeriksaan di sidang pengadilan.
                                    </p>
                                </TextToSpeech>
                                <div className=' flex gap-3'>
                                    <Button size={'sm'} asChild>
                                        <Link shallow href="https://jdih.lpsk.go.id/" target={"_blank"}>JDIH</Link>
                                    </Button>
                                    <Button size={'sm'} asChild>
                                        <Link shallow href="https://eppid.lpsk.go.id/" target={"_blank"}>EPPID</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </AppContainer>
            </div>

            <FooterFE />
        </div>
    )
}
