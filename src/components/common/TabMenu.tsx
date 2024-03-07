'use client'
import { MenuItem } from 'primereact/menuitem'
import { TabMenu } from 'primereact/tabmenu'
import { classNames } from 'primereact/utils'
import React from 'react'

const items: MenuItem[] = [
    {
        label: 'Overview',
        target: '#performance',
        command: () => {
            window.location.href = '#performance'
        }
    },
    {
        label: 'Fundamentals',
        target: '#fundamentals',
        command: () => {
            window.location.href = '#fundamentals'
        }
    },
    {
        label: 'News Insights',
        target: '#news-insights',
        command: () => {
            window.location.href = '#news-insights'
        }
    },
    {
        label: 'Sentiments',
        target: '#sentiments',
        command: () => {
            window.location.href = '#sentiments'
        }
    },
    {
        label: 'About',
        target: '#about',
        command: () => {
            window.location.href = '#about'
        }
    },
    {
        label: 'Team',
        target: '#team',
        command: () => {
            window.location.href = '#team'
        }
    },
    {
        label: 'Tokenomics',
        target: '#tokenomics',
        command: () => {
            window.location.href = '#tokenomics'
        }
    }
]

function TabMenuComp() {
    const [activeIndex, setActiveIndex] = React.useState(0)
    return (
        <TabMenu model={items}
            className=''
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
            pt={{
                root: {
                    className: "bg-transparent"
                },
                menu: {
                    className: "bg-transparent"
                },
                action: ({ context, parent }: { context: any, parent: any }) => ({
                    className: classNames('px-4 py-2 font-semibold whitespace-nowrap bg-transparent', {
                        'text-blue-500 border-blue-500 rounded-t-xl': context.index === activeIndex,
                        'text-gray-500': context.index !== activeIndex
                    }),
                })
            }} />
    )
}

export default TabMenuComp