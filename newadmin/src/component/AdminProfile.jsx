import React from 'react'
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { removeToken } from '../redux/slice';
const AdminProfile = () => {
  const location = useLocation()
  const navagete = useNavigate()
  const disPatch = useDispatch()
  const logoutUser =()=>{
       disPatch(removeToken())
       navagete("/login")
  }
  return (
    <div className="content w-[180px] bg-white rounded-md">
      <div className=" px-4 flex flex-col gap-2 py-4">
            <div  className="main cursor-pointer group flex items-center justify-between">
                <div className="icon flex items-center gap-2 group-hover:text-[#3884fd]">
                    <p className=" text-xl text-gray-300 duration-300"><FiLogOut /></p>
                    <p className=" group-hover:text-[#3884fd] font-semibold text-[14px] font-mainFont first-letter:uppercase">Log out</p>
                </div>
                <div className="message">
                    <p className=" font-mainFont font-semibold text-[14px]"></p>
                </div>
            </div>
            <div onClick={logoutUser}  className="main cursor-pointer group flex items-center justify-between">
                <div className="icon flex items-center gap-2 group-hover:text-[#3884fd]">
                    <p className=" text-xl text-gray-300 duration-300"><FiLogOut /></p>
                    <p className=" group-hover:text-[#3884fd] font-semibold text-[14px] font-mainFont first-letter:uppercase">Log out</p>
                </div>
                <div className="message">
                    <p className=" font-mainFont font-semibold text-[14px]"></p>
                </div>
            </div>
      </div>
   </div>
  )
}

export default AdminProfile