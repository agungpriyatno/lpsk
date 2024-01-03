"use client"

import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';

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

export const ReChartBar = ({data}: {data: any[]}) => {
    console.log(data);
    
    return (
        <div className=" h-[400px] w-full bg-background rounded p-5">
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
                    <Bar dataKey="count" fill="orange" activeBar={<Rectangle fill="orange"  />} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    )
}

// export default class Example extends PureComponent {
//     static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';

//     render() {
//         return (
//             <ResponsiveContainer width="100%" height="100%">
//                 <BarChart width={150} height={40} data={data}>
//                     <Bar dataKey="uv" fill="#8884d8" />
//                 </BarChart>
//             </ResponsiveContainer>
//         );
//     }
// }
