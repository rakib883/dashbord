import React, { useEffect, useState } from 'react'
import Title from '../ui/Title'

const BestSopSeller = ({filter}) => {
   // demo data area start
   const fakeData = [
    {
      image: "https://i.ibb.co.com/TBN6v72/6-1.png",
      title: "Robert",
      quantity: "73",
      total: "1000",
      status: "20",
      catagory: "Kitchen, Pets",
      date: "2024-11-25", // Today's date
    },
    {
      image: "https://i.ibb.co.com/sFdMVcJ/5-2.png",
      title: "Calvin",
      quantity: "66",
      total: "4000",
      status: "40",
      catagory: "Kitchen, Pets",
      date: "2024-11-24", // Yesterday
    },
    {
      image: "https://i.ibb.co.com/BZKf6Ts/2-2.png",
      title: "Dwight",
      quantity: "93",
      total: "6000",
      status: "60",
      catagory: "Kitchen, Pets",
      date: "2024-11-23",
    },
    {
      image: "https://i.ibb.co.com/TBN6v72/6-1.png",
      title: "Robert",
      quantity: "73",
      total: "1000",
      status: "80",
      catagory: "Kitchen, Pets",
      date: "2024-11-22",
    },
    {
      image: "https://i.ibb.co.com/TBN6v72/6-1.png",
      title: "Robert",
      quantity: "73",
      total: "1000",
      status: "90",
      catagory: "Kitchen, Pets",
      date: "2024-11-21",
    },
    {
      image: "https://i.ibb.co.com/TBN6v72/6-1.png",
      title: "Robert",
      quantity: "73",
      total: "1000",
      status: "90",
      catagory: "Kitchen, Pets",
      date: "2024-11-20",
    },
    {
      image: "https://i.ibb.co.com/TBN6v72/6-1.png",
      title: "Robert",
      quantity: "73",
      total: "1000",
      status: "90",
      catagory: "Kitchen, Pets",
      date: "2024-11-19",
    },
    {
      image: "https://i.ibb.co.com/TBN6v72/6-1.png",
      title: "Robert",
      quantity: "73",
      total: "1000",
      status: "90",
      catagory: "Kitchen, Pets",
      date: "2024-11-18",
    },
  ];
  
 // demo data area end

//  data area start
const [isData,setIsData] = useState(fakeData)

// filter area start here
useEffect(()=>{
  if(filter){
     const regular= new Date()
     const previesDate = new Date()

     previesDate.setDate(regular.getDate()-filter)
     const filterData = fakeData.filter((item)=>{
       const allDate = new Date(item?.date)
       return allDate >= previesDate && allDate <= regular
     })
     setIsData(filterData)
  }else{
    setIsData(fakeData)
  }
},[filter])
  return (
    <div className=" w-[600px] ">
       {/* title area start here */}
       <div className="main">
       <div className=" flex justify-between">
            <div className=" w-[40%]  ">
              <Title className="text-[14px]" title="Shop" />
            </div>
            <div className=" w-[25%] ">
              <Title className="text-[14px]" title="Catagory" />
            </div>
            <div className="w-[25%]">
              <Title className="text-[14px]" title="Total" />
            </div>
            <div className="w-[25%]">
              <Title className="text-[14px]" title="Status" />
            </div>
          </div>
       </div>
       {/* title area end here */}
         <div className="main flex flex-col gap-4 mt-4 pb-4 ">
               {
                  isData.slice(0,7).map((item,index)=>(
                     <div key={index} className=" flex justify-between items-center">
                         <div className=" flex items-center gap-4 w-[40%] ">
                           <div className="image max-w-[40px]">
                             <img className="rounded-full" src={item?.image} alt="" />
                           </div>
                           <div className="text-area ">
                              <p className="text-[#191919] cursor-pointer hover:text-indigo-600 duration-300">{item?.title}</p>
                              <p className="text-[#acaeb2] text-xs"> {item?.quantity} Purchases</p>
                           </div>
                         </div>
                         {/* catagory area staret */}
                         <div className="catagiry   w-[25%]">
                            <p className="text-[#191919]">{item?.catagory}</p>
                         </div>
                         {/* catagory area end */}

                         {/* titak area start */}
                         <div className="main flex items-center w-[25%]">
                           <p className="text-[#191919]">$ {item?.total}</p>
                         </div>
                         {/* total area end */}

                         {/* status area start */}
                         <div className="main  items-center w-[25%]">
                         {(() => {
                             
                              const numberConvert = Number(item?.status)
                              return (
                                <div className="flex gap-4 items-center">
                                  <div className="item bg-[#ecf5ff] h-[4px] w-full rounded-full">
                                    <div   style={{ width: `${item?.status}%` }} 
                                    className={` ${ 20 > numberConvert ? " bg-gray-400" :
                                     40 > numberConvert ? " bg-yellow-400" :
                                      60 > numberConvert ? " bg-green-600" : 
                                      80 > numberConvert ? " bg-orange-500" : 
                                      100 > numberConvert ? " bg-orange-300" :"" } 
                                      item bg-green-600  h-[4px] rounded-full`}></div>
                                  </div>
                                  <p className="text-xs">100%</p>
                                </div>
                              );
                            })()}

                         </div>
                         {/* status area end */}

                     </div>
                  ))
                }
        </div> 
    </div>
  )
}

export default BestSopSeller