import React from 'react'
import Title from '../ui/Title'
import Path from '../ui/Path'
import Button from '../ui/Button'

const AddAttribute = () => {
  return (
    <div>
        <div className="main">
            <div className=" flex justify-between items-center">
                <div className="title">
                    <Title title="Add Attribute" className="text-2xl" />
                </div>
                <div className="path">
                   <Path parent="Dashboard" child="Attributes" last="Add Attribute" pathName="/add-attribute"/>
                </div>
            </div>

            {/* body area start here */}
            <div className="main bg-white px-4 rounded-lg mt-4">
               <div className="content py-4 flex flex-col gap-6">
                  <div className=" flex items-center">
                     <div className="title w-[40%]">
                       <Title title="Attribute name" className="text-base" />
                     </div>
                     <div className="input w-[60%]">
                       <input className="w-full outline-none border rounded-lg px-4 py-3" type="text" placeholder="Attributes name" />
                     </div>
                  </div>
                  <div className=" flex items-center">
                     <div className="title w-[40%]">
                       <Title title="Attribute Value" className="text-base" />
                     </div>
                     <div className="input w-[60%]">
                       <input className="w-full outline-none border rounded-lg px-4 py-3" type="text" placeholder="Attributes value" />
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