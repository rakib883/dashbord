import React from 'react'
import Title from '../ui/Title'
import UserPermission from '../ui/UserPermission'

const Optemize = () => {
  return (
    <div className="bg-white rounded-lg">
        <div className="main p-4 flex">
           <div className=" w-[40%]">
               <Title title="Optimize page speed" />
               <p className="text-[13px] text-[#666B81]">Minify HTML output, inline CSS, remove comments...</p>
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