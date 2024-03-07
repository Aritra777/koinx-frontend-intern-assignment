import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface RecomendCardProps {
    CoinId: string
    CoinLogo: string
    CoinSymbol: string
    CoinMarketChange: number
    CurrentPrice: string
    SparkLine: string
}

function RecomendCard({ CoinId, CoinLogo, CoinSymbol, CoinMarketChange, CurrentPrice, SparkLine }: RecomendCardProps) {
    return (
        <Link href={CoinId} className='w-[90%] max-w-[200px] flex flex-col gap-3 p-3 mx-3 rounded-primary border border-slate-200 hover:scale-105 transition-all overflow-hidden'>
            <div className='flex items-center gap-2'>
                <Image src={CoinLogo} alt={CoinSymbol} width={20} height={20} className='rounded-full' />
                <span className='font-semibold'>{CoinSymbol}</span>
                <p className='p-1 h-fit rounded-md text-xs flex gap-1 items-center bg-green-50 text-green-500'>{CoinMarketChange?.toLocaleString()}%</p>
            </div>
            <div className='font-semibold text-lg whitespace-nowrap'>{CurrentPrice}</div>
            <div className='flex gap-3 items-center justify-center'>
                <Image src={SparkLine} alt={CoinSymbol} width={150} height={20} className='' />
            </div>
        </Link>
    )
}

export default RecomendCard