'use client';
import { useGetTrendingCoins } from '@/lib/Api/FetchTrending'
import { Carousel } from 'primereact/carousel'
import React from 'react'
import RecomendCard from '../RecomendCard.tsx'

function Recomends() {
    const { data: TrendingCoinData, isLoading, isError } = useGetTrendingCoins()
    console.log(TrendingCoinData)

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    return (
        <div className=''>
            <Carousel
                value={TrendingCoinData?.coins}
                itemTemplate={(coin: any) => {
                    return <RecomendCard
                        key={coin.item.id}
                        CoinId={coin.item.slug}
                        CoinLogo={coin.item.large}
                        CoinSymbol={coin.item.symbol}
                        CoinMarketChange={coin.item.data?.price_change_percentage_24h?.usd}
                        CurrentPrice={coin.item.data.price}
                        SparkLine={coin.item.data.sparkline}
                    />
                }}
                numVisible={3}
                numScroll={1}
                autoplayInterval={3000}
                responsiveOptions={[
                    {
                        breakpoint: '1024px',
                        numVisible: 1.5,
                        numScroll: 1
                    }
                ]}
                pt={{
                    indicator: {
                        className: 'hidden'
                    },
                    item: {
                        className: 'visible'
                    }
                }}
            />
        </div>
    )
}

export default Recomends