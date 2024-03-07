import Loading from '@/components/common/Loading';
import Section from '@/components/common/Page_Section';
import { useGetTrendingCoins } from '@/lib/Api/FetchTrending';
import Image from 'next/image';
import React from 'react'

const ChangePercentage = ({ change }: { change: number }) => {
    const color = change > 0 ? "bg-green-50 text-green-500" : "bg-red-50 text-red-500";
    return (
        <div className={`${color} rounded-md h-fit`}>
            <p className="text-sm p-1">{change.toFixed(2)}%</p>
        </div>
    )
}

function TrendingCoins() {
    const { data: TrendingCoinData, isSuccess: TrendingSuccess, isLoading } = useGetTrendingCoins();

    if (isLoading) return <Loading />
    return (
        <Section>
            <Section.Heading>{`Trending Coins (24h)`}</Section.Heading>
            <ul className="space-y-3">
                {
                    TrendingSuccess && TrendingCoinData?.coins?.splice(0, 3)?.map((coin: any, index: any) => {
                        const { item } = coin;
                        return (
                            <li key={index} className=" w-full flex justify-between items-center">
                                <div className="flex gap-3 items-center">
                                    <Image src={item.large} alt={item.name} height={50} width={50} className="rounded-full" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-lg font-bold">{item.name}</p>
                                        <p className="text-sm">{item.symbol}</p>
                                    </div>
                                </div>
                                <ChangePercentage change={item.data?.price_change_percentage_24h?.usd} />
                            </li>
                        )
                    })
                }
            </ul>
        </Section>
    )
}

export default TrendingCoins