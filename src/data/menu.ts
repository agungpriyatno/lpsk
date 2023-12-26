import { TMenuItem } from "@/types/utils";

export const MENU: TMenuItem[] = [
    {
        title: "Beranda",
        href: "/beranda",
    },
    {
        title: "Profil",
        href: "/",
        children: [
            {
                title: "Sekilas LPSK",
                href: "/profile/about",
            },
            {
                title: "Struktur Organisasi",
                href: "/profile/organization-structural",
            },
            {
                title: "Pejabat Strukturan",
                href: "/profile/official-structural",
            },
            {
                title: "Road Map & Rencana Strategi",
                href: "/profile/roadmap",
            },
            {
                title: "Profil Pimpinan",
                href: "/profile/official",
            },

        ],
    },
    {
        title: "Berita",
        href: "/berita",
    },
    {
        title: "Publikasi",
        href: "/publikasi",
    },
    {
        title: "Peraturan",
        href: "/",
    },
    {
        title: "Informasi & Pelayanan",
        href: "/",
        children: [
            {
                title: "Standar Pelayanan Publik",
                href: "/informasi/pelayanan-publik",
            },
            {
                title: "Standar Pelayanan Pemerintah Permohonan",
                href: "/informasi/pedoman",
            },
            {
                title: "Standar Pelayanan Pro Aktif dan Darurat",
                href: "/informasi/proaktif-darurat",
            },
            {
                title: "Standar Pelayanan Informasi Publik",
                href: "/informasi/informasi-publik",
            },
            {
                title: "Standar Pelayanan Pemenuhan Hak",
                href: "/informasi/pemenuhan-hak",
            },
            {
                title: "Informasi LHKPN",
                href: "/informasi",
            },
            {
                title: "Pengaduan Pelayanan Publik",
                href: "/informasi",
            },
        ],
    },
    {
        title: "Kerja Sama",
        href: "/",
        children: [
            {
                title: "Instansi Aparat Penegak Hukum",
                href: "/information",
            },
            {
                title: "Instansi Hukum",
                href: "/information",
            },
            {
                title: "Internasional",
                href: "/information",
            },
            {
                title: "Kesehatan",
                href: "/information",
            },
            {
                title: "Pendidikan",
                href: "/information",
            },
            {
                title: "LSM / Pers",
                href: "/information",
            },
        ],
    },

    {
        title: "Kontak Kami",
        href: "/information",
    },
]
