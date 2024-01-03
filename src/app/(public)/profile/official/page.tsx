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
                        <h1 className=' text-3xl font-bold absolute text-slate-100'>Profil Pimpinan</h1>
                    </div>
                </div>
            </div>
            <div className='w-full relative md:h-[450px] bg-background'>
                <AppContainer>
                    <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
                        <div className=" col-span-6 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/profiles/profile-1.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection>
                                    Drs. Hasto Atmojo Suroyo, M.Krim
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base font-bold'>
                                        Ketua
                                    </p>
                                </TextToSpeech>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Hasto Atmojo Suroyo terlahir dari Keluarga Perwira Angkatan Udara. Berlatar belakang pendidikan Sosiologi pada Fakultas Ilmu Sosial dan Ilmu Politik Universitas Gajah Mada, dan kemudian memperoleh gelar Magister di jurusan Kriminologi Fakultas Ilmu Sosial dan Ilmu Politik Universitas Indonesia. Sejak duduk dibangku kuliah Hasto aktif bersama rekan-rekannya mendirikan Kelompok Studi dan Bantuan Hukum…
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
                        <div className=" col-span-6 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/profiles/profile-2.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection>
                                    Brigadir Jenderal Polisi (Purn) Dr. Achmadi, S.H., M.A.P.
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base font-bold'>
                                        Wakil Ketua
                                    </p>
                                </TextToSpeech>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Achmadi adalah lulusan AKABRI Tahun 1984, Perguruan Tinggi Ilmu Kepolisian (PTIK) Angkatan 23 tahun 1988, Sekolah Staf dan Komando TNI Angkatan Udara (SESKOAU) Angkatan 35 tahun 1999, Sekolah Staf dan Pimpinan Administrasi Tingkat Tinggi Polri (SESPATI Polri) Dikreg 13 tahun 2007, Dan lulus dari Program Pendidikan Singkat Angkatan 19 LEMHANNAS RI tahun 2013. Pendidikan Umum: SD, SMP, SMA, S1 Fakultas…
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
                        <div className=" col-span-6 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/profiles/profile-3.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection>
                                    (Dr.iur.) Antonius PS Wibowo, S.H., M.H.
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base font-bold'>
                                        Wakil Ketua
                                    </p>
                                </TextToSpeech>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Antonius PS Wibowo adalah Sarjana Hukum lulusan Fakultas Hukum Universitas Gadjah Mada Yogyakarta tahun 1989. Antonius melanjutkan studi S2 pada Program Pasca Sarjana Fakultas Hukum Universitas lndonesia Jakarta (mengambil konsentrasi Hukum dan Sistem Peradilan Pidana ) dan lulus tahun 2001. Pendidikan S3 nya diselesaikan pada Fakultas Hukum Universitas Justus Liebig di Giessen, Jerman (an der Juristischen…
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
                        <div className=" col-span-6 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/profiles/profile-4.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection>
                                    Edwin Partogi, S.H.
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base font-bold'>
                                        Wakil Ketua
                                    </p>
                                </TextToSpeech>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Edwin Partogi menyelesaikan studi S1 Hukum di Universitas Indonesia (2000). Pada awal karirnya, Edwin pernah menjadi Kadiv. Investigasi, Kepala PMES, Kepala Divisi Riset, Kadiv. ADV. Pol dan HAM, dan Kepala Operasional di Komisi Untuk Orang Hilang dan Korban Tindak Kekerasan (KONTRAS) pada periode 2000-2010. Pada tahun 2002, Edwin menjadi peneliti di Tim Asistensi KPP HAM, Trisakti, Semanggi 1 dan…
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
                        <div className=" col-span-6 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/profiles/profile-5.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection>
                                    Dr. Livia Istania DF Iskandar, M.Sc., Psi.
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base font-bold'>
                                        Wakil Ketua
                                    </p>
                                </TextToSpeech>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Livia Istania DF Iskandar lulus program profesi dari Fakultas Psikologi Universitas Indonesia, kemudian menerima beasiswa Chevening dari Pemerintah Inggris untuk belajar Masters of Science dalam Psikologi Konseling di City University, London. Ia juga penerima beasiswa East West Center dari Pemerintah AS untuk mengikuti program Doktor Kesehatan Masyarakat di University of Hawaii di Manoa, Honolulu,…
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
                        <div className=" col-span-6 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/profiles/profile-6.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection>
                                    Dr. Maneger Nasution, M.H., M.A.
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base font-bold'>
                                        Wakil Ketua
                                    </p>
                                </TextToSpeech>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Nasution (begitu ia biasa dipanggil kawan aktivisnya), menyelesaikan pendidikan S-1 Ilmu Hukum Islam di Fakultas Syariah dan Hukum UIN Imam Bonjol Padang (tamat, 1993). S-2 ia selesaikan pada Islamic Studies Sekolah Pascasarjana Universitas Muhammadiyah Jakarta (tamat, 2003) dan Magister Hukum, dengan konsentrasi Hukum Tindak Pidana Korupsi (penyelesaian). Sedangkan S-3 ia pernah mondok ditiga kampus:…
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
                        <div className=" col-span-6 xl:px-5 group">
                            <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                                <Image src={"/images/profiles/profile-7.jpg"} fill sizes="100vh" alt="" className=" object-cover group-hover:scale-125 transition-all duration-300" />
                            </div>
                        </div>
                        <div className=" col-span-6 px-3  xl:px-5">
                            <div className='h-full flex flex-col justify-center space-y-2'>
                                <HeaderSection>
                                    Susilaningtias, S.H., M.H.
                                </HeaderSection>
                                <TextToSpeech>
                                    <p className='text-base font-bold'>
                                        Wakil Ketua
                                    </p>
                                </TextToSpeech>
                                <TextToSpeech>
                                    <p className='text-base'>
                                        Susilaningtias adalah lulusan Ilmu Hukum Universitas Brawijaya tahun 2000. Selepas lulus, Susilaningtias aktif di Walhi Jawa Timur pada tahun 2000-2004. Pada tahun 2004-2010, Susilaningtias berkiprah sebagai Koordinator Program Penguatan Hukum untuk Komunitas di Perkumpulan HuMa. Pada tahun 2008-2010, Susilaningtias sempat menjadi Retainer Lawyer di Greenpeace South East Asia-Indonesia. Akhirnya pada…
                                    </p>
                                </TextToSpeech>
                            </div>
                        </div>
                    </div>
                </AppContainer>
            </div>

            
        </div>
    )
}
