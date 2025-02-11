import React from 'react'
import Title from '../ui/Title'
import { MdKeyboardArrowDown } from "react-icons/md";
import BasicDatePicker from '../ui/DatePicker';
import Button from '../ui/Button';
import DropDown from '../ui/DropDown';

const ImageUpload = () => {
    const size = [
        {
            name:"Choose size",
            value:""
        },
        {
            name:"EU-44",
            value:"EU-44"
        },
        {
            name:"EU-38.55",
            value:"EU-38.55"
        },
        {
            name:"EU-42",
            value:"EU-42"
        },
    ]
  return (
    <div className="bg-white rounded-lg">
        <div className="main p-4">
            <div className="item">
                <div className="title">
                    <Title title="Upload image"/>
                </div>
                {/* top image area */}
                <div className=" flex gap-4 mt-4">
                    <div className=" rounded-md border xxs:h-[100px] md:h-[280px]">
                        <img className=" xxs:h-[100px] md:h-[250px]" src="https://i.ibb.co.com/C9TFPQB/upload-2.png" alt="img" />
                    </div>
                    <div className=" rounded-md border xxs:h-[100px] md:h-[280px]">
                       <img className=" xxs:h-[100px] md:h-[250px]" src="https://i.ibb.co.com/RQr734f/upload-1.png" alt="img" />
                    </div>
                    <div className="rounded-md border border-indigo-600 border-dashed">
                        <label htmlFor="image" className="md:h-[250px] xxs:h-[100px] flex flex-col justify-center items-center">
                            <div className="icon px-10">
                          
                            </div>
                            <input hidden id="image" type="file" />
                            <div className="text w-[100px] ">
                                <p className="text-[#969ba0] text-center md:text-[14px] xxs:text-[12px]"> 
                                    Drop your images here or select
                                <span className="text-indigo-600 cursor-pointer hover:text-black duration-300">click to browse </span>   </p>
                            </div>
                        </label>
                  </div>
                </div>
                 {/* text area start */}
                 <div className="text mt-2 text-[#969ba0] md:text-[14px] xxs:text-[12px] xxs:text-center md:text-start">
                    <p>You need to add at least 4 images. Pay attention to the quality of the pictures you add, comply with the background color standards. Pictures must be in certain dimensions. Notice that the product shows all the details</p>
                 </div>

                 {/* size and product area start */}
                 <div className="item flex xxs:flex-col md:flex-row items-center md:gap-10 xxs:gap-2 mt-4">
                    <div className="size md:w-[50%] xxs:w-full">
                        <DropDown title="Add size" items={size} />
                    </div>
                    <div className="size md:w-[50%] xxs:w-full">
                        <div className="size">
                            <div className="item">
                                <Title title="Product Date" />
                            </div>
                            <div className="md:hidden">
                              <div className="date w-full border   rounded-md ">
                                  <input className="py-2 px-4 border-none outline-none w-full text-[10px] " type="date" />
                               </div>
                            </div>
                            <div className=" mt-2 xxs:hidden md:block">
                            <input
                                type="date"
                                id="date"
                                className="w-full p-2 xxs:py-3 border border-gray-300 text-[#969ba0] text-[12px] rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                min="2023-01-01"
                                max="2025-12-31"
                            />
                            </div>
                        </div>
                    </div>
                 </div>
                {/* buttona rea start here */}
                <div className="main flex xxs:flex-col md:flex-row gap-2 items-center justify-between py-4">
                    <Button className=" bg-[#3180fc] w-full   " title="Add product" />
                    <Button className=" bg-white border hover:bg-[#3180fc] hover:text-white border-[#3180fc] text-[#3180fc]" title="Save " />
                    <Button className=" bg-white border hover:bg-[#3180fc] hover:text-white border-[#3180fc] text-[#3180fc]" title="Schidul" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageUpload