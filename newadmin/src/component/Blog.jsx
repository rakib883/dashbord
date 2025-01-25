import React from 'react'
import Title from '../ui/Title'
import CheckBox from '../ui/CheckBox'
import SettingSideTitle from '../ui/SettingSideTitle'
import Alert from '../ui/Alert'

const Blog = () => {
  return (
    <div className="bg-white rounded-lg">
        <div className=" p-4 flex">
            <div className="title w-[40%]">
                <SettingSideTitle mainTitle="Blog" title="Settings for Blog" />
            </div>
            <div className=" w-[60%]">
                <div className="top flex flex-col gap-4">
                   <div className="top flex flex-col gap-2">
                     <CheckBox title="Enable Blog Post Schema?" />
                     <Alert className="bg-[#eaf4ff] text-[#3F91FC]" title="Blacklist contact requests if it includes those keywords in the content field (separate by comma)." />
                   </div>
                   <div className="top flex flex-col gap-2 ">
                     <Title title="Schema type" />
                      <div className="drop">
                         <select className="w-full outline-none border px-4 py-3 rounded-lg appearance-none cursor-pointer">
                            <option value="">News Article</option>
                            <option value="">Line Chart</option>
                            <option value="">Colum Chart</option>
                         </select>
                      </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog