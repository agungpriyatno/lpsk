import { TMenuItem } from "@/types/utils";

export const MENU: TMenuItem[] = [
    {
        title: "Beranda",
        href: "/home",
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
                href: "/profile/organizational",
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
                href: "/profile/",
            },

        ],
    },
    {
        title: "Berita",
        href: "/",
    },
    {
        title: "Publikasi",
        href: "/",
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
                href: "/information",
            },
            {
                title: "Standar Pelayanan Pemerintah Permohonan",
                href: "/information",
            },
            {
                title: "Standar Pelayanan Pro Aktif dan Darurat",
                href: "/information",
            },
            {
                title: "Standar Pelayanan Informasi Publik",
                href: "/information",
            },
            {
                title: "Standar Pelayanan Pemenuhan Hak",
                href: "/information",
            },
            {
                title: "Informasi LHKPN",
                href: "/information",
            },
            {
                title: "Pengaduan Pelayanan Publik",
                href: "/information",
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
