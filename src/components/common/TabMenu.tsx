'use client'
import { MenuItem } from 'primereact/menuitem'
import { TabMenu } from 'primereact/tabmenu'
import { classNames } from 'primereact/utils'
import React from 'react'

const items: MenuItem[] = [
    { label: 'Overview' },
    { label: 'Fundamentals' },
    { label: 'News Insights' },
    { label: 'Sentiments' },
    { label: 'Team' },
    { label: 'Technicals' },
    { label: 'Tokenomics' },
]

function TabMenuComp() {
    const [activeIndex, setActiveIndex] = React.useState(0)
    return (
        <TabMenu model={items} className='' pt={{
            root: {
                className: ""
            },
            menu: {
                className: 'bg-transparent border-b border-surface',
            },
            action: ({ context, parent }: { context: any, parent: any }) => ({
                className: classNames("text-black font-normal p-3 border-b border-surface whitespace-nowrap", // Base styles.
                    {
                        'border-gray-300 bg-transparent text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-600': activeIndex !== context.index, // Condition-based hover styles.
                        'bg-transparent border-blue-500 text-blue-500': activeIndex === context.index // Condition-based active styles.
                    }
                )
            })
        }} />
    )
}

export default TabMenuComp