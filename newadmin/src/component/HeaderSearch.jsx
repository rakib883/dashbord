import React from 'react'
import { HiBars3CenterLeft } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { RiMenuUnfold3Line } from "react-icons/ri";

const HeaderSearch = ({ navbar, setNavbar}) => {
    
  return (
    <div className="searc flex gap-4 justify-center items-center flex-1 py-2">
        <div onClick={() => setNavbar(true)} className={`${navbar && "hidden" } search-area py-2`}>
            <RiMenuUnfold3Line className=" text-3xl cursor-pointer text-[#2e7dfc]" />      
        </div> 
        <div className="inp w-full relative">
          <input className=" w-full outline-none border-[1px] rounded-md px-2.5 py-2" type="text" placeholder="search...." />
            <div className="icon top-3 absolute right-3 cursor-pointer">
            <LuSearch className=" text-xl hover:text-[#2e7dfc] duration-300" />
            </div>
        </div>   
  </div> 
  )
}

export default HeaderSearch