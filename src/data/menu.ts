import { TMenuItem } from "@/types/utils";

export const MENU: TMenuItem[] = [
    {
        title: "Beranda",
        href: "/beranda",
    },
    {
        title: "Profil",
        href: "/profile",
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
                title: "Road Map & Rencana Strategi",
                href: "/profile/roadmap",
            },
            {
                title: "Profil Pimpinan",
                href: "/profile/official",
            },
            {
                title: "Pejabat Struktural",
                href: "/profile/official-structural",
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
        title: "Voting",
        href: "/voting",
    },
    {
        title: "Peraturan",
        href: "/peraturan",
    },
    {
        title: "Informasi & Pelayanan",
        href: "/informasi",
        children: [
            {
                title: "Standar Pelayanan Publik",
                href: "/informasi/pelayanan-publik",
            },
            {
                title: "Standar Pelayanan Penerimaan Permohonan",
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
        href: "/kerjasama",
    },

    {
        title: "Kontak Kami",
        href: "/kontak-kami",
    },
]
