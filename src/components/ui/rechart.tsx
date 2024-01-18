"use client"

import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle, Pie, PieChart } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
];

export const ReChartBar = ({ data }: { data: any[] }) => {
    return (
        <div className=" h-full w-full bg-background rounded p-5">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="orange" activeBar={<Rectangle fill="orange" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    )
}

export const ReChartBar2 = ({ data }: { data: { name: string, value: number }[] }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" className='text-xs' />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="value" fill="orange" activeBar={<Rectangle fill="orange" />} >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} className='text-xs' fill={COLORS[index % COLORS.length]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>

    )
}


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const ReChartPie = ({ data }: { data: { name: string, value: number }[] }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart >
                <Pie data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value" >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend className='text-xs' style={{ fontSize: 10 }} />
            </PieChart>
        </ResponsiveContainer>
    )
}


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};