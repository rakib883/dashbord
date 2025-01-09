import React from 'react'
import Title from '../ui/Title'
import Path from '../ui/Path'
import PasswordInput from '../ui/Password'
import UserPermission from '../ui/UserPermission'
import Button from '../ui/Button'

const AddUser = () => {
  return (
    <div>
        <div className="main">
            <div className="title flex xxs:flex-col md:flex-row md:items-center md:justify-between">
                <div className="title">
                    <Title className="text-2xl" title="Add New User" />
                </div>
                <div className="path">
                    <Path  parent="Dashboard" child="User" last="Add New User" pathName="/add-user" dynamic="" />
                </div>
            </div>
            {/* add user area starthere  */}
            <div className="main bg-white rounded-lg mt-6">
                <div className=" p-4">
                    <div className="item flex xxs:flex-col md:flex-row item">
                        <div className="black md:w-1/2 xxs:w-full">
                            <div className="title">
                                <Title className="text-xl" title="Account" />
                                <p className="text-[#9999a6] text-xs">Fill in the information below to add a new account</p>
                            </div>
                        </div>
                        <div className="info md:w-1/2 flex flex-col gap-4 xxs:mt-4">
                            <div className="name-are">
                                <Title title="Name"/>
                                <input className=" w-full md:px-4 md:py-3 xxs:px-2 xxs:py-1 xxs:text-xs md:text-xs rounded-lg outline-none border mt-1 md:placeholder:text-[14px] xxs:placeholder:text-xs" type="text" placeholder="Username" />
                            </div>
                            <div className="name-are">
                                <Title title="Email"/>
                                <input className=" w-full md:px-4 md:py-3 xxs:px-2 xxs:py-1 xxs:text-xs md:text-xs rounded-lg outline-none border mt-1 md:placeholder:text-[14px] xxs:placeholder:text-xs" type="text" placeholder="Email" />
                            </div>
                            <div className="password">
                               <PasswordInput title="Password" placeholder="Password"/>
                            </div>
                            <div className="password">
                               <PasswordInput placeholder="Confarm Password" title="Confarm password"/>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>

            {/* user permision area start here  */}
            <div className="main bg-white rounded-lg mt-4">
                <div className=" flex xxs:flex-col md:flex-row p-4">
                    <div className=" md:w-1/2 xxs:w-full">
                       <div className="title">
                       <Title className="text-xl" title="Permission" />
                       <p className="text-[#9999a6] text-xs">Fill in the information below to add a new account</p>
                       </div>
                    </div>
                    <div className=" w-1/2 flex flex-col gap-4 xxs:mt-4 md:mt-0">
                      <UserPermission title="Add product"/>
                      <UserPermission title="Update product"/>
                      <UserPermission title="Delete product"/>
                      <UserPermission title="Apply discount"/>
                      <UserPermission title="Create coupon"/>
                    </div>
                </div>
            </div>

            {/* submit button area here  */}
            <div className="button mt-4">
                <Button className="w-[200px] flex justify-center" title="Save" />
            </div>
        </div>
    </div>
  )
}

export default AddUser