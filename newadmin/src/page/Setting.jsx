import React from 'react'
import Title from '../ui/Title'
import Path from '../ui/Path'
import RecentOrder from '../component/RecentOrder'
import GeneralOrder from '../component/GeneralOrder'
import Case from '../component/Case'
import DataTable from '../component/DataTable'
import Optemize from '../component/Optemize'
import Them from '../component/Them'
import Contact from '../component/Contact'
import GoogleAnaletics from '../component/GoogleAnaletics'
import Blog from '../component/Blog'
import NewsLetter from '../component/NewsLetter'


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
                {/* contact area heree  srart */}
                <Contact/>
                {/* googlr analetics area here */}
                <GoogleAnaletics/>
                {/* blog area here start */}
                <Blog/>
                {/* news letter area start */}
                <NewsLetter/>
            </div>
            <div className="button flex justify-center items-center">
                <button className="bg-[#2275fc] hover:border-[#2275fc] border hover:text-[#2275fc] duration-300 hover:bg-white text-md font-medium text-white px-4 py-2 rounded-lg mt-4">Save Setting</button>
            </div>
        </div>
    </div>
  )
}

export default Setting