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
        href: "https://eppid.lpsk.go.id/",
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
