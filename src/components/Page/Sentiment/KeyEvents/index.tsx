'use client'
import SectionHeading from '@/components/common/Section_Heading'
import { ArrowBigDown, LineChart, Newspaper } from 'lucide-react'
import { Carousel } from 'primereact/carousel'
import React, { useMemo } from 'react'

interface CardType {
    color: string
    title: string
    description: string
    icon: () => React.ReactNode
}

const Card = ({ color, title, description, icon }: CardType) => {
    return (
        <div className='flex gap-3 p-4 rounded-primary' style={{ backgroundColor: color || "#fff" }}>
            <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-100'>
                {icon()}
            </div>
            <div>
                <h4 className='text-md font-semibold'>{title}</h4>
                <p className='text-sm text-gray-500'>{description}</p>
            </div>
        </div>
    )
}

const KeyEventCardsData: CardType[] = [
    {
        color: "#E8F4FD",
        title: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim ',
        description: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.',
        icon: () => (
            <div className='w-10 h-10 grid place-content-center rounded-full bg-koinx-blue'><Newspaper color='#fff' /></div>
        )
    },
    {
        color: "#EBF9F4",
        title: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim ',
        description: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.',
        icon: () => (
            <div className='w-10 h-10 grid place-content-center rounded-full bg-green-500'><LineChart color='#fff' /></div>
        )
    }
]


function KeyEvents() {
    return (
        <section className='max-w-full'>
            <SectionHeading Heading='Key Events' />
            <Carousel
                value={KeyEventCardsData}
                numVisible={1}
                numScroll={1}
                itemTemplate={Card}
                autoplayInterval={3000}
                className='mt-3'
                pt={{
                    root: {
                        className: 'max-w-full overflow-hidden'
                    },
                    indicatorButton: {
                        className: 'hidden'
                    }
                }}
            />
        </section>
    )
}

export default KeyEvents