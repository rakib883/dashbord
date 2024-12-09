import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";

const Password = ({title,placeholder}) => {
    const [password,setPassword] = useState(false)
  return (
    <div className="main">
        <p className="font-medium text-[16px]">{title}</p>
        <div className="input mt-2 relative">
            <input className="w-full outline-none border py-3 px-4 rounded-lg" type={password ? "text" : "password"} placeholder={placeholder} />
            <IoEyeOutline onClick={()=>setPassword(!password)} className="absolute right-2 top-4 cursor-pointer text-[#e6e8ec]" />
        </div>
    </div>
  )
}

export default Password