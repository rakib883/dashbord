import React from 'react'

const Input = ({placeholder,type,name,value,onChange}) => {
  return (
    <input
    name={name}
    value={value}
    onChange={onChange}
    className="w-full outline-none border md:py-3 md:px-4 xxs:py-1 xxs:px-2 rounded-lg xxs:placeholder:text-xs md:placeholder:text-base"
    type={type}
    placeholder={placeholder}
  />
  )
}

export default Input