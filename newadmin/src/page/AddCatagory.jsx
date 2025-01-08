import React from 'react'
import Title from '../ui/Title'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FiUploadCloud } from "react-icons/fi";
import Button from '../ui/Button';

const AddCatagory = () => {
  return (
    <div>
        <div className="main">
            <div className="title">
                <div className="title">
                  <div className="title flex xxs:flex-col md:flex-row md:justify-between md:items-center ">
                    <div className="main">
                        <Title title="Product List" className="text-2xl" /> 
                    </div>
                    <div className="path text-xs">
                        <div className="main flex items-center gap-2">
                            <Link to="/" className="item flex items-center gap-1"> 
                            <p>Dashboard</p>
                            <MdKeyboardArrowRight className="text-xl" /> 
                            </Link>
                            <div className="item flex items-center gap-1">
                            <p>Catagory</p>
                            <MdKeyboardArrowRight className="text-xl" />
                            </div>
                            <div className="item flex items-center gap-1">
                                <p className={location.pathname === '/add-catagory' ? 'text-gray-500' : ''}>
                                    Add catagory
                                </p>
                                <MdKeyboardArrowRight className="text-xl" /> 
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            {/* add catagiry item area start */}
            <div className="mt-6 bg-white rounded-lg">
                <div className="item p-4 flex flex-col gap-8 ">
                    {/* add catagory area start here */}
                    <div className="main flex xxs:flex-col md:flex-row items-center md:gap-10 gap-1">
                        <div className="title md:w-[40%] xxs:w-full flex items-center gap-2 ">
                          <Title className="text-[14px]" title="Catagory name "/>
                          <p className="text-red-600 text-2xl">*</p>
                        </div>
                        <div className="input md:w-[60%] xxs:w-full">
                            <input type="text" placeholder="Catagory name" className="w-full outline-none border md:px-4 md:py-3 xxs:px-2 xxs:py-1 xxs:placeholder:text-xs md:placeholder:text-[16px] rounded-md" />
                        </div>
                    </div>
                    {/* upload image area start here */}
                    <div className="image-area flex xxs:flex-col md:flex-row md:gap-10 xxs:gap-2 items-center">
                        <div className="title md:w-[40%] xxs:w-full flex items-center gap-2 ">
                          <Title className="text-[14px]" title="Upload image"/>
                          <p className="text-red-600 text-2xl">*</p>
                        </div>
                        <div className=" md:w-[60%] xxs:w-full border border-indigo-600 border-dashed rounded-lg">
                            <label htmlFor="imageUpload" className="">
                                <div className="item cursor-pointer md:py-16 xxs:py-8 flex flex-col gap-4 w-full justify-center">
                                    <div className="icon flex justify-center ">
                                        <FiUploadCloud className="text-[40px] text-indigo-600" />
                                    </div>
                                    <p className="text-center md:text-base xxs:text-xs">Drop your images here or select <span className="text-indigo-600">Click to browser</span> </p>
                                </div>
                                <input type="file" hidden id="imageUpload" />
                            </label>
                        </div>
                    </div>

                    {/* catagory icon area here */}
                    <div className="main">
                        <div className="main flex md:flex-row xxs:flex-col md:gap-10 xxs:gap-2">
                            <div className="title md:w-[40%] xxs:w-full">
                              <div className="title  flex items-center gap-2 ">
                                 <Title className="text-[14px]" title="Select category icon"/>
                               </div>
                            </div>
                            <div className="drop-down md:w-[60%] xxs:w-full">
                                <div className="drop-down">
                                    <select className="w-full outline-none border md:py-3 xxs:py-1 md:px-4 xxs:px-2 rounded-md cursor-pointer md:text-base xxs:text-xs  " name="" id="">
                                        <option value="">Chose icon</option>
                                        <option value="">Color 1</option>
                                        <option value="">Color 2</option>
                                    </select>
                                </div>
                                <div className="button mt-4 w-full">
                                    <Button className="px-20" title="Save"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCatagory