"use client"

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, LinearScale, registerables, } from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import colors from "tailwindcss/colors";
import { CategoryScale } from 'chart.js';

ChartJS.register(...registerables);

export const data: ChartData<"bar", number[], unknown> = {
    labels: [
        'Pilihan A',
        'Pilihan B',
        // 'Pilihan B',
    ],
    datasets: [
        {
            barPercentage: 0.5,
            // label: "Voting",
            data: [147, 123, 2],
            backgroundColor: [colors.blue[500], colors.red[500]],
            borderColor: colors.transparent,
            borderWidth: 1,
        },
    ],
};

export const VoteChart = () => {
    return (
        <div>
            <Bar className='w-full' data={data} options={{
                indexAxis: "x",
                scales: {
                    x: { grid: { drawOnChartArea: false } },
                    y: {
                        grid: { drawOnChartArea: false },
                        
                    }
                },
                plugins: {
                    legend: { display: false },

                },

            }} />
        </div>
    )
}