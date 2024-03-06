import { Button } from 'primereact/button'
import { classNames } from 'primereact/utils'
import React from 'react'
const DataTimes = [
    {
        label: "1D",
        value: "1D"
    },
    {
        label: "7D",
        value: "7D"
    },
    {
        label: "1M",
        value: "1M"
    },
    {
        label: "3M",
        value: "3M"
    },
    {
        label: "6M",
        value: "6M"
    },
    {
        label: "1Y",
        value: "1Y"
    },
    {
        label: "ALL",
        value: "ALL"
    }
]
function TradeGraph({ CoinName }: { CoinName: string }) {
    const [SelectedTime, setSelectedTime] = React.useState('1D')
    return (
        <div className='flex flex-wrap gap-x-6 gap-y-3'>
            <p className='text-xl font-semibold'>{CoinName} Price Chart (USD)</p>
            <div className='space-x-2'>
                {DataTimes.map((item, index) => (
                    <Button key={index} label={item.label} unstyled className={classNames('px-1 font-semibold', {
                        'bg-blue-100 text-blue-500 rounded-xl': SelectedTime === item.value,
                        'text-gray-500': SelectedTime !== item.value
                    })} onClick={() => setSelectedTime(item.value)} />
                ))}
            </div>
        </div>
    )
}

export default TradeGraph