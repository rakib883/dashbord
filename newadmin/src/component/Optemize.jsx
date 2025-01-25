import React from 'react'
import Title from '../ui/Title'
import UserPermission from '../ui/UserPermission'
import SettingSideTitle from '../ui/SettingSideTitle'

const Optemize = () => {
  return (
    <div className="bg-white rounded-lg">
        <div className="main p-4 flex">
           <div className=" w-[40%]">
               <SettingSideTitle mainTitle="Optimize page speed" title="Minify HTML output, inline CSS, remove comments..." />
           </div>
           <duv className=" w-[60%] ">
              <Title title="Enable optimize page speed?" />
               <UserPermission/>
           </duv>
        </div>
    </div>
  )
}

export default Optemize