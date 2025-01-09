import React from 'react'
import Title from '../ui/Title'
import Path from '../ui/Path'
import PriceFormat from '../ui/PriceFormat'
import Button from '../ui/Button'
import { GrDeliver } from "react-icons/gr";

const OrderDetils = () => {
    const order = [
        {
            title:"Kristin Watson",
            image:"https://i.ibb.co.com/gmhwSzB/41.png",
            quantity:"20",
            price:"250"
        },
        {
            title:"Kristin Watson",
            image:"https://i.ibb.co.com/Hht5qs8/43.png",
            quantity:"6",
            price:"250"
        },
        {
            title:"Kristin Watson",
            image:"https://i.ibb.co.com/F5Y8wH2/44.png",
            quantity:"10",
            price:"250"
        },
    ]
  return (
    <div>
        <div className="main">
            <div className="title flex xxs:flex-col md:justify-between md:flex-row md:items-center ">
                <div className="title">
                    <Title title={`Order #2365896`} className="text-2xl" />
                </div>
                <div className="path-area">
                    <Path parent="Dashboard" child="Order" last="Order detail" pathName="/order-detils" dynamic="Order #2365896"  />
                </div>
            </div>
            {/* main area start here */}
            <div className="main mt-6">
                <div className="content md:flex gap-8 ">
                    <div className=" md:w-[55%] xxs:w-full flex flex-col gap-4 ">
                        <div className="order bg-white rounded-lg">
                            <div className="table  w-full p-4 ">
                                <table class=" w-full border-separate border-spacing-y-4 ">
                                <thead>
                                    <tr className="bg-[#f8f9fc] rounded-lg">
                                        <th className="text-start px-4 py-4 xxs:text-xs md:text-base">All Item</th>
                                        <th className="text-start px-4 py-4"></th>
                                        <th className="text-start px-4 py-4 xxs:text-xs md:text-base">Short</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        order.map((item,index)=>
                                            <tr className={`${index % 2 === 0 ? "bg-[#f7fafc]" : ""}rounded-lg`}>
                                                <td className="px-4">
                                                 <div className="main flex gap-2">
                                                    <div className="image">
                                                        <img className="h-[50px]" src={item?.image} alt="" />
                                                    </div>
                                                    <div className="pragraph">
                                                        <p className="text-xs text-[#6e616b]">Product name</p>
                                                        <p className="max-w-[50px] text-black font-semibold leading-[16px] mt-1 xxs:text-xs md:text-base">{item?.title}</p>
                                                    </div>
                                                 </div>
                                                </td>
                                                <td className="px-4 text-start ">
                                                  <p className="text-xs text-[#6e616b] xxs:text-xs md:text-base">Quantity</p>
                                                  <p className="max-w-[50px] text-black font-semibold xxs:text-xs md:text-base">{item?.quantity}</p>
                                                </td>
                                                <td className="px-4 ">
                                                    <p className="text-xs text-[#6e616b] xxs:text-xs md:text-base">Price</p>
                                                    <p className="max-w-[50px] text-black font-semibold xxs:text-xs md:text-base">
                                                        <PriceFormat price={item?.price}/>
                                                    </p>
                                                </td>
                                             </tr>
                                        )
                                    }
                                 </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="cartdet bg-white rounded-lg">
                            <div className="item p-4">
                            <table class=" w-full border-separate border-spacing-y-2">
                                <thead>
                                    <tr className="bg-[#f8f9fc]">
                                        <th className="text-start py-3 px-4 xxs:text-xs md:text-base">Cart Totals</th>
                                        <th className="text-start py-3 px-4 xxs:text-xs md:text-base">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="">
                                        <td className="px-4 border-b pb-2   ">
                                            <p className="text-[#957b77] xxs:text-xs md:text-base">Subtotal:</p>
                                        </td>
                                        <td className="px-4 border-b pb-2  ">
                                           <p className="font-semibold xxs:text-xs md:text-base">$120.00</p>
                                        </td>
                                    </tr>

                                    <tr className="">
                                        <td className="px-4 border-b pb-2   ">
                                            <p className="text-[#957b77] xxs:text-xs md:text-base">Shipping:</p>
                                        </td>
                                        <td className="px-4 border-b pb-2  ">
                                           <p className="font-semibold xxs:text-xs md:text-base">$10.00</p>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td className="px-4 border-b pb-2  ">
                                            <p className="text-[#957b77] xxs:text-xs md:text-base">Tax (GST):</p>
                                        </td>
                                        <td className="px-4 border-b pb-2  ">
                                           <p className="font-semibold xxs:text-xs md:text-base">$55.00</p>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td className="px-4  ">
                                            <p className=" font-bold xxs:text-xs md:text-base">Total Price:</p>
                                        </td>
                                        <td className="px-4  ">
                                           <p className="font-semibold text-red-700 xxs:text-xs md:text-base">$95.00</p>
                                        </td>
                                    </tr>
                                </tbody>
                             </table>
                            </div>
                        </div>
                    </div>
                    <div className=" md:w-[45%] xxs:w-full">
                        <div className=" flex flex-col gap-4">
                            {/* summery area start here */}
                            <div className="item bg-white rounded-lg">
                               <div className="item p-4">
                                   <div className="title">
                                        <Title title="Summary" />
                                    </div>
                                    <div className=" flex flex-col gap-2  mt-4">
                                        <div className=" flex  justify-between items-center gap-8  max-w-[200px]">
                                            <p className="text-[#866769] font-medium xxs:text-xs md:text-base">Order ID :</p>
                                            <p className="font-semibold xxs:text-xs md:text-base">#198089</p>
                                        </div>
                                        <div className=" flex justify-between items-center gap-8  max-w-[200px]">
                                            <p className="text-[#866769] font-medium xxs:text-xs md:text-base">Date :</p>
                                            <p className="font-semibold xxs:text-xs md:text-base">19.10.24</p>
                                        </div>
                                        <div className="  items-center gap-8  max-w-[200px] flex justify-between">
                                            <p className="text-[#866769] font-medium xxs:text-xs md:text-base">Total :</p>
                                            <p className="font-semibold text-red-700 xxs:text-xs md:text-base ">$120.00</p>
                                        </div>
                                    </div>
                               </div>
                            </div>
                             {/* shiping area start here */}
                             <div className=" bg-white rounded-lg">
                                <div className=" p-4 py-4 ">
                                    <div className="title">
                                        <Title title="Shipping Address" />
                                    </div>
                                    <p className="text-[#866769] xxs:text-xs md:text-base">3517 W. Gray St. Utica, Pennsylvania 57867</p>
                                </div>
                             </div>

                             {/* pment methid area start  here */}
                             <div className=" bg-white rounded-lg">
                                <div className=" p-4 py-4 ">
                                    <div className="title">
                                        <Title title="Payment Method" />
                                    </div>
                                    <p className="text-[#866769] xxs:text-xs md:text-base">
                                      Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net banking acceptance subject to device availability.
                                    </p>
                                </div>
                             </div>

                             {/* delivery area start here  */}
                             <div className=" bg-white rounded-lg">
                                <div className=" p-4 py-4 flex flex-col gap-2 ">
                                    <div className="title">
                                        <Title title="Expected Date Of Delivery" />
                                    </div>
                                    <p className="text-[#4fc966] xxs:text-xs md:text-base">20 Nov 2023</p>
                                    <div className="buton-area">
                                        <Button className=" w-full flex justify-center bg-white text-[#3180fc] hover:bg-[#3180fc] duration-300 hover:text-white" title="Track Order" icon={<GrDeliver className="text-xl" />} />
                                    </div>
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

export default OrderDetils