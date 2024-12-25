import React, { useEffect, useRef, useState } from 'react';
import Title from '../ui/Title';
import { BsThreeDots } from "react-icons/bs";
import PriceFormat from '../ui/PriceFormat';

const Order = () => {
  const orderData = [
    {
      image: "https://i.ibb.co.com/dKBbXf6/10-1.png",
      title: "Prodotti per il tuo cane...",
      price: "1270",
      delivery: "20 Nov 2023",
      date: "2024-11-26",
    },
    {
      image: "https://i.ibb.co.com/8K97w32/12.png",
      title: "Wholesome Pride...",
      price: "870",
      delivery: "25 Dec 2023",
      date: "2024-11-27",
    },
    {
      image: "https://i.ibb.co.com/SJsgyzh/14.png",
      title: "Prodotti per il tuo cane...",
      price: "1270",
      delivery: "20 Nov 2023",
      date: "2024-11-28",
    },
    {
      image: "https://i.ibb.co.com/TTRTXMy/15.png",
      title: "Taste of the Wild...",
      price: "1270",
      delivery: "20 Dec 2023",
      date: "2024-11-29",
    },
    {
      image: "https://i.ibb.co.com/dKBbXf6/10-1.png",
      title: "Prodotti per il tuo cane...",
      price: "1270",
      delivery: "20 Nov 2023",
      date: "2024-11-30",
    },
    {
      image: "https://i.ibb.co.com/dKBbXf6/10-1.png",
      title: "Prodotti per il tuo cane...",
      price: "1270",
      delivery: "20 Nov 2023",
      date: "2024-11-30",
    },
  ];

  const [orderDataItem, setOrderData] = useState(orderData);

  // Filter menu logic
  const [isOpen, setIsOpen] = useState(false);
  const filterMenu = useRef();

  const outsideHandler = (e) => {
    if (filterMenu.current && !filterMenu.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", outsideHandler);
    return () => {
      document.removeEventListener("mousedown", outsideHandler);
    };
  }, []);

  // Filter logic
  const [iaFilter, setFilter] = useState(null);

  useEffect(() => {
    if (iaFilter) {
      const todayDate = new Date();
      const filterDate = new Date();
      filterDate.setDate(todayDate.getDate() - iaFilter);

      const filteredData = orderData.filter((item) => {
        const itemDate = new Date(item?.date);
        return itemDate >= filterDate && itemDate <= todayDate;
      });

      setOrderData(filteredData);
    } else {
      setOrderData(orderData); // Reset to original data if no filter is applied
    }
  }, [iaFilter,orderDataItem]);

  return (
    <div className="p-4 h-[500px]">
      <div className="main">
        <div className="title flex justify-between">
          <div className="title">
            <Title className="" title="Orders" />
          </div>
          <div className="main relative">
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
              <BsThreeDots className="text-2xl focus:bg-red-700" />
            </div>
            {isOpen && (
              <div
                ref={filterMenu}
                className="bg-white shadow-2xl p-2 px-4 w-[120px] rounded-md absolute right-0"
              >
                <div className="main">
                  <p
                    onClick={() => {setFilter(1),setIsOpen(false)}} // Filter for "This week"
                    className="cursor-pointer hover:text-indigo-600 duration-300"
                  >
                    This week
                  </p>
                  <p
                    onClick={() =>{ setFilter(2),setIsOpen(false)}} // Filter for "Last week"
                    className="cursor-pointer hover:text-indigo-600 duration-300"
                  >
                    Last week
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="main w-full overflow-x-auto scroll-container mt-2">
          <div className="title">
            <div className="item flex justify-between w-[500px]">
              <div className="title w-[60%] ">
                <Title className="text-[14px]" title="Product" />
              </div>
              <div className="title w-[30%] flex justify-center ">
                <Title className="text-[14px]" title="Price" />
              </div>
              <div className="title w-[30%] flex justify-end">
                <Title className="text-[14px]" title="Delivery" />
              </div>
            </div>
          </div>
          <div className="item w-[500px] flex flex-col gap-4 mt-2">
            {

            orderDataItem.length > 0 ? (
            orderDataItem.map((item, index) => (
              <div className="main" key={index}>
                <div className="item flex justify-between items-center">
                  <div className="w-[60%] flex items-center gap-2 cursor-pointer group">
                    <div className="image bg-[#eff4f8] w-[50px] h-[50px] rounded-md cursor-pointer">
                      <img className="p-2" src={item?.image} alt="img" />
                    </div>
                    <p className="font-semibold text-[14px] group-hover:text-indigo-600 duration-300">
                      {item?.title}
                    </p>
                  </div>
                  <div className="w-[30%] flex justify-center">
                    <PriceFormat className="text-[14px]" price={item?.price} />
                  </div>
                  <div className="w-[30%] flex justify-end">
                    <p className="text-[14px]">{item?.delivery}</p>
                  </div>
                </div>
              </div>
            )) ) :(
              <div className="main">
                 <p>no data fount</p>
              </div>
            )
            
            
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
