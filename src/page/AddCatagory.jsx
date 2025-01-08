import React from 'react'
import Title from '../ui/Title'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FiUploadCloud } from "react-icons/fi";
import Button from '../ui/Button';

const AddCatagory = () => {
  return (
    <div>
        <div className="main ">
            <div className="title">
                <div className="title">
                  <div className="title flex xxs:flex-col justify-between items-center ">
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
                    <div className="main flex items-center gap-10">
                        <div className="title w-[40%] flex items-center gap-2 ">
                          <Title className="text-[14px]" title="Catagory name "/>
                          <p className="text-red-600 text-2xl">*</p>
                        </div>
                        <div className="input w-[60%]">
                            <input type="text" placeholder="Catagory name" className="w-full outline-none border px-4 py-3 rounded-md" />
                        </div>
                    </div>
                    {/* upload image area start here */}
                    <div className="image-area flex gap-10 items-center">
                        <div className="title w-[40%] flex items-center gap-2 ">
                          <Title className="text-[14px]" title="Upload image"/>
                          <p className="text-red-600 text-2xl">*</p>
                        </div>
                        <div className=" w-[60%] border border-indigo-600 border-dashed rounded-lg">
                            <label htmlFor="imageUpload" className="">
                                <div className="item cursor-pointer py-16 flex flex-col gap-4 w-full justify-center">
                                    <div className="icon flex justify-center ">
                                        <FiUploadCloud className="text-[40px] text-indigo-600" />
                                    </div>
                                    <p className="text-center">Drop your images here or select <span className="text-indigo-600">Click to browser</span> </p>
                                </div>
                                <input type="file" hidden id="imageUpload" />
                            </label>
                        </div>
                    </div>

                    {/* catagory icon area here */}
                    <div className="main">
                        <div className="main flex gap-10">
                            <div className="title w-[40%]">
                              <div className="title  flex items-center gap-2 ">
                                 <Title className="text-[14px]" title="Select category icon"/>
                               </div>
                            </div>
                            <div className="drop-down w-[60%]">
                                <div className="drop-down">
                                    <select className="w-full outline-none border py-3 px-4 rounded-md cursor-pointer  " name="" id="">
                                        <option value="">Chose icon</option>
                                        <option value="">Color 1</option>
                                        <option value="">Color 2</option>
                                    </select>
                                </div>
                                <div className="button mt-4">
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