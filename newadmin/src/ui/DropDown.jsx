import React from 'react'
import Title from './Title'
import { MdKeyboardArrowDown } from 'react-icons/md'

const DropDown = ({items,title}) => {
  return (
    <div className="catagpry relative ">
        <div className=" flex gap-2 items-center font-semibold text-black">
        <Title className="text-[14px]" title={title} /> 
        <span className="text-red-600 mt-1">*</span>  
        </div>
        <select className="border md:text-[14px] xxs:text-[12px] text-[#969ba0] outline-none md:py-3 xxs:py-3 px-2 rounded-lg appearance-none w-full">
        {
        items.map((item,index)=>
            <option className="text-[#969ba0] cursor-pointer " key={index} value={item?.value}>{item?.name}</option>
        )
        }
            
        </select>
        <div className="item absolute top-0 right-2 md:mt-[42px] xxs:mt-[40px]">
         <MdKeyboardArrowDown className="text-xl text-[#969ba0] " /> 
        </div>
    </div>
  )
}

export default DropDown