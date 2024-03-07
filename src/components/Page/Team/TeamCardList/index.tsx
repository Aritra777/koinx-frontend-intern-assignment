import Image from 'next/image'
import React from 'react'

interface ProfileCardProps {
    name: string
    role: string
    image: string
    desciption: string
}

const ProfileData: ProfileCardProps[] = [
    {
        name: 'John Doe',
        role: 'CEO',
        image: '/assets/Team/profile1.png',
        desciption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quisquam molestiae quod rem qui earum dicta placeat, voluptate maxime in iure? Eius, minus non quae culpa sed placeat suscipit provident.'
    },
    {
        name: 'Jane Doe',
        role: 'CTO',
        image: '/assets/Team/profile2.png',
        desciption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quisquam molestiae quod rem qui earum dicta placeat, voluptate maxime in iure? Eius, minus non quae culpa sed placeat suscipit provident.'
    },
    {
        name: 'John Doe',
        role: 'CEO',
        image: '/assets/Team/profile3.png',
        desciption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quisquam molestiae quod rem qui earum dicta placeat, voluptate maxime in iure? Eius, minus non quae culpa sed placeat suscipit provident.'
    }
]

const TeamCard = ({ name, role, image, desciption }: ProfileCardProps) => {
    return (
        <div>
            <div className='flex flex-col md:flex-row md:items-center gap-4 p-3 bg-blue-100 rounded-primary'>
                <div className='md:basis-1/6 flex flex-col justify-center items-center  gap-1'>
                    <Image src={image} alt={name} height={100} width={100} className='rounded-primary' />
                    <h3 className='text-xl md:text-base font-bold text-balance'>{name}</h3>
                    <p className='text-gray-500 text-sm font-semibold'>{role}</p>
                </div>
                <p className='md:flex-1'>{desciption}</p>
            </div>
        </div>
    )
}

function TeamCardList() {
    return (
        <div className='grid grid-flow-row gap-6'>
            {
                ProfileData.map((profile, index) => (
                    <TeamCard key={index} name={profile.name} role={profile.role} image={profile.image} desciption={profile.desciption} />
                ))
            }
        </div>
    )
}

export default TeamCardList