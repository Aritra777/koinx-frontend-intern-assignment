import Section from '@/components/common/Page_Section'
import React from 'react'
import TeamCardList from './TeamCardList'

function AboutTeam() {
    return (
        <Section id='team'>
            <Section.Heading>Team</Section.Heading>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quisquam molestiae quod rem qui earum dicta placeat, voluptate maxime in iure? Eius, minus non quae culpa sed placeat suscipit provident.</p>
            <TeamCardList />
        </Section>
    )
}

export default AboutTeam