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
        href: "/informasi-pelayanan",
        children: [
            {
                title: "Maklumat Pelayanan",
                href: "/informasi-pelayanan/maklumat-pelayanan",
            },
            {
                title: "Standar Pelayanan Publik di lingkungan LPSK",
                href: "/informasi-pelayanan/pelayanan-publik",
            },
            {
                title: "Standar Pelayanan Penerimaan Permohonan",
                href: "/informasi-pelayanan/penerimaan-permohonan",
            },
            {
                title: "Standar Pelayanan Pemberian Pelayanan Darurat",
                href: "/informasi-pelayanan/pemberian-perlindungan-darurat",
            },
            {
                title: "Standar Pelayanan Tindakan Proaktif",
                href: "/informasi-pelayanan/tindakan-proaktif",
            },
            {
                title: "Standar Pelayana Pemberian Perlindungan",
                href: "/informasi-pelayanan/pemberian-perlindungan",
            },
            {
                title: "Standar Pelayanan Permintaan Informasi Publik LPSK",
                href: "/informasi-pelayanan/permintaan-informasi-publik",
            },
            {
                title: "Laporan Surver Kepuasan Masyarakat",
                href: "/informasi-pelayanan/laporan-survey",
            },
            {
                title: "Pengaduan Pelayanan Publik",
                href: "https://docs.google.com/forms/d/e/1FAIpQLScZtI-6ViU-TwZ4dfqhtE2kqj3HzKsFru_-Smx7RroqhOmSWg/viewform?pli=1",
            },
            {
                title: "LAPOR!!",
                href: "https://www.lapor.go.id/",
            },
            {
                title: "E-PPID",
                href: "https://eppid.lpsk.go.id/",
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
