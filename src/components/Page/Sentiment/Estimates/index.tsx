'use client'
import SectionHeading from '@/components/common/Section_Heading'
import { useHome } from '@/lib/Context/HomeContext'
import React from 'react'

function Estimates() {
    const { CoinData } = useHome()

    if (!CoinData) return null

    const EstimateBuy = CoinData?.sentiment_votes_up_percentage?.toFixed(2) || 0
    const EstimateSell = CoinData?.sentiment_votes_down_percentage?.toFixed(2) || 0
    const EstimateHold = 100 - (EstimateBuy + EstimateSell) || 0

    const EstimateList = [
        {
            label: 'Buy',
            value: EstimateBuy,
            color: 'bg-green-500'
        },
        {
            label: 'Hold',
            value: EstimateHold,
            color: 'bg-gray-300'
        },
        {
            label: 'Sell',
            value: EstimateSell,
            color: 'bg-red-500'
        }
    ]

    return (
        <div className='space-y-3'>
            <SectionHeading Heading='Analyst Estimates' />
            <div className='flex gap-3 text-gray-500 md:w-[90%'>
                <div className='h-fit basis-1/3 md:basis-1/5 grid place-content-center grid-flow-col relative'>
                    <div className='text-[40px] h-32 w-32 text-green-500 grid grid-flow-col place-items-center place-content-center bg-green-500/10 rounded-full' >{Math.floor(CoinData?.sentiment_votes_up_percentage) || 0}<span className='text-xl'>%</span></div>
                </div>
                <div className='flex flex-col justify-around flex-1'>
                    {EstimateList.map((item, index) => (
                        <div key={index} className='flex gap-8 items-center'>
                            <span className='text-lg font-semibold'>{item.label}</span>
                            <div className='flex-1 flex items-center gap-3' style={{ width: `100%` }}>
                                <div className={`h-3 rounded-md ${item.color}`} style={{ width: `${item.value}%` }} />
                                <p>{item.value}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Estimates