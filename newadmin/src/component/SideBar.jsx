import React, { useState } from 'react';
import Title from '../ui/Title';
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoLayersOutline } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { GrGallery } from "react-icons/gr";
import { RiProgress3Line } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { TfiServer } from "react-icons/tfi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePrivateConnectivity } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" ">
      <div onClick={toggleAccordion} className={`${isOpen ? 'bg-[#e9f1ff] rounded-md text-[#2d7dfc] ' : ''} cursor-pointer font-semibold text-[15px]  duration-300 h-[40px] flex   items-center`}>
         <div className="item px-4 hover:text-[#2d7dfc] duration-300 xxs:text-[12px]">
            {title}
         </div>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[200px]' : 'max-h-0'}`}>
        <div className="item px-4">
          {content}
        </div>
      </div>
    </div>
  );
}

export default function Sidebar({onclickHandeler}) {
  return (
    <div>
      <div className="header mx-4">
         <Title title="Main home" className=" "/>
      </div>
      <div className="main mt-2">
        <AccordionItem 
          title={
            <>
              <Link to="/" className="main flex items-center gap-2">
                 <div className="icon">
                    <RiDashboardHorizontalLine className="md:text-xl xxs:text-[12px]" />
                 </div>
                 <div className="text md:text-[14px] xxs:text-[12px] font-mainFont">
                    Dashbord
                 </div>
              </Link>
            </>
          } 
          content={
            <>
              <div className="main">
              </div>
            </>
          }
        />
      </div>
      <div className="title mt-[23px] mx-4">
        <Title title="All page" className=""/>
      </div>
      <div className="main my-2 mt-2">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <MdOutlineLocalGroceryStore className="md:text-xl xxs:text-[12px]" />
                 </div>
                 <div className="text md:text-[14px] xxs:text-[12px] font-mainFont">
                   Ecommerce
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                 <div className="page-item mt-2">
                    <div onClick={() =>onclickHandeler()} className="add-product mx-4 flex gap-2 items-center text-[#585965] hover:text-[#297afc] duration-300">
                       <div className="circel h-2 w-2 hover:text-[#297afc] border border-[#297afc] rotate-45 ">
                       </div>
                       <Link  to="/add-product" className="md:text-[14px] xxs:text-[12px] font-mainFont font-medium cursor-pointer ">Add product</Link>
                    </div>
                    <Link onClick={() =>onclickHandeler()} to="product-list" className="md:text-[14px] xxs:text-[12px] mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer font-medium ">Product list</div>
                    </Link>
                 </div>
              </div>
            </>
          }
        />
      </div>
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <IoLayersOutline className="md:text-xl xxs:text-[12px]" />
                 </div>
                 <div className="md:text-[14px] xxs:text-[12px] text-md font-mainFont">
                    Catagory
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                 <div className="page-item mt-2">
                    <Link onClick={() =>onclickHandeler()} to="/catagory-list" className=" md:text-[14px] xxs:text-[12px] mx-4 flex gap-2 items-center text-[#585965] hover:text-[#297afc] duration-300">
                       <div className="circel h-2 w-2 hover:text-[#297afc] border border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont font-medium cursor-pointer ">Catagory list</div>
                    </Link>
                    <Link to="/add-catagory" className=" md:text-[14px] xxs:text-[12px] mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer font-semibold ">New catagory</div>
                    </Link>
                 </div>
              </div>
            </>
          }
        />
      </div>
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <LuBox className="md:text-xl xxs:text-[12px]" />
                 </div>
                 <div className="md:text-[14px] xxs:text-[12px] text-md font-mainFont">
                    Attributes
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                 <div className="page-item mt-2">
                    <Link to="/add-attributes" className=" md:text-[14px] xxs:text-[12px] mx-4 flex gap-2 items-center text-[#585965] hover:text-[#297afc] duration-300">
                       <div className="circel h-2 w-2 hover:text-[#297afc] border border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont font-medium cursor-pointer ">Attributes</div>
                    </Link>
                    <Link to="/add-attribute" className=" md:text-[14px] xxs:text-[12px] mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer font-semibold ">Add attributes</div>
                    </Link>
                 </div>
              </div>
            </>
          }
        />
      </div>
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <HiOutlineDocumentArrowDown className="md:text-xl xxs:text-[12px]" />
                 </div>
                 <div className="md:text-[14px] xxs:text-[12px] font-mainFont">
                    Order
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                 <div className="page-item mt-2">
                    <Link to="/product-list" className=" md:text-[14px] xxs:text-[12px] mx-4 flex gap-2 items-center text-[#585965] hover:text-[#297afc] duration-300">
                       <div className="circel h-2 w-2 hover:text-[#297afc] border border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont font-medium cursor-pointer ">Order List</div>
                    </Link>
                    <Link to="/order-detils" className=" md:text-[14px] xxs:text-[12px] mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer font-semibold ">Order Detils</div>
                    </Link>
                    <Link to="/order-tracking" className=" md:text-[14px] xxs:text-[12px] mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer font-semibold ">Order Tracking</div>
                    </Link>
                 </div>
              </div>
            </>
          }
        />
      </div>
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <FiUser className="md:text-xl xxs:text-[12px]" />
                 </div>
                 <div className="md:text-[14px] xxs:text-[12px]  font-mainFont">
                    User
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                 <div className="page-item mt-2">
                    <Link to="/all-user" className=" md:tex-[14px] xxs:text-[12px]  mx-4 flex gap-2 items-center text-[#585965] hover:text-[#297afc] duration-300">
                       <div className="circel h-2 w-2 hover:text-[#297afc] border border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont font-medium cursor-pointer ">All user</div>
                    </Link>
                    <Link to="/add-user" className=" font-semibold md:tex-[14px] xxs:text-[12px]  mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer ">Add new User</div>
                    </Link>
                    <Link to="/login" className=" font-semibold md:tex-[14px] xxs:text-[12px] mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer ">Login</div>
                    </Link>
                    <Link to="/register" className=" font-semibold md:tex-[14px] xxs:text-[12px]  mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer ">Sign up</div>
                    </Link>
                 </div>
              </div>
            </>
          }
        />
      </div>
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <FiUserPlus className="md:text-xl xxs:text-[12px]" />
                 </div>
                 <div className="text-[14px] text-md font-mainFont">
                    Role
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                 <div className="page-item mt-2">
                    <div className=" mx-4 flex gap-2 items-center text-[#585965] hover:text-[#297afc] duration-300">
                       <div className="circel h-2 w-2 hover:text-[#297afc] border border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont font-medium cursor-pointer md:text-[14px] xxs:text-[12px] ">All Roles</div>
                    </div>
                    <div className=" mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer md:text-[14px] xxs:text-[12px] font-semibold ">Create Role</div>
                    </div>
                 </div>
              </div>
            </>
          }
        />
      </div>
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <GrGallery className="md:text-xl xxs:text-[12px]" />
                 </div>
                 <div className="md:text-[14px] xxs:text-[12px] tfont-mainFont">
                    Gallery
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                   <Link to="/gallery" className="add-product mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="md:text-[14px] xxs:text-[12px] font-semibold font-mainFont cursor-pointer ">Gallery</div>
                    </Link>
              </div>
            </>
          }
        />
      </div>
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <Link to="/gallery" className="main flex items-center gap-2">
                 <div className="icon">
                    <RiProgress3Line className="md:text-xl xxs:text-[12px]" />
                 </div>
                 <div className="text-[14px] text-md font-mainFont">
                    Report
                 </div>
              </Link>
            </>
          } 
          content={
            <>
              <div className="main">
                
              </div>
            </>
          }
        />
      </div>
      <div className="title mt-[23px] mx-4">
        <Title title="Setting" className=" "/>
      </div>
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <IoLocationOutline className="md:text-xl xxs:text-[12px]" />
                 </div>
                 <div className="text-[14px] text-md font-mainFont">
                    Location
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                 <div className="page-item mt-2">
                    <Link to="/countery" className=" md:text-[14px] xxs:text-[12px] mx-4 flex gap-2 items-center text-[#585965] hover:text-[#297afc] duration-300">
                       <div className="circel h-2 w-2 hover:text-[#297afc] border border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont font-medium cursor-pointer md:text-[14px] xxs:text-[12px] ">Counteries</div>
                    </Link>
                    <div className=" mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer md:text-[14px] xxs:text-[12px] font-semibold ">States</div>
                    </div>
                    <div className=" mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer md:text-[14px] xxs:text-[12px] font-semibold ">Caties</div>
                    </div>
                 </div>
              </div>
            </>
          }
        />
      </div> 
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <BsGear className="md:text-xl xxs:text-[12px]" />
                 </div>
                 <Link to="settings" className="text-[14px] text-md font-mainFont">
                    Setting
                 </Link>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                
              </div>
            </>
          }
        />
      </div>
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <FaRegEdit className="md:text-xl xxs:text-[12px]" />
                 </div>
                 <div className="text-[14px] text-md font-mainFont">
                    Pages
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                 <div className="page-item mt-2">
                    <div className="add-product mx-4 flex gap-2 items-center text-[#585965] hover:text-[#297afc] duration-300">
                       <div className="circel h-2 w-2 hover:text-[#297afc] border border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont font-medium cursor-pointer md:text-[14px] xxs:text-[12px] ">List Page</div>
                    </div>
                    <div className="add-product mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer md:text-[14px] xxs:text-[12px] ">Edit page</div>
                    </div>
                    <div className="add-product mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer md:text-[14px] xxs:text-[12px] ">New page</div>
                    </div>
                 </div>
              </div>
            </>
          }
        />
      </div>
      <div className="title mt-[23px] mx-4">
        <Title title="Component" className=" "/>
      </div>
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <TfiServer className="md:text-xl xxs:text-[12px]" />
                 </div>
                 <div className="text-[14px] text-md font-mainFont">
                    Component
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                 
              </div>
            </>
          }
        />
      </div>
      <div className="title mt-[23px] mx-4">
        <Title title="Support" className=" "/>
      </div>
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <IoMdHelpCircleOutline className="md:text-xl xxs:text-[12px]" />
                 </div>
                 <div className="text-[14px] text-md font-mainFont">
                    Helpcenter
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                 
              </div>
            </>
          }
        />
      </div>
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <BiSupport className="md:text-xl xxs:text-[12px]" />
                 </div>
                 <div className="text text-md font-mainFont">
                    FAQs
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                 
              </div>
            </>
          }
        />
      </div>
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <MdOutlinePrivateConnectivity className="md:text-xl xxs:text-[12px]" />
                 </div>
                 <div className="text-[14px] text-md font-mainFont">
                    Privacy
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                 
              </div>
            </>
          }
        />
      </div>
      <div className="title mt-[23px] mx-4">
        <Title title="Connect us" className=""/>
      </div>
      <div className="social">
        <div className="item my-4  flex justify-between mx-4 ">
           <div className="facccccebook text-[#bec8d2] hover:text-[#297afc] duration-300 cursor-pointer">
              <FaFacebookF className="text-lg" />
           </div>
           <div className="facccccebook text-[#bec8d2] hover:text-[#297afc] duration-300 cursor-pointer">
              <FiTwitter className="text-lg" />
           </div>
           <div className="facccccebook text-[#bec8d2] hover:text-[#297afc] duration-300 cursor-pointer">
              <FaLinkedinIn className="text-lg" />
           </div>
           <div className="facccccebook text-[#bec8d2] hover:text-[#297afc] duration-300 cursor-pointer">
              <FaInstagram className="text-lg" />
           </div>
        </div>
      </div>
      <div className="user-image flex justify-center mt-10">
         <img className="h-[150px] w-auto" src="https://themesflat.co/html/remos/images/menu-left/img-bot.png" alt="" />
      </div>
      <div className="text-section">
        <div className="header flex justify-center">
          <Title title="Hi, how can we help?" />
        </div>
        <p className="text-[12px] font-mainFont text-center mx-4 text-[#81818a]">
         Contact us if you have any assistance, we will contact you as soon as possible
        </p>

        <button className="bg-[#2275fc] w-full py-3 hover:bg-white hover:text-black hover:border-[1px] duration-300 ease-in-out hover:border-[#297afc] text-white font-semibold font-mainFont my-4 rounded-md">
           Connect
        </button>
      </div>
         
    </div>
  );
}
