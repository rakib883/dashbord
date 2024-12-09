import React from 'react';
import { Link } from 'react-router-dom'; 
import { MdKeyboardArrowRight } from 'react-icons/md'; 
import { useLocation } from 'react-router-dom'; 

const Path = ({ parent, child,last, pathName,dynamic }) => {
  const location = useLocation(); 

  return (
    <div className="path text-xs">
      <div className="main flex items-center gap-2">
        <Link to="/" className="item flex items-center gap-1">
          <p>{parent}</p>
          <MdKeyboardArrowRight className="text-xl" />
        </Link>
        <div className="item flex items-center gap-1">
          <p>{child}</p>
          <MdKeyboardArrowRight className="text-xl" />
        </div>
        <div className="item flex items-center gap-1">
          <p className={`${location.pathname === pathName ? 'text-gray-500' : ''}`}>
            { last}
          </p>
          <MdKeyboardArrowRight className="text-xl" />
        </div>
         {
             dynamic &&
             <div className="item flex items-center gap-1">
                <p className={`${location.pathname === pathName ? 'text-gray-500' : ''}`}>
                  {dynamic}
                </p>
                <MdKeyboardArrowRight className="text-xl" />
            </div>

         }
      </div>
    </div>
  );
};

export default Path;
