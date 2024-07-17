"use client";

import { AppContainer } from "@/components/ui/container";
import { HeaderSection } from "@/components/ui/typography";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <div className=" h-[400px] w-full bg-background">
        <div className=" flex w-full h-full justify-center place-items-center relative">
          <div className="h-full w-full absolute bg-slate-800">
            <Image
              src={"/images/fondasi.png"}
              fill
              alt=""
              sizes="100vh"
              className=" object-cover opacity-50"
            />
          </div>
          <div className=" absolute left-0 top-0 right-0 bottom-0 flex justify-center place-items-center">
            <h1 className=" text-3xl font-bold absolute text-slate-100">
              Profil Pimpinan
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full relative  bg-background">
        <AppContainer>
          <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
            <div className=" col-span-3 xl:px-5 group">
              <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                <Image
                  src={
                    "/images/profil-pimpinan/Brigjen. Pol. (Purn). Dr. Achmadi, S.H.,M.A.P.jpg"
                  }
                  fill
                  sizes="100vh"
                  alt=""
                  className=" object-cover group-hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
            <div className=" col-span-9 px-3  xl:px-5">
              <div className="h-full flex flex-col justify-center space-y-2">
                <HeaderSection>
                  Brigjen. Pol. (Purn). Dr. Achmadi, S.H.,M.A.P.
                </HeaderSection>
                <p className="text-base pt-2">
                  DR. Achmadi Saat ini ia kembali terpilih sebagai anggota LPSK
                  Periode 2024-2029. Lahir di Sragen, 20 September 1960, Ia
                  merupakan lulusan AKABRI Tahun 1984, Perguruan Tinggi Ilmu
                  Kepolisian (PTIK) angkatan 23, Sekolah Staf dan Komando TNI
                  Angkatan Udara (SESKOAU) angkatan 35 tahun 1999, Sekolah Staf
                  dan Pimpinan Administrasi Tingkat Tinggi Polri (SESPATI Polri)
                  Dikreg 13 tahun 2007, dan lulus dari Program Pendidikan
                  Singkat Angkatan 19 LEMHANNAS RI tahun 2013.
                </p>
                <p className="text-base pt-2">
                  Achmadi menyelesaikan Program Studi Doktor Ilmu Administrasi
                  di Universitas Brawijaya tahun 2010, Pascasarjana (S2) Ilmu
                  Administrasi Publik di Universitas Brawijaya Malang pada 2004,
                  dan mendapat gelar sarjana Fakultas Hukum di Universitas
                  Wisnuwardhana pada 2004.
                </p>
                <p className="text-base pt-2">
                  Pada periode pertama sebagai Wakil Ketua LPSK (2019-2024),
                  Achmadi bertanggung jawab dalam memberikan penilaian ganti
                  rugi dalam pemberian restitusi dan kompensasi, memberikan
                  perlindungan saksi dan korban dalam proses peradilan pidana,
                  membidangi peraturan, pengawasan internal, dan koordinasi
                  antarlembaga.
                </p>
                <p className=" text-base pt-2">
                  Sebelumnya, Achmadi juga pernah menjabat sebagai Direktur
                  Penyidikan Sektor Jasa Keuangan Otoritas Jasa Keuangan (OJK)
                  di Instansi Bareskrim Polri (2017-2018), bertugas menangani
                  tindak pidana industri perdagangan, perbankan, Tindak Pidana
                  Pencucian Uang, serta Tindak Pidana Perpajakan dan Asuransi.
                  Ia meniti karir selama 25 tahun di kepolisian sejak 1993,
                  pernah menjabat sebagai Kapolsek Kuta, Kapolres Bangkalan
                  (2000-2001), Kapolres Malang (2001-2002), Kasat OPS Kabag BIN
                  OPS (2002-2005), Penyidik Utama Pidkor Bareskrim (2005-2006),
                  Kapolwil Madiun (2008-2010), Wadir Pamobvit Baharkam
                  (2010-2012), dan Karorenmin Baharkam (2012-2015).
                </p>
              </div>
            </div>
          </div>
        </AppContainer>
      </div>
      <div className="w-full relative  bg-background">
        <AppContainer>
          <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
            <div className=" col-span-3 xl:px-5 group">
              <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                <Image
                  src={
                    "/images/profil-pimpinan/(Dr. iur.) Anton PS Wibowo, S.H., M.H.jpg"
                  }
                  fill
                  sizes="100vh"
                  alt=""
                  className=" object-cover group-hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
            <div className=" col-span-9 px-3  xl:px-5">
              <div className="h-full flex flex-col justify-center space-y-2">
                <HeaderSection>
                  (Dr. iur.) Anton PS Wibowo, S.H., M.H.
                </HeaderSection>
                <p className="text-base pt-2">
                  Anton Prijadi Soesilo Wibowo terpilih kembali menjadi pimpinan
                  LPSK periode 2024-2029. Lahir di Ponorogo, 10 Mei 1964,
                  Antonius meraih gelar S3 hukum di Justus Liebig University of
                  Giessen, Jerman (2012), magister Hukum dan Sistem Peradilan
                  Pidana di Universitas Indonesia (2001), dan Sarjana Hukum di
                  Universitas Gadjah Mada (1989).
                </p>
                <p className="text-base pt-2">
                  Pada periode pertama di LPSK (2019-2024), Antonius fokus dalam
                  Pemenuhan Hak Saksi dan Korban, TPPO, serta menjadi Satgas
                  Penilai Ganti Kerugian (Restitusi dan Kompensasi). Selama
                  bertugas Ia aktif tergabung dalam Gugus Tugas TPPO dan
                  ASEAN-ACT (Asean Australia Combating Trafficking in Person).
                  Ia juga aktif menulis kolom opini di media dan kerap menjadi
                  narasumber di forum ilmiah nasional dan internasional.
                </p>
                <p className="text-base pt-2">
                  Sebelum di LPSK, Antonius pengajar di Fakultas Hukum Unika
                  Atma Jaya Jakarta dan Ketua Program Studi Magister Ilmu Hukum
                  (2014-2018), Koordinator Penelitian dan Pengabdian Masyarakat
                  (2018), Kepala Bagian Hukum Pidana (2014), dan Dekan Fakultas
                  Hukum Unika Atma Jaya Jakarta (2003-2007).
                </p>
              </div>
            </div>
          </div>
        </AppContainer>
      </div>

      <div className="w-full relative  bg-background">
        <AppContainer>
          <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
            <div className=" col-span-3 xl:px-5 group">
              <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                <Image
                  src={"/images/profil-pimpinan/Sri Suparyati, S.H., LL.M.jpg"}
                  fill
                  sizes="100vh"
                  alt=""
                  className=" object-cover group-hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
            <div className=" col-span-9 px-3  xl:px-5">
              <div className="h-full flex flex-col justify-center space-y-2">
                <HeaderSection>Sri Suparyati, S.H., LL.M.</HeaderSection>
                <p className="text-base pt-2">
                  Sri Suparyati saat ini menjadi pimpinan Lembaga Perlindungan
                  Saksi dan Korban (LPSK) periode 2024-2029. Lahir di Jakarta,
                  04 Agustus 1974, Ia memperoleh gelar Magister (S2) Hukum di
                  HULL University, Inggris (2010) dan Sarjana Hukum (S1) di
                  Universitas Krisnadwipayana (UNKRIS) Jakarta pada 1997.
                </p>
                <p className="text-base pt-2">
                  Sebelumnya, ia menjabat sebagai pendiri dan Manajer Internal
                  Lokataru & Advokat (LOKATARU 2017-2019), pernah menjabat
                  Deputi Koordinator Komisi untuk Orang Hilang dan Korban Tindak
                  Kekerasan (KONTRAS 2010-2014), Treasurer The Asian Federation
                  Against Involuntary Disappearances (AFAD 2014-2017), Direktur
                  Eksekutif Omah Munir (2016-2017).
                </p>
                <p className="text-base pt-2">
                  Sri Suparyati jaktif dalam advokasi dan kerjasama di bidang
                  HAM internasional, dan selama berkiprah sebagai advokat
                  terlibat menangani sejumlah perkara publik secara litigasi dan
                  nonlitigasi, seperti mendampingi korban dalam sengketa tanah,
                  TPKS, UU ITE, dan kerap berkoordinasi dengan Kementerian PPA,
                  Ombudsman, dan Kepolisian.
                </p>
              </div>
            </div>
          </div>
        </AppContainer>
      </div>
      <div className="w-full relative  bg-background">
        <AppContainer>
          <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
            <div className=" col-span-3 xl:px-5 group">
              <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                <Image
                  src={"/images/profil-pimpinan/Susilaningtias SH., M.H.jpg"}
                  fill
                  sizes="100vh"
                  alt=""
                  className=" object-cover group-hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
            <div className=" col-span-9 px-3  xl:px-5">
              <div className="h-full flex flex-col justify-center space-y-2">
                <HeaderSection>Susilaningtias SH., M.H.</HeaderSection>
                <p className="text-base pt-2">
                  Sri Suparyati saat ini menjadi pimpinan Lembaga Perlindungan
                  Susilaningtias saat ini kembali menjadi pimpinan LPSK periode
                  2024-2029. Lahir di Surabaya, 20 Oktober 1977, Susilaningtias
                  menyelesaikan pendidikan Magister Hukum di Fakultas
                  Universitas Indonesia (2021), dan Sarjana Hukum di Fakultas
                  Brawijaya Malang (2000).
                </p>
                <p className="text-base pt-2">
                  Ia bergabung dengan LPSK sejak 2010 sebagai Tenaga Ahli dan
                  terpilih sebagai Wakil Ketua LPSK periode 2019-2024, dan
                  kembali terpilih periode 2024-2029. Selama menjabat ia fokus
                  dalam Pemenuhan Hak Saksi dan Korban Tindak Pidana Terorisme,
                  Tindak Pidana Korupsi, Tindak Penyiksaan dan Justice
                  Collaborator.
                </p>
                <p className="text-base pt-2">
                  Susilaningtias juga aktif membuat karya ilmiah yang
                  diterbitkan di Perkumpulan HuMa dan LPSK, yakni Potret
                  Pluralisme Hukum di Indonesia dalam Praktek Advokasi (2005),
                  Manual Penguatan Hukum Rakyat (2007), Metode Pewayangan
                  Berperspektif Perlindungan Saksi (2011), Memahami
                  Whistleblower (2011), Perlindungan Saksi dan Korban Lintas
                  Negara (2015), dan Kompensasi Bagi Korban Teror Bom di
                  Samarinda (2017).
                </p>
                <p className="text-base ppt-2">
                  Sebelumnya, ia memiliki latar belakang sebagai pengacara
                  publik, menjabat Kepala Divisi Hukum Lingkungan Walhi Jawa
                  Timur (2000-2004), Koordinator Program Penguatan Hukum untuk
                  Komunitas Perkumpulan HuMa (2004-2010) mengelola program
                  penguatan kapasitas, pengembangan hukum dan merancang
                  pendidikan kritis tentang hukum untuk komunitas lokal dan
                  masyarakat hukum adat. Ia juga menjadi Retainer Lawyer untuk
                  Greenpeace Southeast Asia-Indonesia (2008-2010), melakukan
                  pendampingan hukum terhadap aktivis yang menghadapi masalah
                  hukum ketika melakukan aksi penyelamatan lingkungan hidup di
                  Indonesia.
                </p>
              </div>
            </div>
          </div>
        </AppContainer>
      </div>
      <div className="w-full relative  bg-background">
        <AppContainer>
          <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
            <div className=" col-span-3 xl:px-5 group">
              <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                <Image
                  src={
                    "/images/profil-pimpinan/Wawan Fahrudin, S. SOS., M.E.jpg"
                  }
                  fill
                  sizes="100vh"
                  alt=""
                  className=" object-cover group-hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
            <div className=" col-span-9 px-3  xl:px-5">
              <div className="h-full flex flex-col justify-center space-y-2">
                <HeaderSection>Wawan Fahrudin, S. SOS., M.E.</HeaderSection>
                <p className="text-base pt-2">
                  Wawan Fahrudin saat ini menjadi pimpinan LPSK periode
                  2024-2029. Lahir di Kudus, 25 Mei 1980, ia memperoleh gelar
                  Magister (S2) Perencanaan Kebijakan Publik di Universitas
                  Indonesia (2022) dan menyelesaikan Sarjana (S1) Ilmu Politik
                  di Universitas Indonesia (2004).
                </p>
                <p className="text-base pt-2">
                  Sebelumnya, ia menjabat Staf Khusus Kepala Badan Perlindungan
                  Pekerja Migran Indonesia (BP2MI) pada 2020-2023, Tenaga Ahli
                  Madya di Kedeputian Monitoring dan Evaluasi di UKP PIP (cikal
                  bakal BPIP-Badan Pembinaan Ideologi Pancasila) tahun
                  2017-1819, Konsultan Perencanaan Pembangunan (Bappenas) pada
                  2009-2010 dan Staf Ahli Komite I DPD RI (2010-2017).
                </p>
                <p className="text-base pt-2">
                  Sebagai staf ahli BP2MI ia aktif memberikan pertimbagan
                  kebijakan perlindungan pekerja migran Indonesia, terlibat
                  dalam Tim Ahli Pansus Papua (2017-2018), RUU Masyarakat Adat
                  usulan DPD Rl (2018-2019), dan Pengawasan Pelaksanaan Otonomi
                  khusus Papua dan Aceh (2016-2017). Ia juga terlibat dalam
                  riset dan advokasi isu-isu perdagangan internasional di
                  Institute for Global Justice (2004-2005) dan penelitian
                  pemanfaatan dana publik di Public Policy Research and Advocacy
                  Center (PIRAC 2002-2003).
                </p>
              </div>
            </div>
          </div>
        </AppContainer>
      </div>
      <div className="w-full relative  bg-background">
        <AppContainer>
          <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
            <div className=" col-span-3 xl:px-5 group">
              <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                <Image
                  src={"/images/profil-pimpinan/Mahyudin, SH., MH.jpg"}
                  fill
                  sizes="100vh"
                  alt=""
                  className=" object-cover group-hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
            <div className=" col-span-9 px-3  xl:px-5">
              <div className="h-full flex flex-col justify-center space-y-2">
                <HeaderSection>Mahyudin, SH., MH.</HeaderSection>
                <p className="text-base pt-2">
                  Mahyudin saat ini menjadi pimpinan LPSK periode 2024-2029.
                  Kelahiran Bima, 8 Juni 1979, ia meraih gelar Magister (S2)
                  Hukum Tata Negara di Universitas Indonesia (2016) dan gelar
                  Sarjana (S1) jurusan Ilmu Hukum Universitas Ibnu Chaldun
                  Jakarta (2006).
                </p>
                <p className="text-base pt-2">
                  Sebelumnya, ia berprofesi sebagai advokat di AHP Law Firm
                  (2010-2018), mengajar mata kuliah hukum Tata Negara di
                  almamaternya Universitas Ibnu Chaldun (2016-2023) dan anggota
                  Bawaslu Prov. DKI Jakarta (2018-2023).
                </p>
                <p className="text-base pt-2">
                  Selain bergelut dalam bidang hukum Tata Negara dan
                  penyelesaian sengketa di Badan Pengawas Pemilu (Bawaslu),
                  karya ilmiahnya diterbitkan dalam Law and Justice Journals
                  berjudul Impact of Structured, Systematic, and Massive
                  Violations In The General Election (2022) dan menulis buku
                  Sengketa Proses Pemilu; Sejarah, Perkembangan, dan Praktek
                  (Pustaka Ilmu 2021).
                </p>
              </div>
            </div>
          </div>
        </AppContainer>
      </div>

      <div className="w-full relative  bg-background">
        <AppContainer>
          <div className="grid grid-cols-6 md:grid-cols-12 h-full gap-5 py-5">
            <div className=" col-span-3 xl:px-5 group">
              <div className="h-[300px] md:h-full w-full relative overflow-hidden">
                <Image
                  src={"/images/profil-pimpinan/Sri Nurherwati, S.H.jpg"}
                  fill
                  sizes="100vh"
                  alt=""
                  className=" object-cover group-hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
            <div className=" col-span-9 px-3  xl:px-5">
              <div className="h-full flex flex-col justify-center space-y-2">
                <HeaderSection>Sri Nurherwati, S.H.</HeaderSection>
                <p className="text-base pt-2">
                  Sri Nurherwati saat ini menjadi pimpinan Lembaga Perlindungan
                  Saksi dan Korban (LPSK) periode 2024-2029. Lahir di Semarang,
                  30 Oktober 1968, ia menyelesaikan pendidikan Fakultas Hukum
                  pada 1992 di Universitas 17 Agustus 1945 (UNTAG Semarang).
                </p>
                <p className="text-base pt-2">
                  Sebelumnya, ia menjabat sebagai Konsultan dan Advokat di
                  klinik hukum Ultra Petita (2024), Konsultan di Komnas
                  Perempuan (2021), Konsultan KEMENPPPA (2020), Tenaga Ahli
                  Kementerian Pemberdayaan Perempan dan Perlindungan Anak
                  (2022), dan Komisioner Komnas Perempuan (2010-2019).
                </p>
                <p className="text-base pt-2">
                  Sri Nurherwati berkiprah di dunia hukum sejak aktif di LBH
                  Semarang dan terlibat dalam advokasi kasus Kedung Ombo pada
                  1995. Ia terlibat dalam advokasi kasus-kasus tindak pidana
                  kekerasan seksual dan aktif di LBH Apik Jakarta sejak tahun
                  2006-2009. Ia juga aktif memperjuangkan hak restitusi korban
                  TPKS dengan memberikan pendampingan di persidangan dan
                  terlibat dalam mewujudkan memorialisasi Tragedi Mei 1998 di
                  DKI Jakarta pada 2015 saat menjabat sebagai Komisioner
                  Komnas Perempuan.
                </p>
              </div>
            </div>
          </div>
        </AppContainer>
      </div>
    </div>
  );
}
