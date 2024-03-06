"use client"
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
            <Menubar model={items} pt={{
                root: {
                    className: 'justify-end bg-white rounded-none',
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