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
            <div className="title flex items-center justify-between">
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
                    <div className="item flex item">
                        <div className="black w-1/2">
                            <div className="title">
                                <Title className="text-xl" title="Account" />
                                <p className="text-[#9999a6] text-xs">Fill in the information below to add a new account</p>
                            </div>
                        </div>
                        <div className="info w-1/2 flex flex-col gap-4">
                            <div className="name-are">
                                <p className="font-medium text-[16px]">Name</p>
                                <input className=" w-full px-4 py-3 rounded-lg outline-none border mt-1 placeholder:text-[14px]" type="text" placeholder="Username" />
                            </div>
                            <div className="name-are">
                                <p className="font-medium text-[16px]">Email</p>
                                <input className=" w-full px-4 py-3 rounded-lg outline-none border mt-1 placeholder:text-[14px]" type="text" placeholder="Email" />
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
                <div className=" flex p-4">
                    <div className=" w-1/2">
                       <div className="title">
                       <Title className="text-xl" title="Permission" />
                       <p className="text-[#9999a6] text-xs">Fill in the information below to add a new account</p>
                       </div>
                    </div>
                    <div className=" w-1/2 flex flex-col gap-4">
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