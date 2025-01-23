import React from 'react'
import Title from '../ui/Title'
import UserPermission from '../ui/UserPermission'

const Case = () => {
  return (
    <div className="bg-white rounded-lg">
        <div className="main p-4 flex ">
            <div className=" w-[40%] ">
                <div className="title">
                    <Title title="Cache" />
                    <p className="text-[13px] text-[#666B81]">Config cache for system for optimize speed</p>
                </div>
            </div>
            <div className=" w-[60%] ">
                <div className="enable flex flex-col gap-2">
                    <div className="title">
                        <Title title="Enable cache?" />
                        <UserPermission/>
                    </div>
                    <div className="title">
                        <Title title="Cache admin menu?" />
                        <UserPermission/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Case