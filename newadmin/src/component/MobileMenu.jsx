import React, { useEffect, useRef, useState } from 'react';
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Sidebar from './SideBar';

const MobileMenu = () => {
  const [open, setOpen] = useState(false); // Default state should be false so menu is closed initially

  // Open the menu handler
  const menuOpenHandler = () => {
    setOpen(true);
  };

  // Close the menu handler
  const closeMenuHandler = () => {
    setOpen(false);
  };

  // Outside click handler
  const menuRef = useRef(null);

  const outsideClickHandler = (e) => {
    // Check if the click was outside the menu
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  // Add event listener for outside click on component mount
  useEffect(() => {
    document.addEventListener("mousedown", outsideClickHandler);
    
    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  }, []);

  return (
    <div className="relative">
      <div className="main">
        <div className="icon-area mx-4 flex justify-between items-center">
          <div className="icin flex items-center gap-2">
            <div className="image">
              <img className="xxs:h-[30px] xs:h-[40px]" src="https://themesflat.co/html/remos/images/logo/logo@2x.png" alt="logo" />
            </div>
            <div onClick={menuOpenHandler} className="cursor-pointer z-10">
              <HiMiniBars3 />
            </div>
          </div>
          <div>
            <img className="h-[20px]" src="https://i.ibb.co.com/jw6T619/icons8-gear.gif" alt="settings" />
          </div>
        </div>
      </div>

      <div 
    
        className={`${
          open ? "right-0" : "right-[400px]"
        } main-content-area absolute top-[-8px] w-full transition-all duration-500`}
      >
        <div     ref={menuRef}  className="item bg-white h-screen w-[50%] mt-[44px] overflow-x-auto">
          {/* Mobile header */}
          <div className="flex justify-between items-center p-2">
            <div className="icon"></div>
            <div onClick={closeMenuHandler} className="transition-all duration-500 cursor-pointer border shadow-2xl">
              <RxCross2 className="text-xl" />
            </div>
          </div>
          <div className="menu">
            <Sidebar onClick={menuOpenHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
