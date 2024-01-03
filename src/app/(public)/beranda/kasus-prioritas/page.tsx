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
                        <h1 className=' text-3xl font-bold absolute text-slate-100'>Kasus Prioritas</h1>
                    </div>
                </div>
            </div>
            <div className='w-full relative md:h-[450px] bg-background'>
                <AppContainer>
                    <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
                        <div className=" col-span-6 md:col-span-4 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/kasus-prioritas/teroris.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 md:col-span-8 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection className='flex gap-2'>
                                    TERORISME
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Perbuatan yang menggunakan kekerasan atau ancaman kekerasan yang menimbulkan suasana teror atau rasa takut secara meluas, yang dapat menimbulkan korban yang bersifat massal, dan/atau menimbulkan kerusakan atau kehancuran terhadap objek vital yang strategis, lingkungan hidup, fasilitas publik, atau fasilitas internasional dengan  motif ideologi, politik, atau gangguan keamanan.
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
                                    PELANGGARAN HAM BERAT
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Pelanggaran hak asasi manusia yang berat meliputi kejahatan genosida dan kejahatan terhadap kemanusiaan. Kejahatan genosida adalah setiap perbuatan yang dilakukan dengan maksud untuk menghancurkan atau memusnahkan seluruh atau sebagian kelompok bangsa, ras, kelompok etnis, kelompok agama. Sedangkan kejahatan terhadap kemanusiaan adalah salah satu perbuatan yang dilakukan sebagai bagian dari serangan yang meluas atau sistematik yang diketahuinya bahwa serangan tersebut ditujukan secara langsung terhadap penduduk sipil.
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
                                <Image src={"/images/kasus-prioritas/ham.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
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
                                <Image src={"/images/kasus-prioritas/korupsi.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 md:col-span-8 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection className='flex gap-2'>
                                    KORUPSI
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Setiap orang yang secara melawan hukum melakukan perbuatan memperkaya diri sendiri atau orang lain atau suatu korporasi yang dapat merugikan keuangan negara atau perekonomian negara.
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
                                    PENCUCIAN UANG
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Menempatkan, mentransfer, mengalihkan, membelanjakan, membayarkan, menghibahkan, menitipkan, membawa ke luar negeri, mengubah bentuk, menukarkan dengan mata uang atau surat berharga atau perbuatan lain atas Harta Kekayaan yang diketahuinya atau patut diduganya merupakan hasil tindak pidana.
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
                                <Image src={"/images/kasus-prioritas/pencucian-uang.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
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
                                <Image src={"/images/kasus-prioritas/narkoba.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 md:col-span-8 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection className='flex gap-2'>
                                    NARKOBA
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Zat atau obat yang berasal dari tanaman atau bukan tanaman, baik sintetis maupun semisintetis, yang dapat menyebabkan penurunan atau perubahan kesadaran, hilangnya rasa, mengurangi sampai menghilangkan rasa nyeri, dan dapat menimbulkan ketergantungan, yang dibedakan ke dalam golongan-golongan sebagaimana terlampir dalam Undang-UndangNomor 35 Tahun 2009 tentang Narkotika.
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
                                    PERDAGANGAN MANUSIA
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Tindakan perekrutan, pengangkutan, penampungan, pengiriman, pemindahan, atau penerimaan seseorang dengan ancaman kekerasan, penggunaan kekerasan, penculikan, penyekapan, pemalsuan, penipuan, penyalahgunaan kekuasaan atau posisi rentan, penjeratan utang atau memberi bayaran atau manfaat, sehingga memperoleh persetujuan dari orang yang memegang kendali atas orang lain tersebut, baik yang dilakukan di dalam negara maupun antar negara, untuk tujuan eksploitasi atau mengakibatkan orang tereksploitasi.
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
                                <Image src={"/images/kasus-prioritas/perdagangan-manusia.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
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
                                <Image src={"/images/kasus-prioritas/kekerasan-seks-anak.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 md:col-span-8 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection className='flex gap-2'>
                                    KEKERASAN SEKSUAL PADA ANAK
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Kekerasan adalah setiap perbuatan terhadap Anak yang berakibat timbulnya kesengsaraan atau penderitaan secara fisik, psikis, seksual, dan/atau penelantaran, termasuk ancaman untuk melakukan perbuatan, pemaksaan, atau perampasan kemerdekaan secara melawan hukum, seperti diatur dalam Undang-Undang Republik Indonesia Nomor 35 Tahun 2014 tentang Perubahan atas Undang-Undang Nomor 32 Tahun 2020 tentang Perlindungan Anak.
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
                                    PENYIKSAAN
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Tindakan dengan sengaja dan melawan hukum menimbulkan kesakitan atau penderitaan yang berat, baik fisik maupun mental, terhadap seorang tahanan atau seseorang yang
                                        berada di bawah pengawasan, seperti diatur dalam Undang-Undang Republik Indonesia Nomor 26 Tahun 2000 tentang Pengadilan Hak Asasi Manusia.
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
                                <Image src={"/images/kasus-prioritas/penyiksaan.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
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
                                <Image src={"/images/kasus-prioritas/penganiayaan.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 md:col-span-8 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection className='flex gap-2'>
                                PENGANIAYAAN BERAT
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base'>
                                    Penganiayaan yang menyebabkan timbulnya dampak luka berat.
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
