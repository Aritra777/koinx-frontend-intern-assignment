import React from 'react'

function Section({ children }: { children?: React.ReactNode }) {
    return (
        <section className='space-y-6 border border-surface p-3 py-5 rounded-primary bg-white'>
            {children || <></>}
        </section>
    )
}

Section.Heading = ({ children }: { children?: React.ReactNode }) => (
    <h2 className='text-2xl font-semibold'>{children}</h2>
)

export default Section