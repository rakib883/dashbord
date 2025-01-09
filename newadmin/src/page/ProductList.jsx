import React, { useEffect, useState } from 'react'
import Title from '../ui/Title'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { LuSearch } from "react-icons/lu";
import Button from '../ui/Button';
import { FiPlus } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import PriceFormat from '../ui/PriceFormat';
import Action from '../ui/Action';
import SearchBar from '../ui/SearchBar';


const ProductList = () => {
    const location = useLocation()
    // demo product area start here
    const demoData = [
        {
            title : "Dog Food, Chicken & Chicken Liver Recipe...",
            image:"https://i.ibb.co.com/dKBbXf6/10-1.png",
            id:"#1523365",
            price:"350",
            quantity:"1638",
            sale:"20",
            stock:"out offf stock",
            startDate:"20.10.24",
        },
        {
            title : "Dog Food, Chicken & Chicken Liver Recipe...",
            image:"https://i.ibb.co.com/dKBbXf6/10-1.png",
            id:"#1523365",
            price:"350",
            quantity:"1638",
            sale:"20",
            stock:"out offf stock",
            startDate:"20.10.24",
        },
        {
            title : "Dog Food, Chicken & Chicken Liver Recipe...",
            image:"https://i.ibb.co.com/dKBbXf6/10-1.png",
            id:"#1523365",
            price:"350",
            quantity:"1638",
            sale:"20",
            stock:"out offf stock",
            startDate:"20.10.24",
        },
        {
            title : "Dog Food, Chicken & Chicken Liver Recipe...",
            image:"https://i.ibb.co.com/dKBbXf6/10-1.png",
            id:"#1523365",
            price:"350",
            quantity:"1638",
            sale:"20",
            stock:"out offf stock",
            startDate:"20.10.24",
        },
        {
            title : "Dog Food, Chicken & Chicken Liver Recipe...",
            image:"https://i.ibb.co.com/dKBbXf6/10-1.png",
            id:"#1523365",
            price:"350",
            quantity:"1638",
            sale:"20",
            stock:"out offf stock",
            startDate:"20.10.24",
        },
        {
            title : "Dog Food, Chicken & Chicken Liver Recipe...",
            image:"https://i.ibb.co.com/dKBbXf6/10-1.png",
            id:"#1523365",
            price:"350",
            quantity:"1638",
            sale:"20",
            stock:"out offf stock",
            startDate:"20.10.24",
        },
        {
            title : "Dog Food, Chicken & Chicken Liver Recipe...",
            image:"https://i.ibb.co.com/dKBbXf6/10-1.png",
            id:"#1523365",
            price:"350",
            quantity:"1638",
            sale:"20",
            stock:"out offf stock",
            startDate:"20.10.24",
        },
        {
            title : "Dog Food, Chicken & Chicken Liver Recipe...",
            image:"https://i.ibb.co.com/dKBbXf6/10-1.png",
            id:"#1523365",
            price:"350",
            quantity:"1638",
            sale:"20",
            stock:"out offf stock",
            startDate:"20.10.24",
        },
        {
            title : "Dog Food, Chicken & Chicken Liver Recipe...",
            image:"https://i.ibb.co.com/dKBbXf6/10-1.png",
            id:"#1523365",
            price:"350",
            quantity:"1638",
            sale:"20",
            stock:"out offf stock",
            startDate:"20.10.24",
        },
        {
            title : "Dog Food, Chicken & Chicken Liver Recipe...",
            image:"https://i.ibb.co.com/dKBbXf6/10-1.png",
            id:"#1523365",
            price:"350",
            quantity:"1638",
            sale:"20",
            stock:"out offf stock",
            startDate:"20.10.24",
        },
    ]
    const [instantdata,setInstantData] = useState(demoData)
    const [filter,setFilter] = useState(30)
    useEffect(()=>{
        if(filter){
            const product = demoData.slice(0,filter)
            setInstantData(product)
        }
    },[filter])
  return (
    <div>
        <div className="main">
            <div className="title flex xxs:flex-col md:flex-row justify-between md:items-center ">
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
                       <p>Ecomarch</p>
                      <MdKeyboardArrowRight className="text-xl" />
                    </div>
                    <div className="item flex items-center gap-1">
                         <p className={location.pathname === '/product-list' ? 'text-gray-500' : ''}>
                            Add Product
                        </p>
                        <MdKeyboardArrowRight className="text-xl" />
                    </div>
                  </div>
                </div>
            </div>
            {/* main product area start */}
            <div className="main mt-8 bg-white rounded-lg p-4">
                <div className="main">
                    <div className="title">
                        <p className="md:text-base xxs:text-center xxs:text-xs text-[#a5a7a9]"> Tip search by Product ID: Each product is provided with a unique ID, which you can rely on to find the exact product you need.</p>
                    </div>
                    {/* header area start */}
                    <div className="main flex xxs:flex-col md:flex-row md:gap-8 xxs:gap-4 justify-between items-center mt-4 ">
                        <div className=" flex justify-between items-center gap-4">
                            <div className="text">
                                <p className="md:text-[14px] xxs:text-xs text-[#a5a7a9]">Showing</p>
                            </div>
                            <div className="text">
                                <select onChange={(e)=>setFilter(e.target.value)} className=" md:text-base xxs:text-xs outline-none border md:px-4 xxs:px-1 md:py-1.5 xxs:py-[2px] rounded-md cursor-pointer " name="" id="">
                                    <option value="2">2</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                </select>
                            </div>
                            <div className="text">
                                <p className="md:text-[14px] xxs:text-xs text-[#a5a7a9]">entries</p>
                            </div>
                        </div>
                       <div className="item  flex-1">
                         <SearchBar placeholder="Search  here" />
                       </div>
                        <div className="">
                            <Button className="md:py-4 xxs:py-2 md:px-14 w-full bg-white text-[#3381fc] border border-[#3381fc] hover:bg-[#3381fc] hover:text-white duration-300" icon={<FiPlus className="text-xl" />} title="Add now"/>
                        </div>
                    </div>
                </div>
                {/* product table area start */}
                <div className="main overflow-x-auto scroll-container mt-6">
                    <table className="w-[1500px]">
                        <thead className="rounded-xl" >
                            <tr className="bg-[#f8f9fc] px-4 rounded-2xl">
                                <th className="text-start py-3.5 px-4">Product</th>
                                <th className="text-start py-3.5 px-4">Product ID</th>
                                <th className="text-start py-3.5 px-4">Price</th>
                                <th className="text-start py-3.5 px-4">Quantity</th>
                                <th className="text-start py-3.5 px-4">Sale</th>
                                <th className="text-start py-3.5 px-4">Stock</th>
                                <th className="text-start py-3.5 px-4">Start date</th>
                                <th className="text-start py-3.5 px-4">Action</th>
                            </tr>
                        </thead>
                        <tbody className="my-4">
                           {
                            instantdata.map((item,index)=>(
                                <tr key={index} className={` ${ index % 2 === 0 ? "bg-[#f8f9fc]" : ""} py-4 px-4 `}>
                                    <td>
                                        <div className="image flex items-center gap-2 cursor-pointer">
                                            <img className="xxs:h-[30px] md:h-[50px] " src={item?.image} alt="" />
                                            <p className="hover:text-indigo-600 duration-300 xxs:text-xs md:text-base">{item?.title}</p>
                                        </div>
                                    </td>
                                    <td className="px-4 xxs:text-xs md:text-base">{item?.id}</td>
                                    <td className="px-4">
                                        <PriceFormat price={item?.price} className="xxs:text-xs md:text-base" />
                                    </td>
                                    <td className="px-4 xxs:text-xs md:text-base">{item?.quantity}</td>
                                    <td className="px-4 xxs:text-xs md:text-base">{item?.sale}</td>
                                    <td className="px-4 xxs:text-xs md:text-base  text-yellow-600">{item?.stock}</td>
                                    <td className="px-4 xxs:text-xs md:text-base">{item?.startDate}</td>
                                    <td className="px-4 xxs:text-xs md:text-base">
                                       <Action/>
                                    </td>
                               </tr>
                            ))
                           }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default ProductList