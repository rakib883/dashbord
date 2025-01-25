import React from 'react'
import SettingSideTitle from '../ui/SettingSideTitle'
import UserPermission from '../ui/UserPermission'
import Title from '../ui/Title'

const NewsLetter = () => {
  return (
    <div className="bg-white rounded-lg">
        <div className=" p-4 flex">
            <div className=" w-[40%]">
                <SettingSideTitle mainTitle="Newsletter" title="Settings for newsletter (auto send newsletter email to SendGrid, Mailchimp... when someone register newsletter on website)." />
            </div>
            <div className=" w-[60%] flex flex-col gap-2">
                <Title title="Enable newsletter contacts list API?" />
                <UserPermission/>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter