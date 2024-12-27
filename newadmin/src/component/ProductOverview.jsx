import React from 'react'
import Title from '../ui/Title'
import PriceFormat from '../ui/PriceFormat'
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Pagenation from '../ui/Pagenation';

const ProductOverview = () => {
    const fakeData = [
        {
          image: "https://i.ibb.co.com/Dgby4k5/1.png",
          title: "Soft Fluffy Cats",
          productId: "#123",
          price: "11.70",
          quantity: "12",
          sale: "on sale",
          Revenue: "228",
          status: "Not Available",
          date: "2024-11-24", // Today's date
        },
        {
          image: "https://i.ibb.co.com/Dgby4k5/1.png",
          title: "Soft Fluffy Cats",
          productId: "#124",
          price: "11.70",
          quantity: "12",
          sale: "on sale",
          Revenue: "228",
          status: "Not Available",
          date: "2024-11-23", // Yesterday's date
        },
        {
          image: "https://i.ibb.co.com/Dgby4k5/1.png",
          title: "Soft Fluffy Cats",
          productId: "#125",
          price: "11.70",
          quantity: "12",
          sale: "on sale",
          Revenue: "228",
          status: "Not Available",
          date: "2024-11-22", // Two days ago
        },
        {
          image: "https://i.ibb.co.com/Dgby4k5/1.png",
          title: "Soft Fluffy Cats",
          productId: "#126",
          price: "11.70",
          quantity: "12",
          sale: "on sale",
          Revenue: "228",
          status: "Not Available",
          date: "2024-11-21", // Three days ago
        },
      ];
  return (
    <div className="px-4  ">
        <div className="main  overflow-x-auto   scroll-container  ">
           <div className="item w-[1000px]">
             {/* title area start here  */}
             <div className="main flex justify-between">
                <div className="title w-[20%]">
                    <Title className="text-[14px]" title="Name" />
                </div>
                <div className="title w-[10%]">
                    <Title className="text-[14px]" title="Product ID" />
                </div>
                <div className="title  w-[10%] ">
                    <Title className="text-[14px]" title="Price" />
                </div>
                <div className="title w-[10%]">
                    <Title className="text-[14px] w-full " title="Quantity" />
                </div>
                <div className="title w-[10%]">
                    <Title className="text-[14px]" title="Sale" />
                </div>
                <div className="title w-[10%]">
                    <Title className="text-[14px]" title="Revenue" />
                </div>
                <div className="title text-start w-[10%] ">
                    <Title className="text-[14px] w-full" title="Status" />
                </div>
             </div>
            {/* title area end here */}



                {/* overview product area start */}
                <div className="main  element mt-4 ">
                    <div className="item max-h-[300px] ">
                        {
                           fakeData.map((item,index)=>
                            <div key={index} className="main my-4 hover:bg-[#eef3f7] group flex justify-between items-center">
                                 {/* name area here */}
                                 <div className="main flex items-center gap-2 w-[20%] cursor-pointer">
                                    <div className="image bg-[#eef3f7] rounded-md">
                                        <img className="lg:p-2 xxs:p-2 xxs:h-[40px]" src={item?.image} alt="" />
                                    </div>
                                    <div className="title">
                                        <p className="text-[#353535] group-hover:text-indigo-600 duration-300 lg:text-[16px] xxs:text-[10px] font-medium">{item?.title}</p>
                                    </div>
                                 </div>
                                 {/* product id area here */}
                                 <div className=" w-[10%]">
                                    <p className="lg:text-[16px] xxs:text-[10px]">{item?.productId}</p>
                                 </div>
                                 {/* price area here */}
                                 <div className="price-area w-[10%] lg:text-[16px] xxs:text-[10px]">
                                    <PriceFormat price={item?.price}/>
                                 </div>
                                 {/* quantity area here */}
                                 <div className=" w-[10%]">
                                    <p className="lg:text-[16px] xxs:text-[10px]">{item?.quantity}</p>
                                 </div>
                                 {/* sale area here */}
                                 <div className=" w-[10%]">
                                    <p className="lg:text-[16px] xxs:text-[10px]">{item?.sale}</p>
                                 </div>
                                 {/* revinew area here */}
                                 <div className="revinew w-[10%]">
                                    <p className="lg:text-[16px] xxs:text-[10px]">{item?.Revenue}</p>
                                 </div>
                                 {/* status here */}
                                 <div className="status w-[10%]">
                                    <p className="lg:text-[16px] xxs:text-[10px]">{item?.status}</p>
                                 </div>
                            </div>
                        ) 
                        }
                    </div>
                </div>
                {/* over view product area end */}
           </div>
        </div>
        {/* pagenation area stat */}
        <div className="pegenation mt-4">
            <div className="pagenation flex xxs:flex-col lg:flex-row justify-between items-center">
                <div className="text">
                    <p className="xxs:text-[10px] lg:text-[14px] text-[#9da0a5]">Showing 5 entries</p>
                </div>
                <div className="pagenation flex  items-center gap-4">
                   <Pagenation/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductOverview