import React from 'react'
import Title from '../ui/Title'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { LuSearch } from 'react-icons/lu'
import Button from '../ui/Button'
import { FiPlus } from 'react-icons/fi'
import Action from '../ui/Action'
import Pagenation from '../ui/Pagenation'
import Path from '../ui/Path'
import SearchBar from '../ui/SearchBar'

const Attributes = () => {
    const fakeData = [
        {
            name:"color",
            value:"blue,green,white",
        },
        {
            name:"Size",
            value:"blue,green,white",
        },
        {
            name:"Material",
            value:"blue,green,white",
        },
        {
            name:"Style",
            value:"blue,green,white",
        },
        {
            name:"size",
            value:"S, M, L, XL",
        },
        {
            name:"Material",
            value:"Cotton, Polyster",
        },
        {
            name:"Style",
            value:"Classic, mordern, ethnic, western",
        },
        {
            name:"Meat Type",
            value:"Fresh, Frozen, Marinated",
        },
        {
            name:"Weight",
            value:"1kg, 2kg, 3kg, over 5kg",
        },
        {
            name:"Packaging",
            value:"Plastic box, paper, nylon, tin cans",
        },
        {
            name:"Kind of food",
            value:"Dried food, wet food, supplementary food",
        },
    ]
  return (
    <div>
        <div className="main">
            <div className="title">
                <div className="title flex xxs:flex-col md:flex-row md:justify-between md:items-center">
                    <div className="main">
                        <Title title="All attributes" className="text-2xl" />
                    </div>
                   <div className="path ">
                       <Path parent="Dashbord" child="Attributes" last="All-attributes" pathName="/add-attributes" />
                    </div>
                </div>
            </div>
            {/* attributes body area here  */}
            <div className="main bg-white rounded-lg mt-6">
                <div className="p-4">
                    <div className="main">
                        {/* header area start */}
                        <div className="main flex xxs:flex-col md:flex-row md:gap-8 xxs:gap-2 justify-between items-center mt-4 ">
                            <div className=" flex justify-between items-center gap-4">
                                <div className="text">
                                    <p className="text-[14px] text-[#a5a7a9]">Showing</p>
                                </div>
                                <div className="text">
                                    <select onChange={(e)=>setFilter(e.target.value)} className="outline-none border md:px-4 md:py-1.5 xxs:px-2 xxs:py-1 rounded-md cursor-pointer md:text-base xxs:text-xs   " name="" id="">
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
                            <div className=" flex-1">
                              <SearchBar placeholder="Search here" />
                            </div>
                            <div className="button"> 
                                <Button className="py-4 px-14 bg-white text-[#3381fc] border border-[#3381fc] hover:bg-[#3381fc] hover:text-white duration-300" icon={<FiPlus className="text-xl" />} title="Add now"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* attribute table area start here  */}
                <div className="main">
                    <div className="content p-4  overflow-x-auto">
                      <table class="table-auto w-full border-separate border-spacing-y-4 min-w-[500px] ">
                        <thead>
                            <tr className="bg-[#f8f9fc] rounded-lg">
                                <th className="text-start py-4 px-4">Catagory</th>
                                <th className="text-start py-4 px-4">Value</th>
                                <th className="text-start py-4 px-4 ">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                fakeData.map((item,index)=>
                                    <tr key={index} className={`${ index % 2 === 0 && "bg-[#f7fafc]"} hover:bg-[#f7fafc] duration-300 cursor-pointer  rounded-lg `}>
                                        <td className="px-4 py-4">
                                            <p className=" first-letter:uppercase font-semibold xxs:text-xs md:text-base">{item?.name}</p>
                                        </td>
                                        <td className="px-4 py-4">
                                            <p className="first-letter:uppercase xxs:text-xs md:text-base">{item?.value}</p>
                                        </td>
                                        <td className="px-4 py-4 xxs:text-xs md:text-base">
                                            <Action/>
                                        </td>
                                   </tr>
                                )
                            }
                        </tbody>
                     </table>
                    </div> 
                    {/* pagenation area start here */}
                    <div className=" flex xxs:flex-col md:flex-row justify-between items-center p-4">
                        <div className="text">
                            <div className="title">
                                <p className="md:text-[16px] xxs:text-xs text-[#a3a2b0]">Showing 10 entries</p>
                            </div>
                        </div>
                        <div className="pagenation xxs:mt-4">
                            <Pagenation/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Attributes