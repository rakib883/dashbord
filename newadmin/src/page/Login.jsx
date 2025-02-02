import React from 'react'
import Title from '../ui/Title'
import Password from '../ui/Password'
import Checkbox from '@mui/material/Checkbox';
import Button from '../ui/Button';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <div className="main">
            <div className="item max-w-xl  mx-auto ">
               <div className="item   flex justify-center items-center">
                  <div className="item bg-white rounded-2xl w-full p-6 my-8">
                     <div className="title">
                        <div className="title">
                            <Title title="Login to account" className="text-2xl"/>
                            <p className="text-[#7d8797] text-[14px]">Enter your email & password to login</p>
                        </div>
                        <div className="main mt-8 flex flex-col gap-4">
                            <div className="name">
                                <p className="font-medium">Email address</p>
                                <input className="outline-none border py-3 px-4 w-full rounded-lg mt-1 " placeholder="Enter email" type="email" />
                            </div>
                            <div className="password">
                              <Password title="Password" placeholder="Password"/>
                            </div>
                        </div>
                     </div>
                     {/* permission area start here  */}
                     <div className=" flex items-center justify-between ">
                        <div className="check">
                            <div className=" flex items-center my-4">
                              <Checkbox {...label} />
                              <p className="mb-1 text-[14px] text-[#778795]">Keep me signed in</p>
                            </div>
                        </div>
                        <div className="for">
                            <p className="text-[#2275fc] cursor-pointer">
                               Forgot password?
                            </p>
                        </div>
                     </div>

                     {/* button area start here */}
                     <div className="buton">
                         <Button className="w-full flex justify-center" title="Login"/>
                     </div>
                     <p className="text-center mt-8 text-xs text-[#778795]">Or continue with social account</p>

                     {/* social button are herer */}
                     <div className="main flex  gap-2 justify-center mt-4 ">
                        <Button className="w-full" icon={<FaGoogle />} title="Sign in with google"/>
                        <Button className="w-full" icon={<FaFacebookF />} title="Sign in with google"/>
                     </div>
                     <div className="foter">
                       <p className="text-[#778795] text-center text-[14px] mt-4">You don't have an account yet? 
                         <span className="text-[#2275fc] cursor-pointer"> <Link to="/register">Register Now </Link> </span> </p>
                      </div>
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Login