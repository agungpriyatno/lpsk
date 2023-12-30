import { Aplication } from "@prisma/client";

export const INTERNAL_APLICATION: Aplication[] = [
    {
        id: "",
        name: "SIMPUSAKO",
        description: "Sistem Informasi Perlindungan Saksi dan Korban",
        type: "INTERNAL",
        link: "http://103.84.206.141/layanan/",
        images: "/images/simpusako.png",
        createdAt: new Date()
    },
    {
        id: "",
        name: "FONDASI",
        description: "Tindak Lanjut Keputusan Rekomendasi",
        type: "INTERNAL",
        link: "https://layanan.lpsk.go.id/monev/",
        images: "/images/fondasi.png",
        createdAt: new Date()
    },
    {
        id: "",
        name: "SSK",
        description: "Sahabat Saksi dan Korban",
        type: "INTERNAL",
        link: "https://ssk.lpsk.go.id/",
        images: "/images/ssk.jpg",
        createdAt: new Date()
    },
    {
        id: "",
        name: "SIMPELKAN",
        description: "Sistem Informasi Pelayanan Kantor",
        type: "INTERNAL",
        link: "",
        images: "/images/simpelkan.png",
        createdAt: new Date()
    },
    {
        id: "",
        name: "JDIH",
        description: "Jaringan Dokumentasi dan Informasi Hukum",
        type: "INTERNAL",
        link: "https://jdih.lpsk.go.id/",
        images: "/images/lemon.png",
        createdAt: new Date()
    },
    {
        id: "",
        name: "EPPID",
        description: "Web portal Keterbukaan Informasi Elektronik Lembaga Perlindungan Saksi dan Korban",
        type: "INTERNAL",
        link: "https://eppid.lpsk.go.id/",
        images: "/images/simpusako.png",
        createdAt: new Date()
    }
]


export const EXTERNAL_APLICATION: Aplication[] = [
    {
        id: "",
        name: "E-MANAJEMEN PENYIDIKAN POLRI",
        description: "",
        type: "EXTERNAL",
        link: "https://robinops.bareskrim.polri.go.id/Account/Login?ReturnUrl=%2F",
        images: "/images/bareskrim.jpg",
        createdAt: new Date()
    },
    {
        id: "",
        name: "CMS PUBLIK KEJAKSAAN RI",
        description: "",
        type: "EXTERNAL",
        link: "https://cms-publik.kejaksaan.go.id/",
        images: "/images/kejaksaan-ri.jpg",
        createdAt: new Date()
    },
    {
        id: "",
        name: "E-MINDIK BNN",
        description: "",
        type: "EXTERNAL",
        link: "https://mindik.bnn.go.id/",
        images: "/images/bnn.jpg",
        createdAt: new Date()
    },
    {
        id: "",
        name: "SDP KEMENKUMHAM",
        description: "",
        type: "EXTERNAL",
        link: "",
        images: "/images/kemenkumham.png",
        createdAt: new Date()
    },
    {
        id: "",
        name: "KPK",
        description: "",
        type: "EXTERNAL",
        link: "https://kpk.go.id/",
        images: "/images/kpk.jpg",
        createdAt: new Date()
    },
    {
        id: "",
        name: "SP4N LAPOR",
        description: "",
        type: "EXTERNAL",
        link: "https://www.lapor.go.id/",
        images: "/images/lapor.png",
        createdAt: new Date()
    },
]