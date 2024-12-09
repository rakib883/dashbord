import React, { useState } from 'react'
import { IoIosCheckmark } from "react-icons/io";
import Title from './Title';
const UserPermission = ({title}) => {
    const [allow,setAllow] = useState(1)
  return (
    <div>
        <div className="main">
            <div className="title">
                <Title className="text-[14px]" title={title} />
            </div>
            <div className=" flex gap-4 mt-1">
                <div onClick={()=>setAllow(1)} className={ `${allow === 1 ? "bg-[#2377fc]" : "bg-[#f0f5f9]"}  items-center rounded-full cursor-pointer`}>
                   <div className="item px-2 py-2 flex items-center gap-3">
                        <div className="icon bg-white rounded-full w-[25px] h-[25px] flex justify-center items-center">
                           <IoIosCheckmark className="text-2xl text-[#2377fc]" />
                        </div>
                        <p className={`${allow === 1 ? "text-white" : ""} font-medium text-[14px] `}>Allow</p>
                   </div>
                </div>
                <div onClick={()=>setAllow(2)} className={`${allow === 2 ? "bg-[#2377fc]" : "bg-[#f0f5f9]"}   items-center rounded-full cursor-pointer`}>
                   <div className="item px-2 py-2 flex items-center gap-3">
                        <div className="icon bg-white rounded-full w-[25px] h-[25px] flex justify-center items-center">
                           <IoIosCheckmark className="text-2xl text-[#2377fc]" />
                        </div>
                        <p className={`${ allow === 2 ? "text-white" : "text-black"} font-medium text-[14px]`}>Deny</p>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserPermission