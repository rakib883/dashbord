import React from 'react'
import Button from '../ui/Button';
import Title from '../ui/Title';
import Alert from '../ui/Alert';
import SettingSideTitle from '../ui/SettingSideTitle';

const RecentOrder = () => {
  return (
    <div>
         <div className="main">
                {/* recent order area here */}
                <div className="recent bg-white flex xxs:flex-col md:flex-row px-2 py-4 rounded-lg mt-6">
                    <div className="header md:w-[40%] xxs:w-full">
                        <SettingSideTitle mainTitle="Recent Order" title="Setup license code"/>
                    </div>
                    <div className="content md:w-[60%] xxs:w-full py-4">
                        <div className="notifaction">
                            <Alert className="" title="Your license is invalid. Please activate your license!" />
                            {/* search area here start */}
                            <div className="from flex flex-col gap-6 mt-4 ">
                                <div className="name">
                                    <Title title="Your username" className="text-[16px]" />
                                     <div className="input mt-2">
                                        <input className="w-full outline-none border rounded-lg md:py-3 md:px-2 xxs:py-2 xxs:px-2 xxs:placeholder:text-xs md:placeholder:text-base md:text-base xxs:text-xs " type="text" placeholder="Inter your username" />
                                     </div>
                                </div>
                                <div className="name">
                                    <div className="item flex justify-between items-center">
                                      <Title title="Purchase code" className="text-[16px]" />
                                      <p className="text-[#4482fc] text-[12px]">What’s this?</p>
                                    </div>
                                     <div className="input mt-2">
                                       <input className="w-full outline-none border rounded-lg md:py-3 md:px-2 xxs:py-2 xxs:px-2 xxs:placeholder:text-xs md:placeholder:text-base md:text-base xxs:text-xs " type="text" placeholder="Inter your parcese" />
                                     </div>
                                </div>
                                <div className=" flex gap-2 ">
                                    <div className="check">
                                        <input type="checkbox" />
                                    </div>
                                    <p className="text-[#786b77] text-[14px]">
                                      Confirm that, according to the Envato License Terms, each license entitles one person for a single project. Creating multiple unregistered installations is a copyright violation. More info
                                    </p>
                                </div>
                                <div className=" flex items-center gap-4 ">
                                    <Button title="Active license" />  <Button title="Reset license on this domain"/>
                                </div>
                                <div className="item">
                                    <p className="text-[#ff5924] py-4 text-[14px]">Note: Your site IP will be added to blacklist after 5 failed attempts.</p>
                                    <p  className="text-[#786b77] text-[14px]">
                                       A purchase code (license) is only valid for One Domain. Are you using this theme on a new domain? Purchase a new license here to get a new purchase code.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default RecentOrder