import { ChevronUp } from 'lucide-react'
import React from 'react'
import Fundamentals from './Fundamentals'
import Section from '@/components/common/Page_Section'

function Performance() {
    return (
        <Section>
            <section className='flex flex-col gap-3'>
                <h2 className='text-2xl font-semibold'>Performance</h2>
                <div className='flex flex-col gap-6'>

                    <div className='flex gap-3 items-center'>
                        <div className='flex flex-col gap-3 items-center'>
                            <p className='text-gray-500'>Today's Low</p>
                            <p className='text-gray-500 font-semibold'>46,930.22</p>
                        </div>
                        <div className='flex-1'>
                            <div className='relative h-1 w-full rounded-[999px] bg-gradient-to-r to-red-500 via-orange-400 from-green-500'>
                                <div className='absolute top-full right-[20%] flex flex-col items-center' >
                                    <ChevronUp size={15} />
                                    $48,637.83
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 items-center'>
                            <p className='text-gray-500'>Today's High</p>
                            <p className='text-gray-500 font-semibold'>46,930.22</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='flex flex-col gap-3 items-center'>
                            <p className='text-gray-500'>Today's Low</p>
                            <p className='text-gray-500 font-semibold'>46,930.22</p>
                        </div>
                        <div className='flex-1'>
                            <div className='relative h-1 w-full rounded-[999px] bg-gradient-to-r to-red-500 via-orange-400 from-green-500' />
                        </div>
                        <div className='flex flex-col gap-3 items-center'>
                            <p className='text-gray-500'>Today's High</p>
                            <p className='text-gray-500 font-semibold'>46,930.22</p>
                        </div>
                    </div>
                </div>
            </section>
            <Fundamentals />
        </Section>
    )
}

export default Performance