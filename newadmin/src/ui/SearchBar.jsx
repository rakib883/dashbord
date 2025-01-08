import React from 'react'
import { LuSearch } from 'react-icons/lu'

const SearchBar = ({placeholder}) => {
  return (
    <div className="search flex-1 flex items-center border border-gray-400 rounded-lg">
        <div className=" w-full">
            <input className="w-full  placeholder:font-mainFont border-none outline-none md:px-4 xxs:px-2 md:py-[12px] xxs:py-[6px] xxs:placeholder:text-xs md:placeholder:text-base rounded-md" placeholder={placeholder} type="text" />
        </div>
        <div className="icon px-4 cursor-pointer">
            <LuSearch className=" md:text-xl xxs:text-xs" />
        </div>
    </div>
  )
}

export default SearchBar