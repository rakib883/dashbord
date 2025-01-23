import React, { useState } from 'react'
import { MdCheck } from "react-icons/md";

const PosetionButton = ({right,setRight}) => {
 
  return (
    <div className="flex gap-4 items-center">
        <div onClick={()=>setRight(1)} className={` ${right===1 ? "bg-[#2377fc] text-white": " bg-[#f0f5f9] text-black " } flex items-center cursor-pointer  gap-2 p-[6px]  rounded-full`}>
            <p className="bg-white  rounded-full p-1"><MdCheck /></p>
            <p className="pr-2 font-semibold">Left to right</p>
        </div>
        <div onClick={()=>setRight(2)} className={` ${right===2 ? "bg-[#2377fc] text-white" : " bg-[#f0f5f9] text-black " } flex items-center cursor-pointer  gap-2 p-[6px]  rounded-full`}>
            <p className="bg-white rounded-full p-1 "><MdCheck /></p>
            <p className="pr-2  font-semibold">Right to left</p>
        </div>
    </div>
  )
}

export default PosetionButton