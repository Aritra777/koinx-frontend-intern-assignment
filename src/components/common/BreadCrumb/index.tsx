import { ChevronsRight } from 'lucide-react'
import React from 'react'

function BreadCrumb({ route }: { route: string }) {
    return <div className='text-base text-gray-500 flex gap-3 items-center py-4'>
        <span>Cryptocurrencies</span>
        <span><ChevronsRight size={18} /></span>
        <span className='capitalize text-black'>{route}</span>
    </div>
}

export default BreadCrumb