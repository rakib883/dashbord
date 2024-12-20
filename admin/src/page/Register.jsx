import React from 'react'
import Title from '../ui/Title'
import Password from '../ui/Password'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import Checkbox from '@mui/material/Checkbox';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
        <div className="main">
            <div className=" max-w-lg  mx-auto h-full flex justify-center items-center ">
               <div className="item mt-16 bg-white w-full rounded-xl p-6">
                   <div className="title">
                      <Title className="text-2xl" title="Create your account"/>
                      <p className="text-[14px] text-[#9999a1]">Enter your personal details to create account</p>
                   </div>

                   {/* from area start here  */}
                   <div className="main mt-6 flex flex-col gap-4">
                     <div className="name">
                        <p className="text-[14px] font-semibold">Your username *</p>
                        <div className="name flex gap-8 mt-2">
                            <div className=" w-[50%]">
                                <input className="w-full outline-none border py-3 px-4 rounded-lg placeholder:text-[14px]" type="text" placeholder="First name" />
                            </div>
                            <div className="last w-[50%]">
                                <input className="w-full outline-none border py-3 px-4 rounded-lg placeholder:text-[14px]" type="text" placeholder="Last name" />
                            </div>
                        </div>
                     </div>
                     <div className="name">
                        <p className="text-[14px] font-semibold">Your email*</p>
                        <div className="name flex gap-8 mt-2">
                            <div className=" w-full ">
                                <input className="w-full outline-none border py-3 px-4 rounded-lg placeholder:text-[14px]" type="text" placeholder="First name" />
                            </div>
    
                        </div>
                     </div>
                     <div className="pas">
                        <Password className="text-[14px]" title="Password" placeholder="Password"/>
                     </div>
                     <div className="pas">
                        <Password className="text-[14px]" title="Confarm password" placeholder="Confarm password"/>
                     </div>
                     <div className="pol flex items-center">
                        <Checkbox {...label} />
                        <p className="mb-1 text-[14px] text-[#778795] mt-1">Keep me signed in</p>
                     </div>
                     <div className="register">
                        <Button className="w-full flex justify-center" title="Submit"/>
                     </div>
                     <div className="foter">
                       <p className="text-[#778795] text-center text-[14px] mt-4">You don't have an account yet?  
                         <span className="text-[#2275fc] cursor-pointer"> <Link to="">Register Now </Link> </span> </p>
                      </div>
                   </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Register