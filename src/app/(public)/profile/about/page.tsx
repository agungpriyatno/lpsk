"use client"


import { FooterFE } from '@/components/features/footer-section';
import { GallerySection } from '@/components/features/gallery-section';
import { TextToSpeech } from '@/components/features/text-to-speech';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
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
                        <h1 className=' text-3xl font-bold absolute text-slate-100'>Sekilas LPSK</h1>
                    </div>
                </div>
            </div>
            <div className='w-full relative md:h-[450px] bg-background'>
                <AppContainer>
                    <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
                        <div className=" col-span-6 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection>VISI</HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base font-bold'>”Terwujudnya perlindungan saksi dan korban dalam sistem peradilan pidana”</p>
                                </TextToSpeech>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Visi ini mengandung maksud bahwa LPSK yang diberikan mandat oleh undang-undang selaku focal point dalam pemberian perlindungan saksi dan korban harus mampu mewujudkan suatu kondisi dimana saksi dan korban benar-benar merasa terlindungi dan dapat mengungkap kasus dalam peradilan pidana.
                                    </p>
                                </TextToSpeech>
                            </div>
                        </div>
                        <div className=" col-span-6 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/banner/lpsk-1.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                    </div>
                </AppContainer>
            </div>
            <div className='w-full relative md:h-[450px] bg-background'>
                <AppContainer>
                    <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
                        <div className=" col-span-6 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/banner/lpsk-2.jpeg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection>MISI</HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>Dalam rangka mewujudkan visi di atas, Lembaga Saksi dan Korban memiliki misi sebagai berikut :</p>
                                </TextToSpeech>
                                <ul className='list-disc pl-5'>
                                    <li>Mewujudkan perlindungan dan pemenuhan hak-hak bagi saksi dan korban dalam peradilan pidana.</li>
                                    <li>Mewujudkan kelembagaan yang profesional dalam memberikan perlindungan dan pemenuhan hak-hak bagi saksi dan korban.</li>
                                    <li>Memperkuat landasan hukum dan kemampuan dalam pemenuhan hak-hak saksi dan korban.</li>
                                    <li>Mewujudkan dan mengembangkan jejaring dengan para pemangku kepentingan dalam rangka pemenuhan hak saksi dan korban.</li>
                                    <li>Mewujudkan kondisi yang kondusif serta partisipasi masyarakat dalam perlindungan saksi dan korban.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </AppContainer>
            </div>
            <section className='w-full'>
                <AppContainer className='space-y-5'>
                    <HeaderSection className='text-center'>WEWENANG</HeaderSection>
                    <div className=' grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3'>
                        <Card>
                            <CardHeader></CardHeader>
                            <CardContent className='text-center'>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Meminta keterangan secara lisan dan / atau tertulis dari pemohon dan pihak lain yang terkait dengan permohonan
                                    </p>
                                </TextToSpeech>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader></CardHeader>
                            <CardContent className='text-center'>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Menelaah keterangan, surat, dan/atau dokumen yang terkait untuk mendapatkan kebenaran atas permohonan
                                    </p>
                                </TextToSpeech>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader></CardHeader>
                            <CardContent className='text-center'>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Meminta salinan atau fotokopi surat dan/atau dokumen terkait yang diperlukan dari instansi manapun untuk memeriksa laporan pemohon sesuai dengan ketentuan peraturan perundang-undangan
                                    </p>
                                </TextToSpeech>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader></CardHeader>
                            <CardContent className='text-center'>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Meminta informasi perkembangan kasus dari penegak hukum
                                    </p>
                                </TextToSpeech>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader></CardHeader>
                            <CardContent className='text-center'>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Mengubah identitas terlindung sesuai dengan ketentuan peraturan perundang-undangan
                                    </p>
                                </TextToSpeech>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader></CardHeader>
                            <CardContent className='text-center'>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Mengelola rumah aman
                                    </p>
                                </TextToSpeech>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader></CardHeader>
                            <CardContent className='text-center'>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Memindahkan atau merelokasi terlindung ke tempat yang lebih aman
                                    </p>
                                </TextToSpeech>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader></CardHeader>
                            <CardContent className='text-center'>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Melakukan pengamanan dan pengawalan
                                    </p>
                                </TextToSpeech>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader></CardHeader>
                            <CardContent className='text-center'>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Melakukan pendampingan Saksi dan/atau Korban dalam proses peradilan
                                    </p>
                                </TextToSpeech>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader></CardHeader>
                            <CardContent className='text-center'>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Melakukan penilaian ganti rugi dalam pemberian Restitusi dan Kompensasi
                                    </p>
                                </TextToSpeech>
                            </CardContent>
                        </Card>
                    </div>
                </AppContainer>
            </section>
            <GallerySection />
            <FooterFE />
        </div>
    )
}
