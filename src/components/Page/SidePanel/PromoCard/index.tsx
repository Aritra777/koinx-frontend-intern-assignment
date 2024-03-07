import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from 'primereact/button'
import React from 'react'

function PromoCard() {
    return (
        <div className="p-6 xl:px-12 px-8 flex flex-col justify-center items-center gap-6 text-white rounded-primary bg-koinx-blue">
            <p className="text-2xl font-bold text-center">Get Started with KoinX for FREE</p>
            <p className="text-sm text-center px-6">With our range of features that you can equip for free,
                KoinX allows you to be more educated and aware of your tax reports.</p>
            <Image src={"/assets/Frame.png"} alt="add" height={180} width={180} className="rounded-primary" />
            <Button className='bg-white text-black py-2 px-3 rounded-lg w-fit mx-auto ' >
                Get Started for FREE
                <ArrowRight size={18} />
            </Button>
        </div>
    )
}

export default PromoCard