"use client"
import React, { useEffect } from "react";
import { useState } from "react";

type Props ={
    price:number;
    id:number;
    options?: {title: string; additionalPrice: number}[]
}

const Price = ({price,id,options}: Props) =>{
    const[total,setTotal]= useState(price);
    const[quantity,setQuantity]= useState(1);
    const[selected,setSelected]= useState(0);

    useEffect(()=>{
        setTotal(quantity * (options ? price+options[selected].additionalPrice : price))
    },[quantity,selected, options,price])

    return(
        <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold">€{total.toFixed(2)}</span>
            {/*  options container  */}
            <div className="flex gap-4">
                {options?.map((option, index) =>(
                    <button key={option.title} className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
                    style={{background: selected === index ? "rgb(248 113 113)" : "white",
                    color: selected === index ? "white" : "rgb(248 113 113)"
                    }}
                    onClick={()=>setSelected(index)}
                    >
                        {option.title}</button>
                ))}
            </div>
            {/*  quantity and add button container  */}
            <div className="flex justify-between items-center">
                <div className="flex justify-between w-full p-3 ring-1 ring-red-400">
                    <span>Quantité</span>
                    <div className="flex gap-4 items-center">
                        <button onClick={()=> setQuantity(prev=>(prev>1 ? prev-1 : 1))}>{'<'}</button>
                        <span>{quantity}</span>
                        <button onClick={()=> setQuantity(prev=>(prev<9 ? prev+1 : 9))}>{'>'}</button>
                    </div>
                </div>
                <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-400">Ajouter</button>
            </div>
        </div>
    )
}

export default Price