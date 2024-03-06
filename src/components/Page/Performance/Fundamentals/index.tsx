import SectionHeading from '@/components/common/Section_Heading'
import { InfoIcon } from 'lucide-react'
import { MenuItem } from 'primereact/menuitem'
import React from 'react'

interface FundamentalsListType {
    label: string
    value: string | React.JSX.Element
}
const FundamentalsList: FundamentalsListType[] = [
    {
        label: 'Bitcoin Price',
        value: '$16,815.46'
    },
    {
        label: '24h Low / 24h High',
        value: '$16,382.07 / $16,874.12'
    },
    {
        label: '7d Low / 7d High',
        value: '$16,382.07 / $16,874.12'
    },
    {
        label: 'Trading Volume',
        value: '$23,249,202,782'
    },
    {
        label: 'Market Cap Rank',
        value: ''
    },
    {
        label: 'Market Cap',
        value: '$323,507,290,047'
    },
    {
        label: 'Market Cap Dominance',
        value: '38.343%'
    },
    {
        label: 'Volume / Market Cap',
        value: '0.0718'
    },
    {
        label: 'All-Time High',
        value: (
            <div className='flex flex-col items-end'>
                <div className='flex gap-1 items-center font-semibold'>
                    <span className=''>$69,044.77</span>
                    <span className='text-red-500'>-75.6%</span>
                </div>
                <p className='text-sm'>{`Nov 10, 2021 (about 1 year)`}</p>
            </div>
        )
    },
    {
        label: 'All-Time Low',
        value: (
            <div className='flex flex-col items-end'>
                <div className='flex gap-1 items-center font-semibold'>
                    <span className=''>$67.81</span>
                    <span className='text-green-500'>24729.1%</span>
                </div>
                <p className='text-sm'>{`Jul 06, 2013 (over 9 years)`}</p>
            </div>
        )
    },

]

function Fundamentals() {
    return (
        <section>
            <SectionHeading Heading='Fundamentals' />
            <div>
                <ul className='w-full'>
                    {FundamentalsList.map((item, index) => (
                        <li key={index} className='flex gap-3 justify-between items-center w-full py-3 border-b border-slate-200'>
                            <span className='text-gray-500'>{item.label}</span>
                            {
                                typeof item.value === 'string' ? <span className='text-gray-500 font-semibold'>{item.value}</span> : item.value
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Fundamentals