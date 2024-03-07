"use client"
import Image from 'next/image'
import { Button } from 'primereact/button'
import { Menubar } from 'primereact/menubar'
import { MenuItem } from 'primereact/menuitem'
import React from 'react'

const items: MenuItem[] = [
    {
        label: 'Crypto Taxes',
    },
    {
        label: 'Free Tools'
    },
    {
        label: 'Resource Center'
    },
    {
        template: () => {
            return (
                <div className='px-5'>
                    <Button label="Get Started" className='bg-koinx-blue py-2 rounded-lg' />
                </div>
            )
        }
    }
]

function NavBar() {
    return (
        <div className=''>
            <Menubar model={items}
                start={<Image src="/assets/main_logo.png" alt="KoinX" height={50} width={100} />}
                pt={{
                    root: {
                        className: 'justify-between bg-white rounded-none max-w-maxScreen mx-auto border-none',
                    },
                    popupIcon: {
                        className: 'shadow-none focus:shadow-none',
                    },
                    button: {
                        className: 'shadow-none focus:shadow-none',
                    },
                    menuitem: {
                        className: "text-black font-semibold"
                    }
                }} />
        </div>
    )
}

export default NavBar