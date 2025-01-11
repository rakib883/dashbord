import React from 'react'
import Title from '../ui/Title'
import Path from '../ui/Path'
import Button from '../ui/Button'

const AddAttribute = () => {
  return (
    <div>
        <div className="main">
            <div className=" flex xxs:flex-col md:flex-row md:justify-between md:items-center  ">
                <div className="title">
                    <Title title="Add Attribute" className="text-2xl" />
                </div>
                <div className="path">
                   <Path parent="Dashboard" child="Attributes" last="Add Attribute" pathName="/add-attribute"/>
                </div>
            </div>

            {/* body area start here */}
            <div className="main bg-white px-4 rounded-lg mt-4">
               <div className="content md:py-4 xxs:gap-2 flex flex-col gap-6">
                  <div className=" flex xxs:flex-col md:flex-row items-center">
                     <div className="title md:w-[40%] xxs:w-full">
                       <Title title="Attribute name" className="text-base" />
                     </div>
                     <div className="input md:w-[60%] xxs:w-full">
                       <input className="w-full outline-none border rounded-lg md:px-4 md:py-3 md:text-base xxs:px-2 xxs:py-1 xxs:text-xs" type="text" placeholder="Attributes name" />
                     </div>
                  </div>
                  <div className=" flex xxs:flex-col md:flex-row items-center">
                     <div className="title md:w-[40%] xxs:w-full">
                       <Title title="Attribute Value" className="text-base" />
                     </div>
                     <div className="input md:w-[60%] xxs:w-full">
                       <input className="w-full outline-none border rounded-lg md:px-4 md:py-3 xxs:px-2 xxs:py-1 xxs:text-xs  md:placeholder:text-base md:text-base" type="text" placeholder="Attributes value" />
                     </div>
                  </div>
                  <div className=" flex items-center">
                     <div className="title w-[40%]">
                     </div>
                     <div className="input w-[60%]">
                        <Button className=" max-w-96 " title="Save"/>
                     </div>
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default AddAttribute