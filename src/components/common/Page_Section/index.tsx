import { classNames } from 'primereact/utils'
import React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
}
function Section({ children, ...props }: SectionProps) {
    const { className: cn, ...etc } = props
    return (
        <section className={classNames('space-y-6 border border-surface p-3 py-5 rounded-primary bg-white', cn)} {...etc}>
            {children || <></>}
        </section>
    )
}

Section.Heading = ({ children }: { children?: React.ReactNode }) => (
    <h2 className='text-2xl font-semibold'>{children}</h2>
)

export default Section