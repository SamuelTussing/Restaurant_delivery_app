"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const data = [
    {
        id:1,
        title:"Toujours frais et délicieux !",
        image:"/slide1.png",
    },
    {
        id:2,
        title:"Livraison dans toute la ville wouhouuu !!",
        image:"/slide2.png",
    },
    {
        id:3,
        title:"Goûtez à l'Italie !",
        image:"/slide3.jpg",
    },
]

const Slider = () => {

    // useState défini l'index de l'image
    const [currentSlide, setcurrentSlide] = useState(0);


    //on change d'image et de texte en fonction d'un interval avec useeffect
    useEffect(() =>{
        const interval = setInterval(
            ()=>setcurrentSlide((prev)=>(prev === data.length-1 ? 0 : prev+1)),
        4000
        );
        return ()=> clearInterval(interval);
    },[]);

    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
            {/* text container*/}
            <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full lg:w-1/2">
                <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
                    {data[currentSlide].title}</h1>
                <button className='bg-red-500 text-white py-4 px-8'>
                    Commander !
                    </button>
            </div>
            {/* image container*/}
            <div className="w-full h-1/2 relative lg:h-full lg:w-1/2">
                <Image src={data[currentSlide].image} alt="{data[currentSlide].title}" fill className='object-cover'/>
            </div>
        </div>
    )
}
export default Slider