
import React, { useState } from 'react'
import Action from '../ui/Action'

const CounteryTable = () => {
  const [dtaItem,setDataItem] = useState([
    {
      "id": 1,
      "title": "Vietnamese",
      "language": "Vietnamese",
      "date": "20 Nov 2023",
      "checked":false,
      "status" :"published"
    },
    {
      "id": 2,
      "title": "Vietnamese",
      "language": "Vietnamese",
      "date": "20 Nov 2023",
      "checked":false,
       "status" :"pending"
    },
    {
      "id": 3,
      "title": "Vietnamese",
      "language": "Vietnamese",
      "date": "20 Nov 2023",
      "checked":false,
       "status" :"published"
    },
    {
      "id": 4,
      "title": "Vietnamese",
      "language": "Vietnamese",
      "date": "20 Nov 2023",
      "checked":false,
       "status" :"published"
    },
    {
      "id": 5,
      "title": "Vietnamese",
      "language": "Vietnamese",
      "date": "20 Nov 2023",
      "checked":false,
       "status" :"pending"
    },
    {
      "id": 6,
      "title": "Vietnamese",
      "language": "Vietnamese",
      "date": "20 Nov 2023",
      "checked":false,
       "status" :"pending"
    },
    {
      "id": 7,
      "title": "Vietnamese",
      "language": "Vietnamese",
      "date": "20 Nov 2023",
      "checked":false,
       "status" :"disable"
    },
    {
      "id": 8,
      "title": "Vietnamese",
      "language": "Vietnamese",
      "date": "20 Nov 2023",
      "checked":false,
       "status" :"published"
    },
    {
      "id": 9,
      "title": "Vietnamese",
      "language": "Vietnamese",
      "date": "20 Nov 2023",
      "checked":false,
       "status" :"published"
    },
    {
      "id": 10,
      "title": "Vietnamese",
      "language": "Vietnamese",
      "date": "20 Nov 2023",
      "checked":false,
       "status" :"published"
    }
  ])
  
// all seler area here
const [selectAll,setSelectAll] = useState(false)

const allSelectHandeler =()=>{
  setSelectAll(!selectAll)
  setDataItem((prevent)=>
    prevent.map((item)=>({...item, checked :!selectAll })))
}


const singleSelect = (id)=>{
  setDataItem((prevent)=>
     prevent.map((item)=>item?.id === id ? {...item, checked:!item?.checked} : item )
  )
}


  return (
    <div className=" overflow-x-auto mt-4 scroll-container ">
        <div className=" w-[1200px]">
            <table className=" w-full   border-spacing-y-4 border-separate">
                <thead className=" bg-[#f8f9fc] text-black rounded-xl ">
                    <tr>
                        <th className="text-start px-4 py-2 flex gap-4 items-center">
                            <div className="check">
                                <input onChange={allSelectHandeler} className="h-4 w-4 cursor-pointer" type="checkbox" />
                            </div>
                            <div className="id">ID</div>
                        </th>
                        <th className="text-start px-4 py-2">Name</th>
                        <th className="text-start px-4 py-2">Nationality</th>
                        <th className="text-start px-4 py-2">Created at</th>
                        <th className="text-start px-4 py-2">Status</th>
                        <th className="text-start px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                  {
                     dtaItem?.map((item,index)=>
                     <tr key={index} className="bg-[#f8f9fc]">
                        <td className="px-4 py-4 flex items-center gap-4">
                           <div className="check"> 
                              <input className="h-4 w-4 cursor-pointer" type="checkbox"  onChange={()=>singleSelect(item?.id)} checked={item?.checked} />
                            </div>
                          <div className="id">#{item?.id}</div>
                        </td>
                        <td className="px-4 py-4">{item?.title}</td>
                        <td className="px-4 py-4">{item?.language}</td>
                        <td className="px-4 py-4">{item?.date}</td>
                        <td className={` ${item?.status === "published" ? " bg-green-700  text-white"  : item?.status === "pending" ? " bg-gray-400" : item?.status ==="disable" ? "bg-red-800" :"" }  px-2 py-1 rounded-lg inline-flex text-white `}>{item?.status}</td>
                        <td className="px-4 py-4">
                          <Action/>
                        </td>
                     </tr>
                   )}
                </tbody>
            </table>
        </div>
    </div>    
  )
}

export default CounteryTable