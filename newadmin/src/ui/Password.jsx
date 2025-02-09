import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { twMerge } from 'tailwind-merge';
import Title from './Title';

const Password = ({title,placeholder,className,name,value,onChange}) => {
    const [password,setPassword] = useState(false)
  return (
    <div className="main">
        <Title   title={title} />
        <div className="input mt-2 relative">
            <input onChange={onChange} name={name} value={value} className="w-full outline-none border md:py-3 md:px-4 xxs:py-1 xxs:px-2 rounded-lg xxs:placeholder:text-xs md:placeholder:text-base" type={password ? "text" : "password"} placeholder={placeholder} />
            <IoEyeOutline onClick={()=>setPassword(!password)} className="absolute right-2 md:top-4 xxs:top-2 cursor-pointer text-[#e6e8ec]" />
        </div>
    </div>
  )
}

export default Password