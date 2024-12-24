import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { twMerge } from 'tailwind-merge';

const Password = ({title,placeholder,className}) => {
    const [password,setPassword] = useState(false)
  return (
    <div className="main">
        <p className={twMerge(`font-medium text-[16px]`,className)}>{title}</p>
        <div className="input mt-2 relative">
            <input className="w-full outline-none border py-3 px-4 rounded-lg" type={password ? "text" : "password"} placeholder={placeholder} />
            <IoEyeOutline onClick={()=>setPassword(!password)} className="absolute right-2 top-4 cursor-pointer text-[#e6e8ec]" />
        </div>
    </div>
  )
}

export default Password