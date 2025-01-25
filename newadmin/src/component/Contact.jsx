import React from 'react'
import Title from '../ui/Title'
import AddMoreButton from '../ui/AddMoreButton'
import Alert from '../ui/Alert'
import CheckBox from '../ui/CheckBox'
import SettingSideTitle from '../ui/SettingSideTitle'

const Contact = () => {
  return (
    <div className="bg-white p-4">
       <div className="flex">
         <div className=" w-[40%]">
             <SettingSideTitle mainTitle="Contact" title="Settings for contact plugin" />
         </div>
         <div className="main w-[60%] flex flex-col gap-4">
            <div className=" flex flex-col gap-2">
                <Title title="Blacklist keywords" />
                <AddMoreButton placeholder="Keyword"/>
                <Alert className="bg-[#eaf4ff] text-[#3f91fc] font-semibold leading-[10px]" title="Blacklist contact requests if it includes those keywords in the content field (separate by comma)." />
            </div>
            <div className=" flex flex-col gap-2">
                <Title title="Blacklist email domains" />
                <AddMoreButton placeholder="Domain"/>
                <Alert className="bg-[#eaf4ff] text-[#3f91fc] font-semibold leading-[10px]" title="Blacklist contact requests if it includes those keywords in the content field (separate by comma)." />
                 <CheckBox title="Enable math captcha?" />
            </div>
         </div>
       </div>
    </div>
  )
}

export default Contact