import { TCarouselItem } from "@/types/utils"
import { Carousel, CarouselLoading } from "../ui/carousel"
import { Suspense, useEffect, useState } from "react"

const carouselItems: TCarouselItem[] = [
    {
        title: "PENGUMUMAN",
        descriptions: "HASIL AKHIR SELEKSI CALON ANGGOTA LPSK MASA JABATAN 2024-2029",
        image: "/images/lpsk-carousel.png"
    },
    {
        title: "INFORMASI",
        descriptions: "Sayembara Logo LPSK",
        image: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Hasil Seleksi Administrasi",
        descriptions: "Pelamar Seleksi PPPK Lembaga Perlindungan Saksi dan Korban",
        image: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "PENGUMUMAN",
        descriptions: " PENDAFTARAN SELEKSI CALON ANGGOTA LPSK 2024-2029",
        image: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]


export const CarouselSection = async () => {
    return (
        <section>
            <Suspense fallback={<CarouselLoading />}>
                <Carousel images={carouselItems} />
            </Suspense>
        </section>
    )
}