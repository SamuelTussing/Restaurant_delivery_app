import React from 'react'
import Image from 'next/image'
import CountDown from './Countdown'

const Offer = () => {
    return (
        <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
            {/* text container */}
            <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
                <h1 className='text-white text-5xl font-bold xl:text-6xl'>Des frites maison et un généreux burger</h1>
                <p className='text-white xl:text-xl'>Découvrez notre offre spéciale, quand Italie et les Etats-Unis se rencontrent.</p>
                <CountDown/>
                <button className='bg-red-500 text-white rounded-md py-3 px-6'>Commander</button>
            </div>
            {/* image container */}
            <div className='flex-1 w-full relative md:h-full'>
                <Image src="/offerProduct.png" alt="" fill className='object-contain'/>
            </div>
        </div>
    )
}
export default Offer