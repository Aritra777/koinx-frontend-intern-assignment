import { InfoIcon } from 'lucide-react'
import React from 'react'

function SectionHeading({ Heading }: { Heading: string }) {
    return (
        <h3 className='flex gap-3 items-center'>
            <span className='text-xl text-gray-600 font-semibold'>{Heading}</span>
            <span><InfoIcon className='text-white' fill='#ABB9BF' /></span>
        </h3>
    )
}

export default SectionHeading