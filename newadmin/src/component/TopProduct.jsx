import React, { useEffect, useState } from "react";

const TopProduct = ({ threFilter }) => {
  const toCatagory = [
    {
      image: "https://i.ibb.co.com/Dgby4k5/1.png",
      title: "Patimax Fragrance Long...",
      item: "100",
      name: "sifat",
      benefit: "-10%",
      price: "150",
      flag: "https://i.ibb.co.com/rb0DbNS/3-1.png",
      date: "2024-11-25",
    },
    {
      image: "https://i.ibb.co.com/51bSSfF/3.png",
      title: "Pedigree Puppy Dry Dog...",
      item: "100",
      name: "sifat",
      benefit: "-10%",
      price: "150",
      flag: " https://i.ibb.co.com/zVDhXGH/6.png",
      date: "2024-11-24",
    },
    {
      image: "https://i.ibb.co.com/p1XfJC2/4.png",
      title: "Patimax Fragrance Long...",
      item: "100",
      name: "sifat",
      benefit: "-10%",
      price: "150",
      flag: "https://i.ibb.co.com/pJpGGzZ/5.png",
      date: "2024-11-23",
    },
    {
      image: "https://i.ibb.co.com/S77wczF/2-1.png",
      title: "Patimax Fragrance Long...",
      item: "100",
      name: "sifat",
      benefit: "-10%",
      price: "150",
      flag: "https://i.ibb.co.com/zVDhXGH/6.png",
      date: "2024-11-22",
    },
  ];

  // State to manage displayed data
  const [isData, setIsData] = useState(toCatagory);

  // Effect to filter data when `threFilter` changes
  useEffect(() => {
    if (threFilter) {
      const todayDate = new Date();
      const dynamicDate = new Date();
      dynamicDate.setDate(todayDate.getDate() - threFilter);

      const filteredData = toCatagory.filter((item) => {
        const dateData = new Date(item.date);
        return dateData >= dynamicDate && dateData <= todayDate;
      });

      setIsData(filteredData); // Update state with filtered data
    } else {
      setIsData(toCatagory); // Reset to all data when threFilter is null or undefined
    }
  }, [threFilter]);

  return (
    <div>
      <div className="overflow-x-auto scroll-container ">
        <div className="item w-[400px] flex flex-col gap-4">
          {isData.map((item, index) => (
            <div
              key={index}
              className="main group py-1 flex justify-between items-center w-[700px] hover:bg-[#eff4f8] rounded-md cursor-pointer duration-300"
            >
              {/* Image Area */}
              <div className="image flex items-center gap-2">
                <div className="bg-[#eff4f8] rounded-md">
                  <img className=" xxs:h-[40px] lg:h-[50px] p-1 " src={item.image} alt={item.title} />
                </div>
                <div className="text">
                  <p className=" xxs:text-[10px] lg:text-[16px] font-semibold group-hover:text-indigo-600 duration-300">
                    {item.title}
                  </p>
                  <p className=" xxs:text-[10px] lg:text-[12px]">{item.item} items</p>
                </div>
              </div>
              {/* Coupon Area */}
              <div className="cupon flex justify-center flex-col text-start">
                <p className="first-letter:uppercase text-[#9a9da2] xxs:text-[10px] lg:text-[16px]">
                  coupon code
                </p>
                <p className="text-[#151515] first-letter:uppercase xxs:text-[10px] lg:text-[16px]">
                  {item.name}
                </p>
              </div>
              {/* Flag Area */}
              <div className="flag">
                <img className="xxs:h-[20px] lg:h-[30px]" src={item.flag} alt="Flag" />
              </div>
              {/* Price Area */}
              <div className="price">
                <p>{item.benefit}</p>
                <p className="text-[#a4a7ab]">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
