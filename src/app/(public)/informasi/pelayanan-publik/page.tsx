"use client"


import { FooterFE } from '@/components/features/footer-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { AppContainer } from '@/components/ui/container';
import { HeaderSection } from '@/components/ui/typography';
import { DownloadCloudIcon, FileIcon } from 'lucide-react';
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
                        <h1 className=' text-3xl font-bold absolute text-slate-100'>Informasi Pelayanan Publik</h1>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <AppContainer className=' space-y-8'>
                    <HeaderSection>STANDAR PELAYANAN PUBLIK</HeaderSection>
                    <div>
                        <h4 className='font-bold text-lg'>Standar Pelayanan dimaksudkan untuk :</h4>
                        <ul className=' list-decimal pl-5'>
                            <li>Meningkatkan kualitas pelayanan publik</li>
                            <li>Menjamin penyediaan pelayanan publik</li>
                            <li>Menilai kinerja untuk mendukung kepastian hukum dalam Perlindungan Saksi dan Korban menilai kinerja untuk mendukung kepastian hukum dalam Perlindungan Saksi dan Korban</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold text-lg'>Jenis-Jenis Pelayanan Publik di LPSK</h4>
                        <ul className=' list-decimal pl-5'>
                            <li>Standar Pelayanan Penerimaan Permohonan</li>
                            <li>Standar Pelayanan Tindakan Proaktif</li>
                            <li>Standar Pemberian Perlindungan Darurat</li>
                            <li>Standar Pelayanan Pemberian Perlindungan</li>
                            <li>Standar Pelayanan Informasi Publik</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold text-lg'>Maklumat Pelayanan Publik</h4>
                        <p>“Dengan ini, kami menyatakan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan dan apabila tidak menepati janji kami siap menerima sanksi sesuai dengan peraturan perundang-undangan yang berlaku”</p>
                    </div>
                    <HeaderSection>Frequently Asked Questions (FAQ)</HeaderSection>
                    <div>
                        <h4 className='font-bold text-lg'>1. Apakah yang dimaksud dengan perlindungan?</h4>
                        <p>Perlindungan adalah segala upaya pemenuhan hak dan pemberian bantuan untuk memberikan rasa aman kepada saksi dan/atau korban yang wajib dilaksanakan oleh LPSK atau lembaga lainnya sesuai dengan peraturan perundang-undangan.</p>
                    </div>
                    <div>
                        <h4 className='font-bold text-lg'>2. Apa saja jenis pelayanan yang diberikan dalam pemenuhan hak saksi dan korban?</h4>
                        <div className='pl-5'>
                            <h4 className='font-bold text-lg'>a. pemenuhan hak, yang meliputi:</h4>
                            <ul className='list-decimal pl-5'>
                                <li>Program perlindungan fisik</li>
                                <li>Program perlindungan pemberian hak prosedural</li>
                                <li>Program perlindungan pemberian hak atas penggantian pembiayaan</li>
                                <li>Program perlindungan pemberian hak atas informasi</li>
                                <li>Program perlindungan pemberian perlindungan hukum</li>
                                <li>Program perlindungan pemberian fasilitasi hak saksi pelaku</li>
                                <li>Program perlindungan pemberian fasilitasi restitusi dan/atau kompensasi; dan/atau</li>
                                <li>Program perlindungan pemberian hak lainnya sesuai dengan peraturan perundang-undangan; dan/atau</li>
                            </ul>
                        </div>
                        <div className='pl-5'>
                            <h4 className='font-bold text-lg'>b. pemberian bantuan, yang meliputi:</h4>
                            <ul className='list-decimal pl-5'>
                                <li>Program perlindungan pemberian bantuan medis</li>
                                <li>Program perlindungan pemberian bantuan rehabilitasi psikososial; dan/atau</li>
                                <li>Program perlindungan pemberian bantuan rehabilitasi psikologis</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-bold text-lg'>3. Apa yang dimaksud dengan Perlindungan Darurat?</h4>
                        <p>Perlindungan Darurat adalah perlindungan yang diberikan sesaat setelah permohonan diajukan yang ditetapkan dengan keputusan LPSK atau perlindungan kepada korban tindak pidana terorisme sesaat setelah peristiwa.</p>
                    </div>
                    <div>
                        <h4 className='font-bold text-lg'>4. Apakah yang dimaksud dengan Tindakan Proaktif? </h4>
                        <p>Dalam hal tertentu, LPSK dapat memfasilitasi pengajuan permohonan Perlindungan kepada Saksi dan/atau Korban melalui tindakan proaktif yang dilakukan dengan cara investigasi langsung setelah mendapat persetujuan Pimpinan LPSK yang membidangi urusan penelaahan permohonan.</p>
                    </div>
                    <div>
                        <h4 className='font-bold text-lg'>5. Apakah pelayanan publik di LPSK dikenakan biaya?</h4>
                        <p>Tidak, pembiayaan untuk pelaksanaan perlindungan dan pemenuhan hak saksi dan korban adalah GRATIS, murni menggunakan dan dibiayai dengan APBN.</p>
                    </div>
                    <div>
                        <h4 className='font-bold text-lg'>6. Bagaimana cara mengajukan permohonan perlindungan kepada LPSK?</h4>
                        <ul className=' list-disc pl-5'>
                            <li>Permohonan disampaikan dengan datang langsung ke kantor LPSK; atau</li>
                            <li>Permohonan disampaikan secara tidak langsung, melalui jasa pengiriman,  faksimili, surat elektronik, laman resmi LPSK atau aplikasi telepon selular.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold text-lg'>7. Siapa saja yang dapat mengajukan perlindungan kepada LPSK?</h4>
                        <p>Saksi, korban, pelapor, saksi pelaku, ahli, keluarga, pendamping dan/atau kuasa hukum, aparat penegak hukum, pejabat atau instansi terkait yang berwenang atau pengampu jika permohonan perlindungan diajukan untuk anak.</p>
                    </div>
                    <div>
                        <h4 className='font-bold text-lg'>8. Siapakah yang dimaksud dengan Saksi, Korban dan Saksi Pelaku?</h4>
                        <ul className=' list-disc pl-5'>
                            <li>Saksi adalah orang yang dapat memberikan keterangan guna kepentingan penyelidikan, penyidikan, penuntutan, dan pemeriksaan di sidang pengadilan tentang suatu tindak pidana yang ia dengar sendiri, ia lihat sendiri, dan/atau ia alami sendiri.</li>
                            <li>Korban adalah orang yang mengalami penderitaan fisik, mental, dan/atau kerugian ekonomi yang diakibatkan oleh suatu tindak pidana.</li>
                            <li>Saksi pelaku adalah tersangka, terdakwa, atau terpidana yang bekerja sama dengan penegak hukum untuk mengungkap suatu tindak pidana dalam kasus yang sama.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold text-lg'>9. Tindak pidana apa yang menjadi prioritas perlindungan LPSK?</h4>
                        <ul className=' list-disc pl-5'>
                            <li>Pelanggaran HAM berat</li>
                            <li>Korupsi</li>
                            <li>Pencucian uang</li>
                            <li>Terorisme</li>
                            <li>Perdagangan orang</li>
                            <li>Narkotika</li>
                            <li>Psikotropika</li>
                            <li>Penyiksaan</li>
                            <li>Kekerasan seksual</li>
                            <li>Penganiayaan berat</li>
                            <li>Seksual terhadap anak; dan</li>
                            <li>Tindak pidana lain yang mengakibatkan posisi saksi dan/atau korban dihadapkan pada situasi yang sangat membahayakan jiwanya.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold text-lg'>10. Apa saja syarat formil yang harus dipenuhi saat mengajukan permohonan kepada LPSK?</h4>
                        <ul className=' list-disc pl-5'>
                            <li>Surat permohonan tertulis</li>
                            <li>Fotokopi identitas atau kartu Keluarga</li>
                            <li>Asli surat kuasa, jika permohonan diajukan melalui kuasa hukum atau pendamping</li>
                            <li>Surat izin dari orang tua atau wali, jika permohonan terkait Perlindungan untuk anak dan permohonan tidak diajukan oleh orang tua atau wali</li>
                            <li>Surat keterangan atau dokumen dari instansi terkait yang berwenang sesuai ketentuan peraturan perundang-undangan, yang menerangkan status Saksi, Korban, pelapor, Saksi pelaku, atau ahli dalam kasus tindak pidana</li>
                            <li>Surat resmi dari pejabat yang berwenang jika permohonan diajukan oleh aparat penegak hukum dan/atau instansi yang berwenang; da</li>
                            <li>Kronologi uraian peristiwa tindak pidana</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold text-lg'>11. Apa saja syarat materiel yang harus dipenuhi saat mengajukan permohonan kepada LPSK?</h4>
                        <div className='pl-5'>
                            <h4 className='font-bold text-lg'>a. Dokumen atau informasi Pemohon sebagai Saksi dan/atau Korban yang menunjukan:</h4>
                            <ul className='list-decimal pl-5'>
                                <li>Sifat pentingnya keterangan Pemohon</li>
                                <li>Tingkat ancaman yang membahayakan Pemohon</li>
                                <li>Hasil analisis tim medis atau psikolog terhadap Pemohon; dan</li>
                                <li>Rekam jejak tindak pidana yang pernah dilakukan oleh Pemohon.</li>
                            </ul>
                        </div>
                        <div className='pl-5'>
                            <h4 className='font-bold text-lg'>b. Dokumen atau informasi Pemohon sebagai Saksi pelaku yang menunjukan:</h4>
                            <ul className='list-decimal pl-5'>
                                <li>Tindak pidana yang diungkap merupakan tindak pidana dalam kasus tertentu sesuai dengan Keputusan LPSK</li>
                                <li>Sifat pentingnya keterangan Pemohon</li>
                                <li>Pemohon bukan pelaku utama dalam tindak pidana yang diungkapkannya</li>
                                <li>Kesediaan mengembalikan aset yang diperoleh dari tindak pidana yang dilakukan dan dinyatakan dalam pernyataan tertulis; dan</li>
                                <li>Adanya ancaman yang nyata atau kekhawatiran akan terjadinya ancaman, tekanan secara fisik atau psikis terhadap Saksi pelaku atau Keluarganya jika tindak pidana tersebut diungkap.</li>
                            </ul>
                        </div>
                        <div className='pl-5'>
                            <h4 className='font-bold text-lg'>c. Dokumen atau informasi Pemohon sebagai pelapor dan ahli yang menunjukan:</h4>
                            <ul className='list-decimal pl-5'>
                                <li>Sifat pentingnya keterangan Pemohon; dan/atau</li>
                                <li>Tingkat ancaman yang membahayakan Pemohon</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-bold text-lg'>12. Bagaimana cara untuk menyampaikan pengaduan pelayanan publik?</h4>
                        <ul className=' list-disc pl-5'>
                            <li>Website LPSK pada menu “Pelayanan Publik: Pengaduan Layanan Publik</li>
                            <li>Hotline LPSK 148; atau</li>
                            <li>Melalui surat elektronik maupun non elektronik.</li>
                        </ul>
                    </div>
                </AppContainer>
            </div>

            <FooterFE />
        </div>
    )
}
