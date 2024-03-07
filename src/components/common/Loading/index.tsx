import React from 'react'
import Section from '../Page_Section'
import { ProgressSpinner } from 'primereact/progressspinner'

function Loading() {
    return (
        <Section>
            <div className='w-full text-center'>
                <ProgressSpinner className='w-12 h-12' strokeWidth='5' />
            </div>
        </Section>
    )
}

export default Loading