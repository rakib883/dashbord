import React from 'react'
import Title from '../ui/Title'
import UserPermission from '../ui/UserPermission'
import SettingSideTitle from '../ui/SettingSideTitle'

const Case = () => {
  return (
    <div className="bg-white rounded-lg">
        <div className="main p-4 flex ">
            <div className=" w-[40%] ">
                <SettingSideTitle mainTitle="Cache" title="Config cache for system for optimize speed" />
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