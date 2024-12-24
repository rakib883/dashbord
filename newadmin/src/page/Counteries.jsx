import React from 'react'
import Title from '../ui/Title'
import Path from '../ui/Path'
import SearchBar from '../ui/SearchBar'
import Button from "../ui/Button"
import { GoPlus } from "react-icons/go";
import CounteryTable from '../component/CounteryTable'

const Counteries = () => {
  return (
    <div>
      <div className="main">
        {/* header area here */}
         <div className=" flex items-center justify-between">
           <div className="title">
             <Title className="text-2xl" title="Countries" />
           </div>
           <div className="path">
              <Path  parent="Dashboard" child="Location" last="Countries" pathName="/countery" dynamic="" />
           </div>
         </div>
          

          {/* man area here */}
          <div className="main bg-white p-4 rounded-lg mt-8">
            <div className="header flex flex-wrap justify-between gap-4">
              <div className="short flex gap-8 items-center ">
                <div className="filter flex gap-4 items-center text-xs text-[#979ea8]">
                   <p>Showing</p>
                    <select className="border px-2 py-1 rounded-lg text-[#979ea8] ">
                       <option className="text-[#979ea8]">2</option>
                       <option className="text-[#979ea8]">5</option>
                       <option className="text-[#979ea8]">10</option>
                    </select>
                   <p>Entries</p>
                </div>
                <div className="filter">
                   <select className="outline-none border py-[8px] rounded-lg cursor-pointer text-xs">
                      <option>Bulk action</option>
                      <option> action 1</option>
                      <option> action 2</option>
                   </select>
                </div>
                <div className="filter">
                   <Button title="Filter" />
                </div>
                <div className="search">
                    <SearchBar placeholder="Search here" />
                </div>
              </div>
              <div className="buttton  flex-1 max-w-[180px]">
                <Button className="w-full flex justify-center text-center gap-2" title="New" icon={<GoPlus />} />
              </div>
            </div>
            <CounteryTable/>
          </div>
      </div>
    </div>
  )
}

export default Counteries