'use client'
import SectionHeading from '@/components/common/Section_Heading'
import { ProgressBar } from 'primereact/progressbar'
import React from 'react'

function Estimates() {
    return (
        <div className='space-y-3'>
            <SectionHeading Heading='Analyst Estimates' />
            <div className='flex gap-3 text-gray-500'>
                <div className='h-fit basis-1/3 grid place-content-center grid-flow-col relative'>
                    <div className='text-[40px] h-32 w-32 text-green-500 grid grid-flow-col place-items-center place-content-center bg-green-500/10 rounded-full' >75<span className='text-xl'>%</span></div>
                </div>
                <div className='flex flex-col justify-around flex-1'>
                    <div className='flex gap-8 items-center w-full'>
                        <span className=' text-lg font-semibold'>Buy</span>
                        <div className='flex-1 flex items-center gap-3' style={{ width: `100%` }}>
                            <div className='h-3 rounded-md bg-green-500' style={{ width: `76%` }} />
                            <p>76%</p>
                        </div>
                    </div>
                    <div className='flex gap-8 items-center'>
                        <span className='text-lg font-semibold'>Hold</span>
                        <div className='flex-1 flex items-center gap-3' style={{ width: `100%` }}>
                            <div className='h-3 rounded-md bg-gray-300' style={{ width: `8%` }} />
                            <p>8%</p>
                        </div>
                    </div>
                    <div className='flex gap-8 items-center'>
                        <span className='text-lg font-semibold'>Sell</span>
                        <div className='flex-1 flex items-center gap-3' style={{ width: `100%` }}>
                            <div className='h-3 rounded-md bg-red-500' style={{ width: `16%` }} />
                            <p>16%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Estimates