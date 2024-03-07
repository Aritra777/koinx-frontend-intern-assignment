import React from 'react'
import PromoCard from './PromoCard'
import TrendingCoins from './TrendingCoins'

function SidePanel() {
    return (
        <div className='space-y-6'>
            <PromoCard />
            <TrendingCoins />
        </div>
    )
}

export default SidePanel