import React, { useState } from 'react'
import Title from '../ui/Title'
import Path from '../ui/Path'
import Button from '../ui/Button'
import { FiUploadCloud } from "react-icons/fi";
import { FiFolderPlus } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { RiListUnordered } from "react-icons/ri";
import { LuCopy } from "react-icons/lu";
import SearchBar from '../ui/SearchBar';




const Gallery = () => {
    const product = [
        {
            name:"then pet merkiting lisemce",
            image:"https://i.ibb.co.com/4Z8NXmt/all-gallery-6.png"
        },
        {
            name:"dog food and chicken",
            image:"https://i.ibb.co.com/M6tcRfB/all-gallery-5.png"
        },
        {
            name:"alden adult dog food",
            image:"https://i.ibb.co.com/LpRzfpv/all-gallery-7.png"
        },
        {
            name:"then pet merkiting lisemce",
            image:"https://i.ibb.co.com/zsg627b/all-gallery-2.png"
        },
        {
            name:"then pet merkiting lisemce",
            image:"https://i.ibb.co.com/5cm4j2G/all-gallery-4.png"
        },
        {
            name:"then pet merkiting lisemce",
            image:"https://i.ibb.co.com/cNKTgN4/all-gallery-3.png"
        },
        {
            name:"then pet merkiting lisemce",
            image:"https://i.ibb.co.com/4Z8NXmt/all-gallery-6.png"
        },
        {
            name:"then pet merkiting lisemce",
            image:"https://i.ibb.co.com/5cm4j2G/all-gallery-4.png"
        },
        {
            name:"then pet merkiting lisemce",
            image:"https://i.ibb.co.com/zsg627b/all-gallery-2.png"
        },
       
    ]

    // grid and row area start here
    const [grid,setGrid] = useState(false)

    // link copy arera here start
    const link = "https://themeforest.net/user/themesflat"
    const linkCopy =()=>{
        navigator.clipboard
        .writeText(link)
        .then(()=>{
            alert("link copy done")
        })
        .catch((error)=>{
            console.log(error)
        })
    }


  return (
    <div>
        <div className="main">
            <div className=" flex xxs:flex-col md:flex-row md:items-center md:justify-between">
                <div className="title">
                    <Title className="text-2xl" title="All Gallery" />
                </div>
                <div className="path">
                    <Path  parent="Dashboard" child="Gallery" last="Gallery" pathName="/gallery" dynamic=""/>
                </div>
            </div>
            {/* main content area herer  */}
            <div className="main bg-white rounded-lg mt-6">
                <div className="item">
                    <div className="p-4 ">
                        {/* button area here start */}
                        <div className=" flex flex-wrap justify-between gap-4">
                            <div className="item flex gap-3 flex-wrap">
                                <div className="buton">
                                    <Button className="bg-white border border-gray-200 text-[#575864] gap-2" title="Upload" icon={<FiUploadCloud className="text-xl" />}/>
                                </div>
                                <div className="buton">
                                    <Button className="bg-white border border-gray-200 text-[#575864] gap-2" title="Download" icon={<FiUploadCloud className="text-xl" />}/>
                                </div>
                                <div className="buton">
                                    <Button className="bg-white border border-gray-200 text-[#575864] gap-2" title="Create folder" icon={<FiFolderPlus className="text-xl" />}/>
                                </div>
                                <div className="buton">
                                    <Button className="bg-white border border-gray-200 text-[#575864] gap-2" title="Filter" icon={<FiFilter className="text-xl" />}/>
                                </div>
                                <div className="buton">
                                    <Button className="bg-white border border-gray-200 text-[#575864] gap-2" title="View in" icon={<IoEyeOutline className="text-xl" />}/>
                                </div>
                            </div>
                            {/* search area here  */}
                            <div className=" max-w-[250px] ">
                            <SearchBar placeholder="Search here" />
                            </div>
                        </div>
                        {/* gallery header area here */}
                        <div className="main bg-[#f8f9fc] mt-4 rounded-lg p-3 flex items-center justify-between">
                            <div className="icon">
                                <Title className="text-[14px]" title="File"/>
                            </div>
                            <div className=" flex items-center gap-4">
                                <div className="filter">
                                    <select className="outline-none border-none text-[14px]">
                                        <option>Sort</option>
                                        <option>Name</option>
                                        <option>Day</option>
                                    </select>
                                </div>
                                <div onClick={()=>setGrid(true)} className=" cursor-pointer ">
                                   <FiGrid className={`text-xl`} />
                                </div>
                                <div onClick={()=>setGrid(false)} className=" cursor-pointer ">
                                   <RiListUnordered className={`text-xl`} />
                                </div>
                            </div>
                        </div>
                         {/* product gallery area here */}
                         <div className="main">
                                <div className="item grid xxs:grid-cols-2 md:grid-cols-3 gap-4 mt-4  ">
                                   {
                                    product?.map((item,index)=>
                                       <div key={index} className={` ${grid ? "flex flex-col" : "flex" } xxs:flex-col bg-[#f7fafc] rounded-xl items-center p-4`}>
                                            <div className="item   flex justify-center">
                                                <img className=" md:max-w-[150px] xxs:max-w-[100px] xxs:px-1" src={item?.image} alt="img" />
                                            </div>
                                            <p className="text-center text-[#979ca1] text-xs my-2">{item?.name}</p>
                                       </div>
                                    )
                                   }
                                </div>
                            </div>
                    </div>
                </div>
            </div>
             {/* gallery big image area here */}
             <div className=" bg-white mt-4 rounded-lg p-4">
                <div className="item">
                    <div className="image py-2 flex justify-center max-w-[400px]  mx-auto">
                        <img className=" w-full h-full" src="https://i.ibb.co.com/cNKTgN4/all-gallery-3.png" alt="image" />
                    </div>
                </div>
                <div className="lasr leading-5 border-b-[1px] py-4">
                    <Title className=" text-[16px]" title="Name" />
                    <p className="text-[#67768e]  text-[14px]">image 8</p>
                </div>
                <div className="lasr leading-5 border-b-[1px] py-4">
                    <Title className=" text-[16px]" title="Uploaded at" />
                    <p className="text-[#67768e] text-[14px]">20 Nov 2023 - 2:30 PM</p>
                </div>
                <div className="lasr leading-5 border-b-[1px] py-4">
                    <Title className=" text-[16px]" title="Modified at" />
                    <p className="text-[#67768e] text-[14px]">20 Nov 2023 - 2:30 PM</p>
                </div>
                <div className="lasr leading-5  py-4">
                    <Title className=" text-[16px]" title="Full url" />
                    <div className="item border flex justify-between py-3 px-4 mt-4 rounded-lg">
                        <div className="url">
                            <p className="text-[#606170] xxs:text-[10px] md:text-base">{link}</p>
                        </div>
                        <div onClick={linkCopy} className="icon cursor-pointer text-[#3281fd]">
                          <LuCopy />
                        </div>
                    </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Gallery