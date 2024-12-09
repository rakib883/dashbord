import React, { useEffect, useRef, useState } from 'react'
import Title from '../ui/Title'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import TopProduuct from './TopProduct';
import TopCounteries from './TopCounteries';


const Product = () => {
  // out side click and show all close area
  const showAllClose = useRef()
  const counteryRef = useRef()
  const [countery,setCountery] = useState(false)
  const [isShow,setIsSow] = useState(false)

  const handelClickOutside =  (e)=>{
    if(showAllClose.current && !showAllClose.current.contains(e.target)){
      setIsSow(false)
    }else if(counteryRef.current && !counteryRef.current.contains(e.target)){
      setCountery(false)
    }
  }

  useEffect(()=>{
      document.addEventListener("mousedown",handelClickOutside)
      return () => {
        document.removeEventListener('mousedown', handelClickOutside);
      };
      
  },[])
  
  // top countery last thre days data filter
  const [threDays,setThreDays] = useState(null)



  // top countery product filter area start
  const [topcounterys,setTopCountery] = useState(null)

  return (
    <div className="mt-[32px] ">
       <div className="top-product  rounded-lg grid grid-cols-2 gap-4 ">
           {/* top product area  */}
           <div className="top-product bg-white rounded-lg">
               <div className="item p-4">
                  <div className="title flex justify-between items-center">
                    <Title title="Top Products"/>
                    <div className="arrow">
                       <div className="item relative">
                          <div onClick={()=>setIsSow(!isShow)} className="icon flex items-center text-[#c0c2c5] text-[14px] cursor-pointer gap-1">
                            <p>Show all</p>
                            <p><MdOutlineKeyboardArrowDown /></p>
                          </div>
                          {
                            isShow && 
                            <div ref={showAllClose} className=" bg-white shadow-2xl w-[150px] absolute right-2">
                              <div className=" px-4 py-1 flex flex-col gap-2">
                                <p  onClick={()=>{setIsSow(!isShow),setThreDays(1) }} className="cursor-pointer hover:text-indigo-600 duration-300">3Days </p>
                                <p  onClick={()=>{setIsSow(!isShow),setThreDays(2) }} className="cursor-pointer hover:text-indigo-600 duration-300">7Days </p>
                              </div>
                           </div>
                          }
                       </div>
                    </div>
                  </div>
                  <div className="item mt-2">
                     <TopProduuct threFilter={threDays}/>
                  </div>
               </div>
           </div>
           {/* top counteris product */}
           <div className="topcounteris bg-white rounded-lg">
              <div className="item p-4">
                <div className="title flex justify-between ">
                    <div className="title">
                       <Title title="Top Countries By Sales"/>
                    </div>
                    <div className="relative  ">
                        <div onClick={()=>setCountery(true)} className="icon flex items-center text-[#c0c2c5] text-[14px] cursor-pointer gap-1">
                           <p>Show all</p>
                           <p><MdOutlineKeyboardArrowDown /></p>
                        </div>
                        {
                          countery &&
                         <div ref={counteryRef} className=" bg-white shadow-2xl w-[150px] absolute right-2">
                           <div className=" px-4 py-1 flex flex-col gap-2">
                              <p onClick={()=>{setCountery(false),setTopCountery(1)}}  className="cursor-pointer hover:text-indigo-600 duration-300">3Days </p>
                              <p onClick={()=>{setCountery(false),setTopCountery(2)}} className="cursor-pointer hover:text-indigo-600 duration-300">7Days </p>
                            </div>
                         </div>
                         }
                    </div>
                </div>
                <div className="item">
                   <TopCounteries date={topcounterys}/>
                </div>
              </div>
           </div>
       </div>
    </div>
  )
}

export default Product