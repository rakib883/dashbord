import React, { useState } from 'react'
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Sidebar from './SideBar';

const MobileMenu = () => {
 const [open,setOpen] = useState(true)
 console.log(open)
  return (
    <div className="relative">
        <div className="main">
            <div className="icon-area mx-4 flex justify-between items-center">
                <div className="icin flex items-center gap-2 ">
                    <div className="image">
                        <img className="xxs:h-[30px] xs:h-[40px]" src="https://themesflat.co/html/remos/images/logo/logo@2x.png" alt="" />
                    </div>
                    <div onClick={()=>setOpen(false)} className=" cursor-pointer z-10 ">
                      <HiMiniBars3 />
                    </div>
                </div>
                <div className="">
                    <img className="h-[20px]" src="https://i.ibb.co.com/jw6T619/icons8-gear.gif" alt="" />
                </div>
            </div>
        </div>

        <div className={`${open ? "right-[400px]" : " right-0" } main-content-area absolute top-[-8px] w-full  `}>
            <div className="item bg-white h-screen w-[50%] mt-[44px] overflow-x-auto">
                {/* mobile header area here */}
                <div className=" flex justify-between items-center p-2 ">
                    <div className="icon"></div>
                    <div onClick={()=>setOpen(true)} className={`${!open && "right-0"} transition-all duration-500 cursor-pointer border shadow-2xl`}>
                      <RxCross2 className="text-xl" />
                    </div>
                </div>
                 <div className="menu">
                    <Sidebar/>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default MobileMenu