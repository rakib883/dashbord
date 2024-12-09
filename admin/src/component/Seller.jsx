import React, { useEffect, useRef, useState } from 'react'
import BestSopSeller from './BestSopSeller'
import Title from '../ui/Title'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import ProductOverview from './ProductOverview'

const Seller = () => {
  
   // best sop seller area start
    const outSideRef = useRef()
    const [isOpen,setIsOpen] = useState(false)

   //  product overview area start
   const [overview,setOverview] = useState(false)
   const overviewRef = useRef()
    
    const outsideHandeler =(e)=>{
        if(outSideRef.current && !outSideRef.current.contains(e.target)){
            setIsOpen(false)
        }else if(overviewRef.current && !overviewRef.current.contains(e.target)){
         setOverview(false)
        }
    }

    useEffect(()=>{
         document.addEventListener("mousedown",outsideHandeler)
         
    },[])

//   filter area start
const [filter,setIsFilter] = useState(null)
    
  return (
    <div>
        <div className="item mt-8 flex gap-4 ">
            {/* best seller sop */}
            <div className=" w-[40%] rounded-md bg-white  ">
              {/* title area start */}
              <div className="item p-4 flex justify-between items-center">
                 <div className="title">
                    <Title title="Best Shop Sellers" /> 
                 </div>
                 <div className="view">
                   <div className="relative  ">
                        <div onClick={()=>setIsOpen(true)}  className="icon flex items-center text-[#c0c2c5] text-[14px] cursor-pointer gap-1">
                           <p>Show all</p>
                           <p><MdOutlineKeyboardArrowDown /></p> 
                        </div>
                        {
                         isOpen &&
                         <div ref={outSideRef} className=" bg-white shadow-2xl w-[150px] absolute right-2">
                           <div className=" px-4 py-1 flex flex-col gap-2">
                              <p onClick={()=>{setIsOpen(false),setIsFilter(2)}}   className="cursor-pointer hover:text-indigo-600 duration-300">3Days </p>
                              <p  onClick={()=>{setIsOpen(false),setIsFilter(3)}}  className="cursor-pointer hover:text-indigo-600 duration-300">7Days </p>
                            </div>
                         </div>
                         }
                    </div>
                 </div>
              </div>
              <div className="item px-4">
                 <div className="item pb-4">
                    <div className="item overflow-x-auto scroll-container">
                      <BestSopSeller filter={filter}/>
                    </div>
                 </div>
              </div>
            </div>
            {/* product overview */}
            <div className=" w-[60%] bg-white rounded-lg">
            <div className="item p-4 flex justify-between items-center">
                 <div className="title">
                    <Title title="Product overview" /> 
                 </div>
                 <div className="view">
                   <div className="relative  ">
                        <div onClick={()=>setOverview(true)}  className="icon flex items-center text-[#c0c2c5] text-[14px] cursor-pointer gap-1">
                           <p>Show all</p>
                           <p><MdOutlineKeyboardArrowDown /></p> 
                        </div>
                        {
                          overview &&
                         <div ref={overviewRef} className=" bg-white shadow-2xl w-[150px] absolute right-2">
                           <div className=" px-4 py-1 flex flex-col gap-2">
                              <p onClick={()=>setOverview(false)}   className="cursor-pointer hover:text-indigo-600 duration-300">3Days </p>
                              <p  onClick={()=>setOverview(false)}  className="cursor-pointer hover:text-indigo-600 duration-300">7Days </p>
                            </div>
                         </div>
                         }
                    </div>
                 </div>
              </div>
               {/* main product area start */}
               <div className="main">
                   <ProductOverview/>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Seller