'use client'
import Section from '@/components/common/Page_Section'
import React from 'react'
import MainTradeGraph from './MainTradeGraph'
import { Badge } from 'primereact/badge';
import { useGetCoinDetails } from '@/lib/Api/FetchCoinDetails';
import Image from 'next/image';
import { ChevronUp, Divide } from 'lucide-react';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import HeroHeader from './HeroHeader';
import TradeGraph from './TradeGraph';

const initialData = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
    { "time": "2019-01-01", "value": 25.47 },
    { "time": "2019-01-02", "value": 24.86 },
    { "time": "2019-01-03", "value": 29.12 },
    { "time": "2019-01-04", "value": 28.06 },
    { "time": "2019-01-05", "value": 27.27 },
    { "time": "2019-01-06", "value": 21.63 },
    { "time": "2019-01-07", "value": 24.38 },
    { "time": "2019-01-08", "value": 22.87 },
    { "time": "2019-01-09", "value": 29.89 },
    { "time": "2019-01-10", "value": 23.74 }
];

function Hero({ coinid }: { coinid: string }) {
    const { data: CoinData, isLoading, isError } = useGetCoinDetails(coinid)
    console.log(CoinData)
    if (isLoading) return <div>Loading...</div>
    if (isError) return (
        <div>Error</div>
    )
    return (
        <Section>
            <HeroHeader
                CoinImg={CoinData?.image?.small}
                CoinName={CoinData?.name}
                CoinSymbol={CoinData?.symbol}
                CoinMarketPriceUSD={CoinData?.market_data?.current_price?.usd}
                CoinMarketPriceINR={CoinData?.market_data?.current_price?.inr}
                CoinMarketChange={CoinData?.market_data?.price_change_percentage_24h_in_currency?.usd}
            />
            <Divider />
            <TradeGraph CoinName={CoinData?.name} />
            <MainTradeGraph data={initialData} />
        </Section>
    )
}

export default Hero