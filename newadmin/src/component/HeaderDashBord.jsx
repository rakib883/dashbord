import React from 'react'

const HeaderDashBord = ({reletedApps}) => {
  return (
    <div className="body">
     <div className="body-item mt-4 grid grid-cols-3 gap-x-4">
       {
         reletedApps?.map((item,index)=>(
           <div key={index} className="main cursor-pointer border flex mt-2 justify-center items-center flex-col p-4 my-2 rounded-md">
              <div className="h-8 w-8">
                  <img className="w-full h-full object-contain"  src={item?.icon} alt="" />
              </div>
              <p className="text-[12px] mt-2 text-[#a9acb0] first-letter:uppercase">{item?.name}</p>
           </div>
         ))
       }
      </div>
      <div className=" bg-[#3884fd] text-center rounded-md py-2 my-2 hover:bg-white hover:text-black text-white font-semibold font-mainFont hover:border duration-300">
         <button>View all</button>
       </div>
 </div>
  )
}

export default HeaderDashBord