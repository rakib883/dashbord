import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import Title from '../ui/Title';
import { MdKeyboardArrowRight } from "react-icons/md";
import Upload from '../component/Upload';
import ImageUpload from '../component/ImageUpload';

const AddProduct = () => {
  const location = useLocation(); // Get the current pathname

  return (
    <div>
      <div className="main">
        <div className="item">
          <div className="title">
            <div className="title flex flex-col md:flex-row justify-between text-xs">
              <div className="item">
                <Title className="text-2xl" title="Add Product" />
              </div>
              <div className="main flex items-center gap-2">
                <Link to="/" className="item flex items-center gap-1"> 
                  <p>Dashboard</p>
                  <MdKeyboardArrowRight className="text-xl" />
                </Link>
                <div className="item flex items-center gap-1">
                  <p>Ecomarch</p>
                  <MdKeyboardArrowRight className="text-xl" />
                </div>
                <div className="item flex items-center gap-1">
                  <p className={location.pathname === '/add-product' ? 'text-gray-500' : ''}>
                    Add Product
                  </p>
                  <MdKeyboardArrowRight className="text-xl" />
                </div>
              </div>
            </div>
          </div>
          {/* main content area start */}
          <div className="main flex flex-col md:flex-row mt-4 gap-10" >
             {/* add product area  */}
             <div className="addproct md:w-[50%] w-full">
                <Upload/>
             </div>
             {/* image upload area start */}
             <div className="image-upload md:w-[50%] w-full"> 
                 <ImageUpload/> 
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
