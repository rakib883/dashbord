import React from 'react'
import { FiShoppingBag } from "react-icons/fi";
import { IoMdTrendingUp } from "react-icons/io";
import TotalSale from '../ui/TotalSale';
import { FiDollarSign } from "react-icons/fi";
import Product from './Product';
import Seller from './Seller';
import OrderDetils from './OrderDetils';
import NewComment from './NewComment';


export const DashBord = () => {
    const totalSale = [1,2,3,4,5,6,8,9,10]
    const totalIncome = [1,2,3,4,5,6,8,9,10]
    const orderPaid = [1,2,3,4,5,6,7,8,10]
    const totalVisitor = [1,2,3,4,5,6,7,8,10]
  return (
    <div>
      <div className="top-chart grid grid-cols-1 md:grid-cols-2  gap-4">
          <div className="first bg-white rounded-lg">
             <div className="content xxs:m-1">
                <div className="item flex justify-between xxs:p-1 lg:p-4 ">
                    <div className="shape flex gap-4">
                      <div className="shape polygon bg-[#22c55e] h-10 w-10 lg:h-16 lg:w-16 flex justify-center items-center ">
                         <FiShoppingBag className="lg:text-2xl text-white" />
                      </div>
                      <div className="text">
                         <div className="title">
                             <p className="text-[#5f5c69] xxs:text-[12px]">Total sale</p>
                         </div>
                         <div className="title">
                             <p className=" xxs:text-[16px] lg:text-[30px] font-bold text-[#111111]">34995</p>
                         </div>
                      </div>
                    </div>
                    <div className="text">
                      <div className="tren flex gap-1 items-center text-[#27c664]">
                         <IoMdTrendingUp className=" xxs:text-[16px] lg:text-xl font-bold" />
                         <div className=" font-bold ">
                            1.15%
                         </div>
                      </div>
                      <div className="value"></div>
                    </div>
                </div>
                {/* chart area start */}
                <div className="chart bg-gree ">
                   <div className="item ">
                         <TotalSale sendItem={totalSale}/> 
                   </div>
                </div>
             </div>
          </div>
          <div className="first bg-white rounded-lg">
          <div className="content xxs:m-1">
                <div className="item flex justify-between xxs:p-1 lg:p-4 ">
                    <div className="shape flex gap-4">
                      <div className="shape polygon bg-[#ff5200] h-10 w-10 lg:h-16 lg:w-16 flex justify-center items-center ">
                         <FiShoppingBag className="lg:text-2xl text-white" />
                      </div>
                      <div className="text">
                         <div className="title">
                             <p className="text-[#5f5c69] xxs:text-[12px]">Total sale</p>
                         </div>
                         <div className="title">
                             <p className=" xxs:text-[16px] lg:text-[30px] font-bold text-[#111111]">34995</p>
                         </div>
                      </div>
                    </div>
                    <div className="text">
                      <div className="tren flex gap-1 items-center text-[#ff5200]">
                         <IoMdTrendingUp className=" xxs:text-[16px] lg:text-xl font-bold" />
                         <div className=" font-bold ">
                            1.15%
                         </div>
                      </div>
                      <div className="value"></div>
                    </div>
                </div>
                {/* chart area start */}
                <div className="chart bg-gree ">
                   <div className="item ">
                         <TotalSale sendItem={totalSale}/> 
                   </div>
                </div>
             </div>
          </div>
          <div className="first bg-white rounded-lg">
          <div className="content xxs:m-1">
                <div className="item flex justify-between xxs:p-1 lg:p-4 ">
                    <div className="shape flex gap-4">
                      <div className="shape polygon bg-[#cbd5e1] h-10 w-10 lg:h-16 lg:w-16 flex justify-center items-center ">
                         <FiShoppingBag className="lg:text-2xl text-white" />
                      </div>
                      <div className="text">
                         <div className="title">
                             <p className="text-[#5f5c69] xxs:text-[12px]">Total sale</p>
                         </div>
                         <div className="title">
                             <p className=" xxs:text-[16px] lg:text-[30px] font-bold text-[#111111]">34995</p>
                         </div>
                      </div>
                    </div>
                    <div className="text">
                      <div className="tren flex gap-1 items-center text-[#cbd5e1]">
                         <IoMdTrendingUp className=" xxs:text-[16px] lg:text-xl font-bold" />
                         <div className=" font-bold ">
                            1.15%
                         </div>
                      </div>
                      <div className="value"></div>
                    </div>
                </div>
                {/* chart area start */}
                <div className="chart bg-gree ">
                   <div className="item ">
                         <TotalSale sendItem={totalSale}/> 
                   </div>
                </div>
             </div>
          </div>
          <div className="first bg-white rounded-lg">
          <div className="content xxs:m-1">
                <div className="item flex justify-between xxs:p-1 lg:p-4 ">
                    <div className="shape flex gap-4">
                      <div className="shape polygon bg-[#2377fc] h-10 w-10 lg:h-16 lg:w-16 flex justify-center items-center ">
                         <FiShoppingBag className="lg:text-2xl text-white" />
                      </div>
                      <div className="text">
                         <div className="title">
                             <p className="text-[#5f5c69] xxs:text-[12px]">Total sale</p>
                         </div>
                         <div className="title">
                             <p className=" xxs:text-[16px] lg:text-[30px] font-bold text-[#111111]">34995</p>
                         </div>
                      </div>
                    </div>
                    <div className="text">
                      <div className="tren flex gap-1 items-center text-[#2377fc]">
                         <IoMdTrendingUp className=" xxs:text-[16px] lg:text-xl font-bold" />
                         <div className=" font-bold ">
                            1.15%
                         </div>
                      </div>
                      <div className="value"></div>
                    </div>
                </div>
                {/* chart area start */}
                <div className="chart bg-gree ">
                   <div className="item ">
                         <TotalSale sendItem={totalSale}/> 
                   </div>
                </div>
             </div>
          </div>
      </div>
      {/* recent order area start area here */}
       <div className="">
          <Product/>
          {/* top seller area start */}
          <Seller/>
          {/* order dummery area start here */}
          <OrderDetils/>
          <NewComment/>
       </div>
      {/* recent prder area end */}
    </div>
  )
}

export default DashBord 