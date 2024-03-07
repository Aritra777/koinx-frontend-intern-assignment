import React from 'react'
import Recomends from './Recomends'
import Section from '@/components/common/Page_Section'

function Footer() {
    return (
        <Section className='mt-6'>
            <Section.Heading>You May Also Like</Section.Heading>
            <Recomends interval={3000} />
            <Section.Heading>Trending Coins</Section.Heading>
            <Recomends interval={4000} />
        </Section>
    )
}

export default Footer