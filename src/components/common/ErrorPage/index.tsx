import React from 'react'
import Section from '../Page_Section'

function ErrorPage() {
    return (
        <Section>
            <div className='flex flex-col items-center justify-center h-[730px]'>
                <h1 className='text-4xl font-semibold text-gray-600'>Error 404</h1>
                <p className='text-lg font-semibold text-gray-500'>Page Not Found</p>
            </div>
        </Section>
    )
}

export default ErrorPage