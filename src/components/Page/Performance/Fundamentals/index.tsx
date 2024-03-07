import SectionHeading from '@/components/common/Section_Heading'
import { useHome } from '@/lib/Context/HomeContext'
import FormatDate from '@/utils/FormatDate'
import React, { useMemo } from 'react'

interface FundamentalsListType {
    label: string
    value: string | React.JSX.Element
}

function Fundamentals() {
    const { CoinData } = useHome()
    const market_data = CoinData?.market_data

    if (!market_data) return null

    const SevenDLow = market_data?.current_price?.usd - (market_data?.current_price?.usd * (market_data?.price_change_percentage_7d_in_currency?.usd / 100))
    const SevenDHigh = market_data?.current_price?.usd + (market_data?.current_price?.usd * (market_data?.price_change_percentage_7d_in_currency?.usd / 100))

    const FundamentalsList: FundamentalsListType[] = useMemo(() => ([
        {
            label: `${CoinData?.name} Price`,
            value: `$${market_data?.current_price?.usd}`
        },
        {
            label: '24h Low / 24h High',
            value: `$${market_data?.low_24h?.usd} / $${market_data?.high_24h?.usd}`
        },
        {
            label: '7d Low / 7d High',
            value: `$${SevenDLow?.toFixed(4)} / $${SevenDHigh?.toFixed(4)}`
        },
        {
            label: 'Trading Volume',
            value: `$${market_data?.total_volume?.usd}`
        },
        {
            label: 'Market Cap Rank',
            value: `${market_data?.market_cap_rank}`
        },
        {
            label: 'Market Cap',
            value: `$${market_data?.market_cap?.usd}`
        },
        {
            label: 'Market Cap Dominance',
            value: `${market_data?.market_cap_change_percentage_24h_in_currency?.usd?.toFixed(4)}%`
        },
        {
            label: 'Volume / Market Cap',
            value: `${(market_data?.total_volume?.usd / market_data?.market_cap?.usd)?.toFixed(4)}`
        },
        {
            label: 'All-Time High',
            value: (
                <div className='flex flex-col items-end'>
                    <div className='flex gap-1 items-center font-semibold'>
                        <span className=''>${market_data?.ath?.usd}</span>
                        <span className='text-red-500'>{market_data?.ath_change_percentage?.usd?.toFixed(2)}%</span>
                    </div>
                    <p className='text-sm'>{FormatDate(market_data?.ath_date?.usd)}</p>
                </div>
            )
        },
        {
            label: 'All-Time Low',
            value: (
                <div className='flex flex-col items-end'>
                    <div className='flex gap-1 items-center font-semibold'>
                        <span className=''>${market_data?.atl?.usd}</span>
                        <span className='text-green-500'>{market_data?.atl_change_percentage?.usd?.toFixed(2)}%</span>
                    </div>
                    <p className='text-sm'>{FormatDate(market_data?.atl_date?.usd)}</p>
                </div>
            )
        },
    ]), [Object.keys(market_data).length])
    return (
        <section id='fundamentals'>
            <SectionHeading Heading='Fundamentals' />
            <div>
                <ul className='w-full md:grid md:grid-cols-2 md:gap-6'>
                    <div>

                        {
                            // devide fundamentals list into two columns
                            FundamentalsList.slice(0, 5).map((item, index) => (
                                <li key={index} className='h-16 flex gap-3 justify-between items-center w-full border-b border-slate-200'>
                                    <span className='text-gray-500'>{item.label}</span>
                                    {
                                        typeof item.value === 'string' ? <span className='text-gray-500 font-semibold'>{item.value}</span> : item.value
                                    }
                                </li>
                            ))
                        }
                    </div>
                    <div>
                        {
                            // devide fundamentals list into two columns
                            FundamentalsList.slice(5, 10).map((item, index) => (
                                <li key={index} className='h-16 flex gap-3 justify-between items-center w-full border-b border-slate-200'>
                                    <span className='text-gray-500'>{item.label}</span>
                                    {
                                        typeof item.value === 'string' ? <span className='text-gray-500 font-semibold'>{item.value}</span> : item.value
                                    }
                                </li>
                            ))
                        }
                    </div>
                </ul>
            </div>
        </section>
    )
}

export default Fundamentals