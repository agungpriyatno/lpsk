"use client"


import { FooterFE } from '@/components/features/footer-section';
import { TextToSpeech } from '@/components/features/text-to-speech';
import { AppContainer } from '@/components/ui/container';
import { HeaderSection } from '@/components/ui/typography';
import { MailIcon, PhoneIcon, PinIcon } from 'lucide-react';
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
                        <h1 className=' text-3xl font-bold absolute text-slate-100'>Program Perlindungan</h1>
                    </div>
                </div>
            </div>
            <div className='w-full relative md:h-[450px] bg-background'>
                <AppContainer>
                    <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
                        <div className=" col-span-6 md:col-span-4 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/program-perlindungan/perlindungan-fisik.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 md:col-span-8 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection className='flex gap-2'>
                                    PERLINDUNGAN FISIK
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Pengamanan dan pengawalan,penempatan di rumah aman, mendapat identitas baru, bantuan medis dan pemberian kesaksian tanpa hadir langsung di pengadilan, bantuan rehabilitasi psiko-sosial.
                                    </p>
                                </TextToSpeech>

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
                                    PERLINDUNGAN PROSEDURAL
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Pendampingan, mendapat penerjemah, mendapat informasi mengenai perkembangan kasus, penggantian biaya transportasi, mendapat nasihat hukum, bantuan biaya hidup sementara sampai batas waktu perlindungan dan lain sebagainya sesuai ketentuan Pasal 5 UU 13/2006
                                    </p>
                                </TextToSpeech>

                            </div>
                        </div>
                        <div className=" col-span-6 md:col-span-4 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/program-perlindungan/perlindungan-prosedural.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
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
                                <Image src={"/images/program-perlindungan/perlindungan-hukum.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 md:col-span-8 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection className='flex gap-2'>
                                    PERLINDUNGAN HUKUM
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Saksi, Korban, Saksi Pelaku, dan/atau Pelapor tidak dapat dituntut secara hukum, baik pidana maupun perdata atas kesaksian dan/atau laporan yang akan, sedang, atau telah diberikannya, kecuali kesaksian atau laporan tersebut diberikan tidak dengan iktikad baik.
                                    </p>
                                </TextToSpeech>

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
                                    BANTUAN MEDIS, PSIKOLOGIS, dan PSIKOSOSIAL
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Bantuan Medis adalah bantuan yang diberikan untuk memulihkan kesehatan fisik Korban, termasuk melakukan pengurusan dalam hal Korban meninggal dunia misalnya pengurusan jenazah hingga pemakaman.<br />
                                        Rehabilitasi Psikologis adalah bantuan yang diberikan oleh psikolog kepada Korban yang menderita trauma atau masalah kejiwaan lainnya untuk memulihkan kembali kondisi kejiwaan Korban. <br />
                                        Rehabilitasi Psikososial adalah semua bentuk pelayanan dan bantuan psikologis serta sosial yang ditujukan untuk membantu meringankan, melindungi, dan memulihkan kondisi fisik, psikologis, sosial, dan spiritual Korban sehingga mampu menjalankan fungsi sosialnya kembali secara wajar, antara lain LPSK berupaya melakukan peningkatan kualitas hidup Korban dengan melakukan kerja sama dengan instansi terkait yang berwenang berupa bantuan pemenuhan sandang, pangan, papan, bantuan memperoleh pekerjaan, atau bantuan kelangsungan pendidikan.
                                    </p>
                                </TextToSpeech>

                            </div>
                        </div>
                        <div className=" col-span-6 md:col-span-4 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/program-perlindungan/bantuan-medis.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
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
                                <Image src={"/images/program-perlindungan/fasilitas-retitusi.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 md:col-span-8 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection className='flex gap-2'>
                                FASILITASI RESTITUSI DAN KOMPENSASI
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Restitusi merupakan ganti kerugian yang diberikan kepada Korban atau Keluarganya oleh pelaku atau pihak ketiga.
                                        Kompensasi merupakan ganti kerugian yang diberikan oleh negara karena pelaku tidak mampu memberikan ganti kerugian sepenuhnya yang menjadi tanggung jawabnya kepada Korban atau Keluarganya.
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
