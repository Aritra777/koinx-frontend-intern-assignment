import { ArrowRight, MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'primereact/button'
import React from 'react'

const PrompCards = [
    {
        img: '/assets/PromoImgs/promo1.png',
        title: 'Calculate your Profits',
        btnLink: '/#',
        grediant: 'from-green-400 to-blue-400'
    },
    {
        img: '/assets/PromoImgs/promo2.png',
        title: 'Calculate your tax liability',
        btnLink: '/#',
        grediant: 'from-orange-200 via-orange-400 to-red-500'
    },
]

function Promo() {
    return (
        <div className='space-y-3'>
            <h3 className='text-lg font-bold'>Already Holding Crypto?</h3>
            <div className='w-full flex flex-col md:flex-row gap-6'>
                {
                    PrompCards.map((card, index) => (
                        <div key={index} className={`flex gap-3 p-3 relative rounded-primary bg-gradient-to-br ${card.grediant}`}>
                            <Image src={card.img} alt={card.title} height={150} width={150} />
                            <div className='flex flex-col gap-3 p-6'>
                                <h3 className='text-2xl font-bold text-white text-balance'>{card.title}</h3>
                                <Button className='py-2 w-fit bg-white text-black font-semibold rounded-primary' icon={<ArrowRight size={18} />} iconPos='right' label='Check Now' ></Button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Promo