import React from 'react'
import Title from '../ui/Title'
import { FiTrendingUp } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import EarningChart from '../ui/EarningChart';

const Earning = () => {
  return (
    <div className="h-[500px]">
      <div className="main p-4">
         <div className="item">
           <div className=" flex justify-between items-center">
             <Title title="Earnings" />
             <div className="item">
               <div className="item ">
                  <div className="item cursor-pointer">
                    <BsThreeDots className="text-2xl" />
                  </div>
                  <div className="iner-item"></div>
               </div>
             </div>
           </div>
           <div className="earning-item flex xxs:flex-col mt-[20px]">
             {/* revinew are start */}
              <div className="revinew w-[50%]">
                 <div className="item flex  items-center gap-2">
                   <div className="item w-[10px] h-[10px] rounded-full bg-blue-500"></div>
                   <p className="text-[#abadb1] text-xs font-medium">Revinew</p>
                 </div>
                 <div className="main-item flex items-center gap-2">
                    <div>
                       <p className="font-bold lg:text-2xl xxs:text-[12px] lg:text-[16px]">$1720</p>
                    </div>
                    <div className="benefit flex items-center gap-1">
                       <div className="main">
                         <FiTrendingUp className="text-[#23c55f] text-xl font-bold" />
                       </div>
                       <div className="qunatity">
                         <p className="text-[#abadb1] font-medium xxs:text-[12px] lg:text-[16px]">0.56%</p>
                       </div>
                    </div>
                 </div>
              </div>
              {/* profit area start */}
              <div className="revinew w-[50%]">
                 <div className="item flex  items-center gap-2">
                   <div className="item w-[10px] h-[10px] rounded-full bg-[#d3e4fe]"></div>
                   <p className="text-[#abadb1] text-xs font-medium">Revinew</p>
                 </div>
                 <div className="main-item flex items-center gap-2">
                    <div>
                       <p className="font-bold lg:text-2xl xxs:text-[12px]">$1720</p>
                    </div>
                    <div className="benefit flex  items-center gap-1">
                       <div className="main">
                         <FiTrendingUp className="text-[#23c55f] text-xl font-bold" />
                       </div>
                       <div className="qunatity">
                         <p className="text-[#abadb1] font-medium xxs:text-[12px] lg:text-[16px]">0.56%</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           {/* chart area start */}
           <div className="main mt-4">
             <div className="item  ">
                <EarningChart/>
             </div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Earning