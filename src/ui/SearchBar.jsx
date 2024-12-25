import React from 'react'
import { LuSearch } from 'react-icons/lu'

const SearchBar = ({placeholder}) => {
  return (
    <div className="search flex-1 flex items-center border border-gray-400 rounded-lg">
        <div className=" w-full">
            <input className="w-full  placeholder:font-mainFont border-none outline-none px-4 py-[12px] rounded-md" placeholder={placeholder} type="text" />
        </div>
        <div className="icon px-4 cursor-pointer">
            <LuSearch className=" text-xl" />
        </div>
    </div>
  )
}

export default SearchBar