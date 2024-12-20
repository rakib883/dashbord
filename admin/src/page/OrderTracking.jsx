import React from 'react';
import Title from '../ui/Title';
import Path from '../ui/Path';
import Button from '../ui/Button';
import { IoMdCheckmark } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";

const steps = [
  { title: 'Receiving orders', time: '05:43 AM', status: 'completed' },
  { title: 'Order processing', time: '01:21 PM', status: 'completed' },
  { title: 'Being delivered', time: 'Processing', status: 'in-progress' },
  { title: 'Delivered', time: 'Pending', status: 'pending' },
];

const OrderTracking = () => {
  return (
    <div className="main">
        {/* title area here  */}
        <div className=" flex justify-between items-center">
            <div className="title">
                <Title className="text-2xl" title="Track Order" />
            </div>
            <div className="main">
                <Path parent="Dashboard" child="Order" last="Track Order"  pathName="/order-tracking" />
            </div>
        </div>

        {/* single product area here */}
        <div className="main mt-4 bg-white rounded-lg">
            <div className="item flex">
                <div className="image-area w-[40%]">
                   <div className="image w-full">
                      <img className="w-full h-full" src="https://i.ibb.co.com/9GRSpMz/21.png" alt="" />
                   </div>
                </div>
                <div className="detils  flex-1">
                    <div className="item mt-4">
                        <div className="title">
                            <Title title="Pouch Pocket Hoodie Orange" className="text-xl" />
                        </div>
                        <div className="detils flex flex-col gap-2  mt-4">
                            <div className=" flex items-center">
                                <p className="text-[#6e82a1]">Order ID : </p>
                                <p className="font-semibold">#192847</p>
                            </div>
                            <div className=" flex  items-center">
                                <p className="text-[#6e82a1]">Brand: </p>
                                <p className="font-semibold  ">Nesle</p>
                            </div>
                            <div className=" flex  items-center">
                                <p className="text-[#6e82a1]">Order Placed: </p>
                                <p className="font-semibold text-start">10.10.24</p>
                            </div>
                            <div className=" flex items-center">
                                <p className="text-[#6e82a1]">Quantity: </p>
                                <p className="font-semibold">1</p>
                            </div>
                        </div>
                        <div className="button flex items-center gap-4 mt-4">
                            <div className="buto w-[50%]">
                                <Button className="w-full flex items-center justify-center" title="View Shop"/>
                            </div>
                            <div className="buto w-[50%]">
                                <Button className="w-full flex items-center justify-center" title="View Product"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       {/* processing area start here  */}
       <div className="main mt-6 bg-white">
            <div className="header p-4">
                <div className="title">
                    <Title title="Detail" />
                    <p className=" text-[#575864] ">Your items is on the way. Tracking information will be available within 24 hours.</p>
                </div>
            </div>
            <div className="main flex justify-between  p-4 rounded-lg pt-4">
                <div className="main  w-full relative">
                    <div className="bg-[#2275fc] h-2 w-full"></div>
                   <div className=" absolute top-[-20px] flex justify-center w-full">
                       <div className="item bg-[#2275fc] w-[50px] h-[50px] rounded-full flex justify-center items-center text-white text-2xl  ">
                            <div className="item">
                               <IoMdCheckmark />
                            </div>
                        </div>
                   </div>
                   <div className="tit">
                      <Title title="Receiving orders" className="text-center mt-8" />
                      <p className="text-center">05.43 AM</p>
                   </div>
                </div>
                <div className="main  w-full relative">
                    <div className="bg-[#2275fc] h-2 w-full"></div>
                   <div className=" absolute top-[-20px] flex justify-center w-full">
                       <div className="item bg-[#2275fc] w-[50px] h-[50px] rounded-full flex justify-center items-center text-white text-2xl  ">
                            <div className="item">
                               <IoMdCheckmark />
                            </div>
                        </div>
                   </div>
                   <div className="tit">
                      <Title title="Order processing" className="text-center mt-8" />
                      <p className="text-center">01.43 AM</p>
                   </div>
                </div>
                <div className="main  w-full relative">
                    <div className="bg-[#2275fc] h-2 w-full"></div>
                   <div className=" absolute top-[-20px] flex justify-center w-full">
                       <div className="item bg-[#2275fc] w-[50px] h-[50px] rounded-full flex justify-center items-center text-white text-2xl  ">
                            <div className="item">
                               <IoMdCheckmark />
                            </div>
                        </div>
                   </div>
                   <div className="tit">
                      <Title title="Being delivered" className="text-center mt-8" />
                      <p className="text-center">05.43 AM</p>
                   </div>
                </div>
                <div className="main  w-full relative">
                    <div className="bg-[#ecf0f4] h-2 w-full"></div>
                   <div className=" absolute top-[-20px] flex justify-center w-full">
                       <div className="item bg-[#ecf0f4] w-[50px] h-[50px] rounded-full flex justify-center items-center text-white text-2xl  ">
                            <div className="item">
                               <IoMdCheckmark />
                            </div>
                        </div>
                   </div>
                   <div className="tit">
                      <Title title="Delivered" className="text-center mt-8 text-[#ecf0f4]" />
                      <p className="text-center text-[#ecf0f4]">Pending</p>
                   </div>
                </div>
            </div>
       </div>
    </div>     
  );
};

export default OrderTracking;
