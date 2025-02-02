import React from 'react'

const Notifaction = ({notifactionItem}) => {
  return (
    <div className="item my-4">
    {
      notifactionItem.map((item,index)=>(
      <div key={index} className="item flex items-center gap-2 cursor-pointer my-4">
         <div className="image">
            <div className="image bg-[#e9f2ff] h-10 w-10 rounded-full flex justify-center items-center">
               <div className="icon-item bg-[#2275fc] text-white rounded-full w-6 h-6 flex justify-center items-center">
                  {
                    item?.image
                  }
               </div>
            </div>
         </div>
         <div className="text leading-3"> 
             <p className=" font-semibold font-mainFont text-[14px] text-[#1e1e1e] ">{item?.title}</p>
             <p className=" text-[12px] font-mainFont text-[#abadb1] font-medium">{item?.message}</p>
         </div>
     </div>
     ))}
       <div className=" bg-[#3884fd] text-center rounded-md py-2 my-2 hover:bg-white hover:text-black text-white font-semibold font-mainFont hover:border duration-300">
           <button>View all</button>
      </div>
  </div>
  )
}

export default Notifaction