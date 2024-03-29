'use client';
import { ChevronUp } from 'lucide-react'
import React from 'react'
import Fundamentals from './Fundamentals'
import Section from '@/components/common/Page_Section'
import { useGetCoinDetails } from '@/lib/Api/FetchCoinDetails'
import { queryClient } from '@/lib/Providers/Queryclient'
import { useHome } from '@/lib/Context/HomeContext';
import Loading from '@/components/common/Loading';

function Performance() {
    const { CoinData } = useHome()

    const market_data = CoinData?.market_data
    if (!market_data) return <Loading />

    return (
        <Section id='performance'>
            <section className='flex flex-col gap-3'>
                <h2 className='text-2xl font-semibold'>Performance</h2>
                <div className='flex flex-col gap-6'>

                    <div className='flex gap-3 items-center'>
                        <div className='flex flex-col gap-3 items-center'>
                            <p className='text-gray-500'>Today&apos;s Low</p>
                            <p className='text-gray-500 font-semibold'>${market_data?.low_24h?.usd}</p>
                        </div>
                        <div className='flex-1'>
                            <div className='relative h-1 w-full rounded-[999px] bg-gradient-to-r to-red-500 via-orange-400 from-green-500'>
                                <div className='absolute top-full right-[20%] flex flex-col items-center' >
                                    <ChevronUp size={15} />
                                    ${market_data?.current_price?.usd}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 items-center'>
                            <p className='text-gray-500'>Today&apos;s High</p>
                            <p className='text-gray-500 font-semibold'>${market_data?.high_24h?.usd}</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='flex flex-col gap-3 items-center'>
                            <p className='text-gray-500'>Today&apos;s Low</p>
                            <p className='text-gray-500 font-semibold'>${market_data?.low_24h?.usd}</p>
                        </div>
                        <div className='flex-1'>
                            <div className='relative h-1 w-full rounded-[999px] bg-gradient-to-r to-red-500 via-orange-400 from-green-500' />
                        </div>
                        <div className='flex flex-col gap-3 items-center'>
                            <p className='text-gray-500'>Today&apos;s High</p>
                            <p className='text-gray-500 font-semibold'>${market_data?.high_24h?.usd}</p>
                        </div>
                    </div>
                </div>
            </section>
            <Fundamentals />
        </Section>
    )
}

export default Performance