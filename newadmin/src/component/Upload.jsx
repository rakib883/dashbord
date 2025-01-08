import React from 'react'
import Title from '../ui/Title'
import { MdKeyboardArrowDown } from "react-icons/md";

const Upload = () => {
  const catagory = [
    {name:"Electronics",value:"electronics"},
    {name:"Furniture",value:"furniture"},
    {name:"Food",value:"food"},
    {name:"Household essentials",value:"household essentials"},
    {name:"Toys and hobbies",value:"toys and hobbies"},
    {name:"Beverages",value:"beverages"},
  ]

  const brand = [
    {
      name:"mobile",value:"apple"
    },
    {
      name:"casion",value:"casion"
    },
    {
      name:"motive",value:"motive"
    },
    {
      name:"walton",value:"walton"
    },
    {
      name:"singer",value:"singer"
    },
    {
      name:"myko",value:"myko"
    },
  ]
  return (
    <div>
      <div className="bg-white w-full rounded-lg">
         <div className="item p-4 flex flex-col gap-4">
            <div className="main">
                <div className=" flex gap-2 items-center font-semibold text-black">
                <Title className="text-[14px]" title="  Product name " />
                <span className="text-red-600 mt-1">*</span>  </div>
              <input className="w-full border outline-none rounded-lg md:py-3 xxs:py-1 px-4 placeholder:text-[14px] placeholder:xxs:text-[12px] placeholder:text-[#969ba0]" placeholder="Product name" type="text" />
               <p className="text-xs text-[#969ba0] mt-2">
                  Do not exceed 20 characters when entering the product name.
               </p>
            </div>
            {/* catagory and gender from */}
            <div className="main flex flex-col md:flex-row md:gap-10 ssx:gap-2 items-center">
               <div className="catagpry relative md:w-[50%] xxs:w-full">
               <div className=" flex gap-2 items-center font-semibold text-black">
                <Title className="text-[14px]" title="  Product catagory " />
                <span className="text-red-600 mt-1">*</span>  </div>
                 <select className="border md:text-[14px] xxs:text-[12px] text-[#969ba0] outline-none md:py-3 xxs:py-1 px-2 rounded-lg appearance-none w-full">
                  {
                    catagory.map((item,index)=>
                      <option className="text-[#969ba0] cursor-pointer " key={index} value={item?.value}>{item?.name}</option>
                    )
                  }
                     
                 </select>
                 <div className="item absolute top-0 right-2 md:mt-[42px] xxs:mt-[38px]">
                    <MdKeyboardArrowDown className="text-xl text-[#969ba0] " />
                 </div>
               </div>
               <div className="catagpry relative md:w-[50%] xxs:w-full">
               <div className=" flex gap-2 items-center font-semibold text-black">
                <Title className="text-[14px]" title="Gender " />
                <p className="text-red-600 mt-1">*</p>  </div>
                 <select className=" text-[#969ba0] md:text-[14px] xxs:text-[12px] border outline-none md:py-3 xxs:py-1 px-2 rounded-lg appearance-none w-full">
                     <option value="">Choose</option>
                     <option value="">Male</option>
                     <option value="">Femel</option>
                 </select>
                 <div className="item absolute top-0 right-2 md:mt-[42px] xxs:mt-[38px]">
                    <MdKeyboardArrowDown className="text-xl text-[#969ba0]" />
                 </div>
               </div>
            </div>
            {/* brand area start here */}
            <div className="main relative">
               <div className=" flex gap-2 items-center font-semibold text-black">
                <Title className="text-[14px]" title="Brand " />
                <span className="text-red-600 mt-1">*</span>  </div>
               <select name="" id="" className="w-full border rounded-lg  md:py-3 xxs:py-1 px-4 outline-none appearance-none text-[#969ba0] md:text-[14px] xxs:text-[12px]">
                {
                  brand.map((item,index)=>
                    <option key={index} value={item?.value}>{item?.name}</option>
                  )
                }
               
               </select>
               <div className="  absolute top-0 right-2 mt-[42px]">
                  <MdKeyboardArrowDown className="text-xl text-[#969ba0]" />
               </div>
            </div>

            {/* descprtion area start start */}
            <div className="main">
              <div className=" flex gap-2 items-center font-semibold text-black">
                <Title className="text-[14px]" title="Descprtion" />
                <span className="text-red-600 mt-1">*</span>  </div>
              <div className="item">
              <textarea 
              name="" id="" 
              placeholder="Product description" 
              className="w-full resize-none outline-none border px-4 py-3 h-[200px] text-[#969ba0] rounded-lg md:text-[14px] xxs:text-[12px]"></textarea>
                <p className="text-xs text-[#969ba0] mt-2">
                  Do not exceed 20 characters when entering the product name.
               </p>
              </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Upload