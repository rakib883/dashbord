import React from 'react'
import Title from '../ui/Title'
import UserPermission from '../ui/UserPermission'
import SettingSideTitle from '../ui/SettingSideTitle'

const DataTable = () => {
  return (
    <div className="bg-white rounded-lg p-4">
        <div className="main flex">
           <div className="w-[40%]">
             <SettingSideTitle mainTitle="Datatables" title="Settings for datatables" />
           </div>
           <div className=" w-[60%] flex flex-col gap-4 ">
              <div className="defalt">
                 <Title title="Default show column visibility?" />
                 <UserPermission/>
              </div>
              <div className="defalt">
                 <Title title="Default show export button?" />
                 <UserPermission/>
              </div>
           </div>
        </div>
    </div>
  )
}

export default DataTable