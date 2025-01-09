import React, { useEffect, useRef, useState } from 'react'
import Title from '../ui/Title'
import Path from '../ui/Path'
import { LuSearch } from "react-icons/lu";
import Button from '../ui/Button';
import { GoPlus } from "react-icons/go";
import Action from '../ui/Action';
import UserModel from '../ui/Modal';
import Pagenation from '../ui/Pagenation';
import SearchBar from '../ui/SearchBar';

const AllUser = () => {
  const user = [
    {
      "id": 1,
      "image":"https://i.ibb.co.com/x3B4T53/224911-1.jpg",
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "phone": "+1-123-456-7890",
      "address": "123 Elm Street, Springfield, USA",
      "purchaseHistory": ["Laptop", "Wireless Mouse", "Backpack"]
    },
    {
      "id": 2,
      "image":"https://i.ibb.co.com/LxVFGbh/c7120266-6fd6-40fa-9725-b539d5a22ef5.jpg",
      "name": "Bob Smith",
      "email": "bob.smith@example.com",
      "phone": "+1-987-654-3210",
      "address": "456 Oak Avenue, Metropolis, USA",
      "purchaseHistory": ["Smartphone", "Headphones"]
    },
    {
      "id": 3,
      "name": "Charlie Davis",
      "image":"https://i.ibb.co.com/yszHhkv/1727357331205-property-9.jpg",
      "email": "charlie.davis@example.com",
      "phone": "+1-555-123-4567",
      "address": "789 Pine Lane, Gotham, USA",
      "purchaseHistory": ["Gaming Console", "Controller"]
    },
    {
      "id": 4,
      "image":"https://i.ibb.co.com/fX4rBJz/1727358606179-property-7.jpg",
      "name": "Diana Evans",
      "email": "diana.evans@example.com",
      "phone": "+1-888-987-6543",
      "address": "321 Maple Road, Star City, USA",
      "purchaseHistory": ["Fitness Tracker", "Yoga Mat"]
    },
    {
      "id": 5,
      "image":"https://i.ibb.co.com/wsfTv6j/Image-1.png",
      "name": "Evan Brown",
      "email": "evan.brown@example.com",
      "phone": "+1-444-555-6666",
      "address": "654 Cedar Drive, Central City, USA",
      "purchaseHistory": ["Smartwatch", "Wireless Earbuds"]
    },
    {
      "id": 6,
      "image":"https://i.ibb.co.com/2y96N1W/Whats-App-Image-2024-06-22-at-14-32-06-92634224.jpg",
      "name": "Fiona Green",
      "email": "fiona.green@example.com",
      "phone": "+1-222-333-4444",
      "address": "987 Birch Blvd, Coast City, USA",
      "purchaseHistory": ["Tablet", "Stylus Pen"]
    },
    {
      "id": 7,
      "image":"https://i.ibb.co.com/x3B4T53/224911-1.jpg",
      "name": "George White",
      "email": "george.white@example.com",
      "phone": "+1-111-222-3333",
      "address": "159 Oakwood Street, Keystone, USA",
      "purchaseHistory": ["Digital Camera", "Tripod"]
    },
    {
      "id": 8,
      "image":"https://i.ibb.co.com/x3B4T53/224911-1.jpg",
      "name": "Hannah Lewis",
      "email": "hannah.lewis@example.com",
      "phone": "+1-666-777-8888",
      "address": "753 Willow Way, Fawcett City, USA",
      "purchaseHistory": ["Blender", "Cookware Set"]
    },
    {
      "id": 9,
      "image":"https://i.ibb.co.com/x3B4T53/224911-1.jpg",
      "name": "Ian Clark",
      "email": "ian.clark@example.com",
      "phone": "+1-999-000-1111",
      "address": "852 Aspen Avenue, Ivy Town, USA",
      "purchaseHistory": ["Bookshelf", "Office Chair"]
    },
    {
      "id": 10,
      "image":"https://i.ibb.co.com/x3B4T53/224911-1.jpg",
      "name": "Jenny Adams",
      "email": "jenny.adams@example.com",
      "phone": "+1-333-444-5555",
      "address": "963 Cherry Court, Smallville, USA",
      "purchaseHistory": ["Coffee Maker", "Toaster"]
    }
  ]
  


  // action area start here

  const [open, setOpen] = useState(false); 

  const see =()=>{
    console.log("see")
  }


  // edit area start here
  const modalRef = useRef()
  const edit =()=>{
    setOpen(true)
  }

  useEffect(() => {
    const outsideHandler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) { 
        setOpen(false);
      }
    };
  
    // Add the event listener
    document.addEventListener("mousedown", outsideHandler);
  
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", outsideHandler);
    };
  }, []);





  const del =()=>{
    console.log("see")
  }
  return (
    <div>
        <div className="main">
            <div className="title flex items-center justify-between">
                <div className="title">
                  <Title title="All User" className="text-2xl" />
                </div>
                <div className="path">
                    <Path parent=" Dashboard" child="User" last="All User" pathName="/all-user" dynamic=""/>
                </div> 
            </div>
            {/* main user area start here */}
            <div className=" bg-white rounded-lg mt-4">
              <div className="item p-4 ">
                 <div className="headrt flex items-center justify-between">
                   <div className=" max-w-lg   flex-1">
                      <SearchBar placeholder="Search here" />
                   </div>
                   <div className="">
                     <Button className="" title="Add new user"  icon={<GoPlus />}/>
                   </div>
                 </div>
                 {/* man area start here */}
                 <div className="main mt-4">
                   <div className=" overflow-x-auto">
                      <table className=" xxs:w-[800px] md:w-full">
                        <thead>
                          <tr className=" bg-[#f8f9fc] rounded-lg ">
                            <th className="text-start p-3">User</th>
                            <th className="text-start p-3">Phone</th>
                            <th className="text-start p-3">Email</th>
                            <th className="text-end p-3">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            user.map((item,index)=>
                              <tr className=" cursor-pointer hover:bg-[#f8f9fc] duration-300" key={index}>
                                <td>
                                   <div className="main flex items-center gap-2">
                                       <img className="md:w-[50px] md:h-[50px] xxs:w-[30px] rounded-xl" src={item?.image} alt="img" />
                                       <div className="content">
                                          <p className="xxs:text-xs md:text-base">{item?.name}</p>
                                          <p className="text-[#a1a4a9] xxs:text-xs md:text-base">{item?.purchaseHistory}</p>
                                       </div>
                                   </div>
                                </td>
                                <td className="xxs:text-xs md:text-base">{item?.phone}</td>
                                <td className="xxs:text-xs md:text-base">{item?.email}</td>
                                <td className=" flex items-center mt-4 justify-end  ">
                                   <Action see={see} edit={edit} del={del}/>
                                </td>
                              </tr>
                            )
                          }
                        </tbody>
                      </table>
                   </div>
                    {/* user foter area start */}
                    <div className="main pt-4 flex justify-center items-center  w-full">
                            <div className="showing-item"></div>
                            <div className="page">
                               <Pagenation/>
                            </div>
                        </div>
                 </div>
              </div>
            </div>
        </div>
        <UserModel open={open} modalRef={modalRef}/>
    </div>
  )
}

export default AllUser