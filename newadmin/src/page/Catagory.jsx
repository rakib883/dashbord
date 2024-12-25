import React, { useEffect, useState } from 'react'
import Title from '../ui/Title'
import { Link, useLocation } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { LuSearch } from 'react-icons/lu'
import Button from '../ui/Button'
import { FiPlus } from 'react-icons/fi'
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import PriceFormat from '../ui/PriceFormat'
import { GoEye } from "react-icons/go";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { PiBowlFoodLight } from "react-icons/pi";
import { MdOutlineFoodBank } from "react-icons/md";
import Pagenation from '../ui/Pagenation'
import Action from '../ui/Action'
import SearchBar from '../ui/SearchBar'
import Path from '../ui/Path'

const Catagory = () => {
    const location = useLocation()
    const catagoryItem = [
        {
            title:"Dried food",
            image:"https://i.ibb.co.com/fvbPWxx/51.png",
            icon:<MdOutlineEmojiFoodBeverage />,
            quantity:"1638",
            sale:"50",
            startDate:"20.10.24",

        },
        {
            title:"Wed food",
            image:"https://i.ibb.co.com/RQr734f/upload-1.png",
            icon:<PiBowlFoodLight />,
            quantity:"1638",
            sale:"50",
            startDate:"20.10.24",

        },
        {
            title:"supplement",
            image:"https://i.ibb.co.com/p1XfJC2/4.png",
            icon:<MdOutlineFoodBank />,
            quantity:"1638",
            sale:"50",
            startDate:"20.10.24",

        },
        {
            title:"Dried food",
            image:"https://i.ibb.co.com/SJsgyzh/14.png",
            icon:<MdOutlineEmojiFoodBeverage />,
            quantity:"1638",
            sale:"50",
            startDate:"20.10.24",

        },
        {
            title:"Dried food",
            image:"https://i.ibb.co.com/dKBbXf6/10-1.png",
            icon:<MdOutlineEmojiFoodBeverage />,
            quantity:"1638",
            sale:"50",
            startDate:"20.10.24",

        },
        {
            title:"Dried food",
            image:"https://i.ibb.co.com/fvbPWxx/51.png",
            icon:<MdOutlineEmojiFoodBeverage />,
            quantity:"1638",
            sale:"50",
            startDate:"20.10.24",

        },
        {
            title:"Dried food",
            image:"https://i.ibb.co.com/fvbPWxx/51.png",
            icon:<MdOutlineEmojiFoodBeverage />,
            quantity:"1638",
            sale:"50",
            startDate:"20.10.24",

        },
        {
            title:"Dried food",
            image:"https://i.ibb.co.com/fvbPWxx/51.png",
            icon:<MdOutlineEmojiFoodBeverage />,
            quantity:"1638",
            sale:"50",
            startDate:"20.10.24",

        },
        {
            title:"Dried food",
            image:"https://i.ibb.co.com/fvbPWxx/51.png",
            icon:<MdOutlineEmojiFoodBeverage />,
            quantity:"1638",
            sale:"50",
            startDate:"20.10.24",

        },
        {
            title:"Dried food",
            image:"https://i.ibb.co.com/fvbPWxx/51.png",
            icon:<MdOutlineEmojiFoodBeverage />,
            quantity:"1638",
            sale:"50",
            startDate:"20.10.24",

        },
        {
            title:"Dried food",
            image:"https://i.ibb.co.com/fvbPWxx/51.png",
            icon:<MdOutlineEmojiFoodBeverage />,
            quantity:"1638",
            sale:"50",
            startDate:"20.10.24",

        },
        {
            title:"Dried food",
            image:"https://i.ibb.co.com/fvbPWxx/51.png",
            icon:<MdOutlineEmojiFoodBeverage />,
            quantity:"1638",
            sale:"50",
            startDate:"20.10.24",

        },
        {
            title:"Dried food",
            image:"https://i.ibb.co.com/fvbPWxx/51.png",
            icon:<MdOutlineEmojiFoodBeverage />,
            quantity:"1638",
            sale:"50",
            startDate:"20.10.24",

        },
    ]

    // catagory item
    const [catagory,setCatagory] = useState(catagoryItem)

    // filter area start 
    const [filter,setFilter] = useState(100)
    useEffect(()=>{
        if(filter){
            const product = catagoryItem.slice(0,filter)
            setCatagory(product)
        }
    },[filter])
    console.log(catagory)
  return (
    <div>
        <div className="main">
            <div className="title">
             <div className="title flex justify-between items-center">
                <div className="main">
                    <Title title="Product List" className="text-2xl" /> 
                </div>
                <div className="path">
                  <Path parent="Dashboard" child="Category" last="All category" pathName="/catagory-list" dynamic="" />
                </div>
               </div>
             </div>
             {/* main catagory area start here */}
             <div className="main bg-white p-4 rounded-lg mt-4">
                <div className="item">
                    <div className="main flex gap-8 justify-between items-center mt-4 ">
                        <div className=" flex justify-between items-center gap-4">
                            <div className="text">
                                <p className="text-[14px] text-[#a5a7a9]">Showing</p>
                            </div>
                            <div className="text">
                                <select onChange={(e)=>setFilter(e.target.value)} className="outline-none border px-4 py-1.5 rounded-md cursor-pointer " name="" id="">
                                    <option value="2">2</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                </select>
                            </div>
                            <div className="text">
                                <p className="text-[14px] text-[#a5a7a9]">entries</p>
                            </div>
                        </div>
                        <div className="sear flex-1">
                            <SearchBar placeholder="Search here"/>
                        </div>
                        <div className="button"> 
                            <Button className="py-4 px-14 bg-white text-[#3381fc] border border-[#3381fc] hover:bg-[#3381fc] hover:text-white duration-300" icon={<FiPlus className="text-xl" />} title="Add now"/> 
                        </div>
                    </div>
                </div>
                {/* product table area start */}
                <div className="main overflow-x-auto scroll-container">
                   <table class="table-auto w-full border-separate border-spacing-y-4">
                        <thead className="bg-[#f8f9fc] ">
                            <tr>
                                <th className="text-start px-4 py-2">Catagory</th>
                                <th className="text-start px-4 py-2">Icon</th>
                                <th className="text-start px-4 py-2">Quantity</th>
                                <th className="text-start px-4 py-2">Sale</th>
                                <th className="text-start px-4 py-2">Start date</th>
                                <th className="text-start px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            
                                {
                                    catagory.map((item,index)=>(
                                        <tr key={index} className={`${index % 2 === 0 ? "bg-[#f8f9fc]" : ""} cursor-pointer hover:bg-[#f8f9fc] duration-300`}>
                                            <td className="px-4 py-4 text-base">
                                                <div className="item flex items-center gap-2">
                                                    <img className="w-[50px] h-[50px]" src={item?.image} alt="" />
                                                    <p className="font-semibold hover:text-indigo-600 duration-300">{item?.title}</p>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-base">
                                                <div className="icon">
                                                    <p className="text-2xl text-[#7c7c7e]">{item?.icon}</p>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-base">
                                                <PriceFormat price={item?.quantity} />
                                            </td>
                                            <td className="px-4 py-4 text-base">
                                                <p>{item?.sale}</p>
                                            </td>
                                            <td className="px-4 py-4 text-base">
                                                <p>{item?.startDate}</p>
                                            </td>
                                            <td className="px-4 py-4 text-base">
                                                <Action/>
                                            </td>
                                        </tr>
                                    ))
                                }
                        </tbody>
                    </table>
                    {/* pagenation area start here */}
                    <div className="main">
                        <div className="border"></div>
                        <div className=" flex  justify-between items-center">
                            <div className="title">
                                <p className="text-[16px] text-[#a3a2b0]">Showing 10 entries</p>
                            </div>
                            <div className="pagenation py-4">
                                <Pagenation/>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Catagory