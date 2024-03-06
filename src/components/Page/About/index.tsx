import Section from '@/components/common/Page_Section'
import React from 'react'
import Brief from './Brief'
import Promo from './Promo'

function About() {
    return (
        <Section>
            <Section.Heading>About</Section.Heading>
            <Brief />
            <Promo />
        </Section>
    )
}

export default About