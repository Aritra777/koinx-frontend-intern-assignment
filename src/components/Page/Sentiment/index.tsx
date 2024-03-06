import React from 'react'
import KeyEvents from './KeyEvents'
import Estimates from './Estimates'
import Fundamentals from '../Performance/Fundamentals'
import Section from '@/components/common/Page_Section'

function Sentiment() {
    return (
        <Section>
            <h2 className='text-2xl font-semibold'>Sentiment</h2>
            <KeyEvents />
            <Estimates />
        </Section>
    )
}

export default Sentiment