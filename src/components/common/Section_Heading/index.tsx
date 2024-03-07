import { InfoIcon } from 'lucide-react'
import { Button } from 'primereact/button'
import { Tooltip } from 'primereact/tooltip'
import React from 'react'

function SectionHeading({ Heading }: { Heading: string }) {
    return (
        <h3 className='flex gap-3 items-center'>
            <span className='text-xl text-gray-600 font-semibold'>{Heading}</span>
            <span id='info'><InfoIcon className='text-white' fill='#ABB9BF' /></span>
            <Tooltip target='#info' position='top' content='More Info' />
        </h3>
    )
}

export default SectionHeading