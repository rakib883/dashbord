import React, { useEffect, useState } from 'react'
import Title from '../ui/Title'
import { FiTrendingUp } from "react-icons/fi";
import { MdTrendingDown } from "react-icons/md";

const TopCounteries = ({date}) => {
    const countery = [
        {
          name: "Turkish Flag",
          image: "https://i.ibb.co.com/zVDhXGH/6.png",
          price: "160",
          date: "2024-11-23",
        },
        {
          name: "Belgium",
          image: "https://i.ibb.co.com/T1zhGYg/7.png",
          price: "120",
          date: "2024-11-24",
        },
        {
          name: "Sweden",
          image: "https://i.ibb.co.com/16Mzkfd/8.png",
          price: "200",
          date: "2024-11-25",
        },
        {
          name: "Vietnamese",
          image: "https://i.ibb.co.com/Pj6wd0S/9.png",
          price: "100",
          date: "2024-11-22",
        },
      ];
    
    const [isData,setIsData] = useState(countery)
    // filter area start
   useEffect(()=>{
       if(date){
        const todayData = new Date()
        const dynamicData = new Date()
        dynamicData.setDate(todayData.getDate()-date)
         
        const filterData = countery.filter((item)=>{
            const regularData = new Date(item?.date)
            return regularData >= dynamicData && regularData <= todayData;
        })
        setIsData(filterData)
       }else{
        setIsData(countery)
       }
   },[date])


  return (
    <div className="mt-4">
        <div className="main flex items-center gap-2 ">
            <div className="price">
                <Title title="$1950" className="text-2xl"/>
            </div>
            <div className="icon mt-2">
               <FiTrendingUp className="text-2xl text-green-700" />
            </div>
            <div className="parcentence ">
               <p className="text-lg text-[#808089]"> 1.5%</p>
            </div>
            <div className="">
              <p className="text-[#babbbe]">since last weekend</p>
            </div>
        </div>
        <div className="item  flex flex-col gap-4 mt-4">
            {
                isData.map((item,index)=>
                  <div key={index} className=" flex justify-between items-center ">
                      <div className="item  w-[40%]">
                        <div className="item flex items-center gap-2">
                            <img src={item?.image} alt="" />
                            <p className="hover:text-indigo-600 duration-300 cursor-pointer">{item?.name}</p>
                        </div>
                      </div>
                      <div className="item-icon text-center    flex justify-center">
                        
                            {(() => {
                                const convertItem = Number(item?.price).toFixed(2);

                                // Return the conditional JSX
                                return convertItem > 150 ? (
                                <div className="item">
                                    <FiTrendingUp className="text-green-600" />
                                </div>
                                ) : (
                                <div className="item">
                                    <MdTrendingDown className="text-red-700 text-2xl"/>
                                </div>
                                );
                            })()}
                      </div>
                      <div className="price text-center">
                        <p>{item?.price}</p>
                      </div>
                  </div>
                )
            }
        </div>
    </div>
  )
}

export default TopCounteries