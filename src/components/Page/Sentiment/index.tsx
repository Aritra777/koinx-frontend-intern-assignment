import React from 'react'
import KeyEvents from './KeyEvents'
import Estimates from './Estimates'
import Section from '@/components/common/Page_Section'

function Sentiment() {
    return (
        <Section id='sentiments'>
            <Section.Heading>Sentiment</Section.Heading>
            <KeyEvents />
            <Estimates />
        </Section>
    )
}

export default Sentiment