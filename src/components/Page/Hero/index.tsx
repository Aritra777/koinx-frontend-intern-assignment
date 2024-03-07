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
import { ProgressSpinner } from 'primereact/progressspinner';
import Loading from '@/components/common/Loading';

function Hero({ coinid }: { coinid: string }) {
    const { data: CoinData, isLoading, isError } = useGetCoinDetails(coinid)
    if (isLoading) return <Loading />
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
                MarketCapRank={CoinData?.market_cap_rank}
            />
            <Divider />
            <TradeGraph CoinName={CoinData?.name} />
            <MainTradeGraph />
        </Section>
    )
}

export default Hero