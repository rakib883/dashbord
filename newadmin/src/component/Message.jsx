import React from 'react'

const Message = ({message,hanseler}) => {
  return (
    <div className="message-area my-4">
    {
      message.map((item,index)=>(
      <div onClick={hanseler} key={index} className="item cursor-pointer py-2">
         <div className="item flex justify-between">
             <div className="image flex items-center gap-2">
               <div className="image w-10 h-100">
                 <img className="w-full h-full object-contain rounded-full" src={item?.image} alt="" />
               </div>
                <div className="text leading-[20px] mt-1">
                  <p className=" font-mainFont font-medium hover:text-[#3884fd] duration-300 first-letter:uppercase">{item?.name}</p>
                  <p className=" text-[12px] text-[#9a9ba2]">{item?.message}</p>
                </div>
             </div>
             <div className="time mt-1">
               <p className=" text-[12px] text-[#9a9ba2]">{item?.time}</p>
             </div>
         </div>
     </div> 
    ))}
    <div className=" bg-[#3884fd] text-center rounded-md py-2 my-2 hover:bg-white hover:text-black text-white font-semibold font-mainFont hover:border duration-300">
         <button>View all</button>
    </div>
   </div>
  )
}

export default Message