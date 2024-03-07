
'use client';
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function RoundChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            datasets: [
                {
                    data: [80, 20],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'),
                        documentStyle.getPropertyValue('--yellow-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'),
                        documentStyle.getPropertyValue('--yellow-400')
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex md:flex-row flex-col justify-content-center items-center gap-6">
            <Chart type="doughnut" data={chartData} options={chartOptions} className="md:w-60 w-40" />
            <div className='flex flex-col gap-3'>
                <p className='flex gap-2 items-center'>
                    <span className='w-3 h-3 bg-koinx-blue rounded-full' />
                    <span className=''>Crowdsal Investor: 80%</span>
                </p>
                <p className='flex gap-2 items-center'>
                    <span className='w-3 h-3 bg-koinx-yellow rounded-full' />
                    <span className=''>Foundation: 20%</span>
                </p>
            </div>
        </div>
    )
}
