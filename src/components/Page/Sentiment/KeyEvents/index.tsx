'use client'
import SectionHeading from '@/components/common/Section_Heading'
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
        <div className='min-w-[80vw] w-5/6 flex gap-3 p-4 rounded-primary' style={{ backgroundColor: color || "#fff" }}>
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#0082FF" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        )
    },
    {
        color: "#EBF9F4",
        title: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim ',
        description: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.',
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#0FBA83" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        )
    }
]


function KeyEvents() {
    return (
        <section className='space-y-3'>
            <SectionHeading Heading='Key Events' />
            <Carousel value={KeyEventCardsData} numVisible={3} numScroll={1} itemTemplate={Card} responsiveOptions={[
                {
                    breakpoint: '1024px',
                    numVisible: 2,
                    numScroll: 1
                },
                {
                    breakpoint: '768px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]} className=''
                pt={{
                    root: {
                        className: 'hidden md:flex'
                    },
                    indicatorButton: {
                        className: 'hidden'
                    },
                    previousButton: {
                        className: 'hidden md:flex'
                    },
                    nextButton: {
                        className: 'hidden md:flex'
                    }
                }}
            />
            <div className='md:hidden flex gap-3 overflow-x-auto'>
                {KeyEventCardsData.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>
        </section>
    )
}

export default KeyEvents