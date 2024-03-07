'use client'
import Section from '@/components/common/Page_Section'
import React from 'react'
import { useGetCoinDetails } from '@/lib/Api/FetchCoinDetails';
import { Divider } from 'primereact/divider';
import HeroHeader from './HeroHeader';
import TradeGraph from './TradeGraph';
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
        </Section>
    )
}

export default Hero