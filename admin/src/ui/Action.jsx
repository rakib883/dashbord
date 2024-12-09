import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'

const Action = ({see,edit,del}) => {
  return (
    <div className="icon-area flex gap-4 items-center">
        <div onClick={see} className=" cursor-pointer">
            <IoEyeOutline className="text-xl text-indigo-600 hover:text-black duration-300" />
        </div>
        <div onClick={edit} className=" cursor-pointer">
            <MdOutlineModeEditOutline className="text-xl text-green-700 hover:text-black duration-300" />
        </div>
        <div onClick={del} className=" cursor-pointer">
            <RiDeleteBinLine className="text-xl text-red-600 hover:text-black duration-300" />
        </div>
    </div>

  )
}

export default Action