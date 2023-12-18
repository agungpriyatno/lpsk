"use client"

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import colors from "tailwindcss/colors";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    plugins: {
        tooltip: {
            titleFont: {
                size: 20
            },
            bodyFont: {
                size: 20
            },
        },
        legend: {
            display: true,
            responsive: true,
            position: "bottom",
            labels: {
                boxWidth: 36,
                padding: 40,
                font: {
                    size: 34
                },
            },
            align: "center",
        },
    }
}

export const data = {
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

export const tindakPidanaKorupsi = {
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

export const penyiksaan = {
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

export const anak = {
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

export const seksual = {
    labels: ['Kasus','Pemohon Perlindungan', 'Perlindungan Darurat', 'Pemohon Perlindungan Darurat'],
    datasets: [
        {
            label: "2021",
            data: [70, 70, 70, 70],
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
        {
            label: "2022",
            data: [53, 53, 53, 53, 53],
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

export function PieChart({type = "HAM_BERAT"}: {type?: 'HAM_BERAT' | 'KORUPSI' | 'PENYIKSAAN' | 'ANAK' | 'SEKSUAL'}) {
    return <div className=' w-full relative'>
        <Pie data={
            type === "HAM_BERAT" ? data  
            : type === 'PENYIKSAAN' ? penyiksaan 
            : type === 'ANAK' ? anak 
            : type === 'SEKSUAL' ? seksual 
            : tindakPidanaKorupsi} options={{
            plugins: {
                legend: {
                    position: "bottom", labels: {
                        // boxWidth: 36,
                        padding: 16,
                    },
                }
            }
        }} />
    </div>
}
