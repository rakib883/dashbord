import React from 'react'

const CheckBox = ({title}) => {
  return (
    <div className=" flex gap-2 items-center ">
        <input className=" w-[20px] h-[20px]" type="checkbox" name="" id="" />
        <p className="text-[13px] text-[#666B81]">{title}</p>
   </div>
  )
}

export default CheckBox