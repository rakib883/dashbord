import React from 'react'
import { GoPlus } from "react-icons/go";

const AddMoreButton = ({placeholder}) => {
  return (
    <div>
        <div className="main relative">
            <input className="outline-none border w-full px-4 py-[12px] rounded-lg mt-1 " placeholder={placeholder} type="text" />
            <div className=" absolute right-2 top-[10px] ">
              <button className="bg-[#2377fc] font-semibold text-white  px-6 py-[6px] gap-2 rounded-lg   flex items-center">Add more <GoPlus className="mt-1 text-lg" /></button>
            </div>
        </div>
    </div>
  )
}

export default AddMoreButton