"use client"

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, LinearScale, registerables } from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import colors from "tailwindcss/colors";
import {CategoryScale} from 'chart.js'; 

ChartJS.register(ArcElement,CategoryScale, LinearScale ,Tooltip, Legend,...registerables);

export const pelayananPublik: ChartData<"pie", number[], unknown> = {
    labels: ["Aplikasi Permohonan Perlindungan", "Datang Langsung", "Email", "Surat", "Whatsapp"],
    datasets: [
        {
            data: [93, 2077, 154, 2514, 1166],
            backgroundColor: [
                colors.orange[100],
                colors.orange[200],
                colors.orange[300],
                colors.orange[400],
                colors.orange[500],
            ],
            borderColor: colors.transparent,
            borderWidth: 1,
        },
    ],
};

export const hamBerat: ChartData<"pie", number[], unknown> = {
    labels: ['Jumlah Permohonan', 'Jumlah Terlindung', 'Dewasa', 'Anak', 'Laki Laki', 'Perempuan', 'Carry Over 2021', 'Diterima 2022', 'Dihentikan', 'Terlindung Aktif'],
    datasets: [
        {
            data: [600, 590, 590, 0, 372, 218, 302, 288, 123, 467],
            backgroundColor: [
                colors.orange[100],
                colors.orange[200],
                colors.orange[300],
                colors.orange[400],
                colors.orange[500],
            ],
            borderColor: colors.transparent,
            borderWidth: 1,
        },
    ],
};

export const tindakPidanaKorupsi: ChartData<"pie", number[], unknown> = {
    labels: ['Jumlah Permohonan', 'Jumlah Terlindung', 'Dewasa', 'Anak', 'Laki Laki', 'Perempuan', 'Carry Over 2021', 'Diterima 2022', 'Dihentikan', 'Terlindung Aktif'],
    datasets: [
        {
            data: [80, 59, 59, 0, 44, 15, 34, 25, 9, 50],
            backgroundColor: [
                colors.orange[100],
                colors.orange[200],
                colors.orange[300],
                colors.orange[400],
                colors.orange[500],
            ],
            borderColor: colors.transparent,
            borderWidth: 1,
        },
    ],
};

export const penyiksaan: ChartData<"pie", number[], unknown> = {
    labels: ['Jumlah Permohonan', 'Jumlah Terlindung', 'Dewasa', 'Anak', 'Laki Laki', 'Perempuan', 'Carry Over 2021', 'Diterima 2022', 'Dihentikan', 'Terlindung Aktif'],
    datasets: [
        {
            data: [43, 25, 22, 3, 12, 13, 20, 5, 15, 10],
            backgroundColor: [
                colors.orange[100],
                colors.orange[200],
                colors.orange[300],
                colors.orange[400],
                colors.orange[500],
            ],
            borderColor: colors.transparent,
            borderWidth: 1,
        },
    ],
};

export const anak: ChartData<"pie", number[], unknown> = {
    labels: ['Kasus', 'Tindakan Proaktif', 'Pemohon Tindakan Proaktif', 'Perlindungan Darurat', 'Pemohon Perlindungan Darurat'],
    datasets: [
        {
            data: [536, 23, 53, 8, 16],
            backgroundColor: [
                colors.orange[100],
                colors.orange[200],
                colors.orange[300],
                colors.orange[400],
                colors.orange[500],
            ],
            borderColor: colors.transparent,
            borderWidth: 1,
        },
    ],
};

export const pencucianUang: ChartData<"pie", number[], unknown> = {
    labels: ['Dana Pro', 'Fahrenheit', 'Evo Trade', 'Quotex', 'Fikasa', 'KSP Sejahtera Bersama', 'Yagoal', 'Viralblast', 'KSP Indo Seruya', 'Binomo', 'Sunmod Alkes', 'Olymtrade', 'ATG', 'FIN 888', 'NET 89'],
    datasets: [
        {
            data: [1458, 774, 323, 24, 9, 4, 1, 905, 468, 48, 16, 9, 2 ,1, 1],
            backgroundColor: [
                colors.orange[100],
                colors.orange[200],
                colors.orange[300],
                colors.orange[400],
                colors.orange[500],
            ],
            borderColor: colors.transparent,
            borderWidth: 1,
        },
    ],
};

export const penganiayaanBerat: ChartData<"pie", number[], unknown> = {
    labels: ['Jumlah Permohonan', 'Jumlah Terlindung', 'Dewasa', 'Anak', 'Laki Laki', 'Perempuan', 'Carry Over 2021', 'Diterima 2022', 'Dihentikan', 'Terlindung Aktif'],
    datasets: [
        {
            data: [41, 179, 164, 15, 26, 53, 101, 78, 10, 169],
            backgroundColor: [
                colors.orange[100],
                colors.orange[200],
                colors.orange[300],
                colors.orange[400],
                colors.orange[500],
            ],
            borderColor: colors.transparent,
            borderWidth: 1,
        },
    ],
};

export const membahayakanJiwa: ChartData<"pie", number[], unknown> = {
    labels: ['Jumlah Permohonan', 'Jumlah Terlindung','Pemohon Proaktif', 'Tindakan Proaktif', 'Perlindungan Darurat'],
    datasets: [
        {
            data: [617, 265, 8, 48, 101],
            backgroundColor: [
                colors.orange[100],
                colors.orange[200],
                colors.orange[300],
                colors.orange[400],
                colors.orange[500],
            ],
            borderColor: colors.transparent,
            borderWidth: 1,
        },
    ],
};


export const seksual: ChartData<"bar", number[], unknown> = {
    labels: ['Kasus','Pemohon Perlindungan', 'Perlindungan Darurat', 'Pemohon Perlindungan Darurat'],
    datasets: [
        {
            label: "2021",
            data: [70, 70, 70, 70],
            backgroundColor: colors.orange[500],
            borderColor: colors.transparent,
            borderWidth: 1,
        },
        {
            label: "2022",
            data: [53, 53, 53, 53, 53],
            backgroundColor: colors.orange[100],
            borderColor: colors.transparent,
            borderWidth: 1,
        },
    ],
};

export const perdaganganManusia: ChartData<"bar", number[], unknown> = {
    labels: [
        'Permohonan',
        'Tindakan Proaktif', 
        'Pemohon Tindakan Proaktif', 
        'Perlindungan Darurat', 
        'Pemohon Perlindungan Darurat',
        'Jumlah Terlindung',
        'Permohonan Hak Prosedural',
        'Perlindungan Fisik',
        'Bantuan Medis',
        'Bantuan Psikologis',
        'Program Psikologis',
        'Bantuan Hidup Sementara',
    ],
    datasets: [
        {
            label: "2021",
            data: [147, 1, 6, 0, 0, 252, 219, 3, 12, 15, 8, 16],
            backgroundColor: colors.orange[500],
            borderColor: colors.transparent,
            borderWidth: 1,
        },
        {
            label: "2022",
            data: [150, 3, 27, 2, 4, 268, 208, 3, 14, 18, 7, 1],
            backgroundColor: colors.orange[100],
            borderColor: colors.transparent,
            borderWidth: 1,
        },
    ],
};

export const perlindunganSaksiKorban : ChartData<"bar", number[], unknown> = {
    labels: ['Pencucian Uang', 'Pelanggaran HAM Berat','Kekerasan Seks Anak', "Perdagangan Orang", "Terorisme", "Kekerasan Seksual", "Korupsi", "Penyiksaan", "Penganiayaan Berat", "Narkotika", "Tindak Pidana Lain", "Bukan Tindak Pidana"],
    datasets: [
        {
            label: "2021",
            data: [8, 348, 426, 147, 627, 60, 55, 31, 79, 5, 526, 73],
            backgroundColor: [
                colors.orange[100],
                colors.orange[200],
                colors.orange[300],
            ],
            borderColor: colors.slate[800],
            borderWidth: 1,
        },
        {
            label: "2022",
            data: [3725, 600, 536, 150, 91, 99, 80, 43, 41, 6, 617, 116],
            backgroundColor: [
                colors.orange[100],
                colors.orange[200],
                colors.orange[300],
            ],
            borderColor: colors.slate[800],
            borderWidth: 1,
        },
    ],
};

export const analyticData: ChartData<"line", number[], unknown> = {
    labels: ['Oktober', 'November','Desember'],
    datasets: [
        {
            label: "Statistik Pengunjung",
            data: [135, 256, 94],
            backgroundColor: [
                colors.orange[100],
                colors.orange[200],
                colors.orange[300],
            ],
            borderColor: colors.slate[800],
            borderWidth: 1,
        },
    ],
};


export const terorisme: ChartData<"bar", number[], unknown> = {
    labels: [
        'Permohonan',
        'Tindakan Proaktif', 
        'Pemohon Tindakan Proaktif', 
        'Jumlah Terlindung',
        'Permohonan Hak Prosedural',
        'Perlindungan Fisik',
    ],
    datasets: [
        {
            label: "2021",
            data: [527, 1, 21, 886, 264, 55],
            backgroundColor :colors.orange[500],
            borderColor: colors.transparent,
            borderWidth: 1,
        },
        {
            label: "2022",
            data: [91, 1, 21, 953, 350, 0],
            backgroundColor: colors.orange[100],
            borderColor: colors.transparent,
            borderWidth: 1,
        },
    ],
};




export function PieChart({data}: {data: ChartData<"pie", number[], unknown>}) {
    return <div className='w-full relative'>
        <Pie className='w-full' data={data} options={{
            plugins: {
                legend: {
                    position: "bottom", labels: {
                        padding: 16,
                    },
                }
            }
        }} />
    </div>
}

export function BarChart({data}: {data: ChartData<"bar", number[], unknown>}) {
    return <div className='w-full relative'>
        <Bar className='w-full' data={data} options={{
            plugins: {
                legend: {
                    position: "bottom", labels: {
                        padding: 16,
                    },
                }
            }
        }} />
    </div>
}

export function LineChart({data}: {data: ChartData<"line", number[], unknown>}) {
    return <div className='w-full relative'>
        <Line className='w-full' data={data} options={{
            plugins: {
                legend: {
                    position: "bottom", labels: {
                        padding: 16,
                    },
                }
            }
        }} />
    </div>
}

