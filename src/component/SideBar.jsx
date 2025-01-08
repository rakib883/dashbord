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
         <div className="item px-4 hover:text-[#2d7dfc] duration-300">
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

export default function Sidebar() {
  return (
    <div>
      <div className="header mx-4">
         <Title title="Main home" className=" mt-[23px] font-mainFont uppercase text-gray-300 text-[12px]"/>
      </div>
      <div className="main mt-2">
        <AccordionItem 
          title={
            <>
              <Link to="/" className="main flex items-center gap-2">
                 <div className="icon">
                    <RiDashboardHorizontalLine className="text-xl" />
                 </div>
                 <div className="text text-[14px] font-mainFont">
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
        <Title title="All page" className=" font-mainFont uppercase text-gray-300 text-[12px]"/>
      </div>
      <div className="main my-2 mt-2">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <MdOutlineLocalGroceryStore className="text-xl" />
                 </div>
                 <div className="text text-[14] font-mainFont">
                   Ecommerce
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
                       <Link to="/add-product" className="text-[14px] font-mainFont font-medium cursor-pointer ">Add product</Link>
                    </div>
                    <Link to="product-list" className="add-product mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer ">Product list</div>
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
                    <IoLayersOutline className="text-xl" />
                 </div>
                 <div className="text-[14px] text-md font-mainFont">
                    Catagory
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                 <div className="page-item mt-2">
                    <Link to="/catagory-list" className="add-product mx-4 flex gap-2 items-center text-[#585965] hover:text-[#297afc] duration-300">
                       <div className="circel h-2 w-2 hover:text-[#297afc] border border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont font-medium cursor-pointer ">Catagory list</div>
                    </Link>
                    <Link to="/add-catagory" className="add-product mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer ">New catagory</div>
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
                    <LuBox className="text-xl" />
                 </div>
                 <div className="text-[14px] text-md font-mainFont">
                    Attributes
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                 <div className="page-item mt-2">
                    <Link to="/all-attributes" className="add-product mx-4 flex gap-2 items-center text-[#585965] hover:text-[#297afc] duration-300">
                       <div className="circel h-2 w-2 hover:text-[#297afc] border border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont font-medium cursor-pointer ">Attributes</div>
                    </Link>
                    <Link to="/add-attribute" className="add-product mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer ">Add attributes</div>
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
                    <HiOutlineDocumentArrowDown className="text-xl" />
                 </div>
                 <div className="text-[14px] text-md font-mainFont">
                    Order
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                 <div className="page-item mt-2">
                    <Link to="/product-list" className="add-product mx-4 flex gap-2 items-center text-[#585965] hover:text-[#297afc] duration-300">
                       <div className="circel h-2 w-2 hover:text-[#297afc] border border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont font-medium cursor-pointer ">Order List</div>
                    </Link>
                    <Link to="/order-detils" className="add-product mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer ">Order Detils</div>
                    </Link>
                    <Link to="/order-tracking" className="add-product mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer ">Order Tracking</div>
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
                    <FiUser className="text-xl" />
                 </div>
                 <div className="text-[14px] text-md font-mainFont">
                    User
                 </div>
              </div>
            </>
          } 
          content={
            <>
              <div className="main">
                 <div className="page-item mt-2">
                    <Link to="/all-user" className="add-product mx-4 flex gap-2 items-center text-[#585965] hover:text-[#297afc] duration-300">
                       <div className="circel h-2 w-2 hover:text-[#297afc] border border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont font-medium cursor-pointer ">All user</div>
                    </Link>
                    <Link to="/add-user" className="add-product mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer ">Add new User</div>
                    </Link>
                    <Link to="/login" className="add-product mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer ">Login</div>
                    </Link>
                    <Link to="/register" className="add-product mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
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
                    <FiUserPlus className="text-xl" />
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
                    <div className="add-product mx-4 flex gap-2 items-center text-[#585965] hover:text-[#297afc] duration-300">
                       <div className="circel h-2 w-2 hover:text-[#297afc] border border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont font-medium cursor-pointer ">All Roles</div>
                    </div>
                    <div className="add-product mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer ">Create Role</div>
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
                    <GrGallery className="text-xl" />
                 </div>
                 <div className="text-[14px] text-md font-mainFont">
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
                       <div className="text font-mainFont cursor-pointer ">Gallery</div>
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
                    <RiProgress3Line className="text-xl" />
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
        <Title title="Setting" className=" font-mainFont uppercase text-gray-300 text-[12px]"/>
      </div>
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <IoLocationOutline className="text-xl" />
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
                    <Link to="/countery" className="add-product mx-4 flex gap-2 items-center text-[#585965] hover:text-[#297afc] duration-300">
                       <div className="circel h-2 w-2 hover:text-[#297afc] border border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont font-medium cursor-pointer ">Counteries</div>
                    </Link>
                    <div className="add-product mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer ">States</div>
                    </div>
                    <div className="add-product mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer ">Caties</div>
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
                    <BsGear className="text-xl" />
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
                    <FaRegEdit className="text-xl" />
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
                       <div className="text font-mainFont font-medium cursor-pointer ">List Page</div>
                    </div>
                    <div className="add-product mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer ">Edit page</div>
                    </div>
                    <div className="add-product mx-4 flex gap-2 items-center hover:text-[#297afc] text-[#585965] duration-300">
                       <div className="circel h-2 w-2 border  border-[#297afc] rotate-45 ">
                       </div>
                       <div className="text font-mainFont cursor-pointer ">New page</div>
                    </div>
                 </div>
              </div>
            </>
          }
        />
      </div>
      <div className="title mt-[23px] mx-4">
        <Title title="Component" className=" font-mainFont uppercase text-gray-300 text-[12px]"/>
      </div>
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <TfiServer className="text-xl" />
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
        <Title title="Support" className=" font-mainFont uppercase text-gray-300 text-[12px]"/>
      </div>
      <div className="main my-2 ">
        <AccordionItem 
          title={
            <>
              <div className="main flex items-center gap-2">
                 <div className="icon">
                    <IoMdHelpCircleOutline className="text-xl" />
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
                    <BiSupport className="text-xl" />
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
                    <MdOutlinePrivateConnectivity className="text-xl" />
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
        <Title title="Connect us" className=" font-mainFont uppercase text-gray-300 text-[12px]"/>
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
