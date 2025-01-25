import React from 'react'
import Title from '../ui/Title'
import AddMoreButton from '../ui/AddMoreButton'
import Alert from '../ui/Alert'
import SettingSideTitle from '../ui/SettingSideTitle'

const GoogleAnaletics = () => {
  return (
    <div className="bg-white">
        <div className=" flex p-4">
            <div className=" w-[40%]">
                <Title title="" />
                <p className="text-[13px] text-[#666B81]"></p>
                <SettingSideTitle mainTitle="Google Analytics" title="Config Credentials for Google Analytics" />
            </div>
            <div className="w-[60%]">
                {/* google tag area here start */}
                <div className=" flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Title title="Google tag ID" />
                        <AddMoreButton placeholder="Enter your googl ID"/>
                        <Alert className="bg-[#eaf4ff] text-[#3f91fc]" title="https://support.google.com/analytics/answer/9539598#find-G-ID" />
                    </div>
                    <div className=" flex flex-col gap-2">
                        <Title title="Property ID for GA4" />
                        <AddMoreButton placeholder="Google analetics"/>
                        <Alert className="bg-[#eaf4ff] text-[#3f91fc]" title="https://support.google.com/analytics/answer/9539598#find-G-ID" />
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default GoogleAnaletics