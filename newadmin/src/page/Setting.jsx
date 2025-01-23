import React from 'react'
import Title from '../ui/Title'
import Path from '../ui/Path'
import RecentOrder from '../component/RecentOrder'
import GeneralOrder from '../component/GeneralOrder'
import Case from '../component/Case'
import DataTable from '../component/DataTable'
import Optemize from '../component/Optemize'
import Them from '../component/Them'


const Setting = () => {
  return (
    <div>
        <div className="main">
            <div className=" flex xxs:flex-col md:flex-row md:justify-between md:items-center ">
                <div className="header">
                    <Title title="Setting" className="text-2xl" />
                </div>
                <div className="path">
                    <Path parent="Dashboard" child="Setting" last="" pathName="/settings" dynamic="" />
                </div>
            </div>
            <div className=" flex flex-col gap-4">
                {/* recent order area here */}
                <RecentOrder/>
                {/* Generra l area hee */}
                <GeneralOrder/>
                {/* cash area here start */}
                <Case/>
                {/* data table area start here */}
                <DataTable/>
                {/* page optemize area herer start */}
                <Optemize/>
                {/* them area here start */}
                <Them/>
            </div>
            
        </div>
    </div>
  )
}

export default Setting