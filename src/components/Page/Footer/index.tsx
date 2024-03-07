import React from 'react'
import Recomends from './Recomends'
import Section from '@/components/common/Page_Section'

function Footer() {
    return (
        <Section>
            <Section.Heading>You May Also Like</Section.Heading>
            <Recomends />
            <Section.Heading>Trending Coins</Section.Heading>
            <Recomends />
        </Section>
    )
}

export default Footer