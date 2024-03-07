import { ChevronUp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface HeroHeaderProps {
    CoinName: string
    CoinSymbol: string
    CoinImg: string
    CoinMarketPriceUSD: number
    CoinMarketPriceINR: number
    CoinMarketChange: number
    MarketCapRank: number
}


function HeroHeader({ CoinImg, CoinName, CoinSymbol, CoinMarketPriceINR, CoinMarketPriceUSD, CoinMarketChange, MarketCapRank }: HeroHeaderProps) {
    return (
        <>
            <header className='flex  gap-3 items-center'>
                <Image src={CoinImg || "/"} alt={CoinName} width={40} height={40} className='rounded-full' />
                <div className='flex gap-2 items-center'>
                    <span className='text-xl font-bold'>{CoinName}</span>
                    <span className='text-gray-500 text-sm uppercase font-semibold'>{CoinSymbol}</span>
                </div>
                <div className='bg-gray-400 text-white p-2 rounded-md'>Rank # {MarketCapRank}</div>
            </header>
            <div className='flex gap-6 items-start'>
                <div>
                    <h1 className='text-3xl font-bold'>${CoinMarketPriceUSD?.toLocaleString()}</h1>
                    <p className='text-base'>₹{CoinMarketPriceINR?.toLocaleString()}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='p-1 h-fit rounded-md font-semibold flex gap-1 items-center bg-green-100 text-green-500'><ChevronUp size={15} />{CoinMarketChange?.toLocaleString()}%</p>
                    <p className='text-gray-500'>{`(24H)`}</p>
                </div>
            </div>
        </>
    )
}

export default HeroHeader