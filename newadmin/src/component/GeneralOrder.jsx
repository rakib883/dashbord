import React, { useState } from 'react';
import Title from '../ui/Title';
import { FiUploadCloud } from "react-icons/fi";
import PosetionButton from '../ui/PosetionButton';

const GeneralOrder = () => {
  const [userValue, setUserValue] = useState("Themforest");

  const themforest = (event) => {
    setUserValue(event.target.value); // Update the state with the new input value
  };

 // posetion button
 const [right,setRight] = useState(1) 
 const [rich,setRich] = useState(1)
  return (
    <div>
      <div className="main bg-white p-4 rounded-lg flex">
        {/* right side area here start */}
        <div className="right  w-[40%]">
          <div className="title">
            <Title title="Admin appearance" />
            <p className="text-[13px] text-[#666B81]">Setting admin appearance such as editor, language...</p>
          </div>
        </div>
        {/* left side area here start */}
        <div className="main w-[60%] flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="first">
              <Title title="Avatar" />
              <label htmlFor="avatarInput">
                <div className="flex-col border border-[#3180fc] mt-2 border-dotted max-w-[100px] cursor-pointer h-[200px] rounded-md text-xs flex justify-center items-center">
                  <div className="icon">
                    <FiUploadCloud className="text-[40px] text-[#3180fc]" />
                  </div>
                  <p className="text-center p-4">
                    Drop your images here or select <span className="text-[#3180fc]">click to browse</span>
                  </p>
                </div>
                <input type="file" id="avatarInput" hidden />
              </label>
            </div>
            <div className="first">
              <Title title="Favicon" />
              <label htmlFor="faviconInput">
                <div className="flex-col border border-[#3180fc] mt-2 border-dotted max-w-[100px] cursor-pointer h-[200px] rounded-md text-xs flex justify-center items-center">
                  <div className="icon">
                    <FiUploadCloud className="text-[40px] text-[#3180fc]" />
                  </div>
                  <p className="text-center p-4">
                    Drop your images here or select <span className="text-[#3180fc]">click to browse</span>
                  </p>
                </div>
                <input type="file" id="faviconInput" hidden />
              </label>
            </div>
            <div className="first">
              <Title title="Cover (1920x1080)" />
              <label htmlFor="coverInput">
                <div className="flex-col border border-[#3180fc] mt-2 border-dotted max-w-full cursor-pointer h-[200px] rounded-md text-xs flex justify-center items-center">
                  <div className="icon">
                    <FiUploadCloud className="text-[40px] text-[#3180fc]" />
                  </div>
                  <p className="text-center px-4">
                    Drop your images here or select <span className="text-[#3180fc]">click to browse</span>
                  </p>
                </div>
                <input type="file" id="coverInput" hidden />
              </label>
            </div>
          </div>
          {/* admin title area here start  */}
          <div className="main">
            <div className="title">
              <Title title="Admin title" />
            </div>
            <div className="input mt-2">
              <input className=" border outline-none  w-full rounded-lg p-2 text-md" type="text" value={userValue} onChange={themforest} />
            </div>
          </div>
          {/* admin language direction */}
          <div className="main">
            <div className="title">
              <Title title="Admin language direction"/>
            </div>
            <div className="main-item mt-2">
               <PosetionButton right={rich} setRight={setRich}/>
            </div>
          </div>
           {/* admin language direction */}
           <div className="main">
            <div className="title">
              <Title title="Rich editor"/>
            </div>
            <div className="main-item mt-2">
               <PosetionButton right={right} setRight={setRight} />
            </div>
          </div>
          {/* check box area here start */}
          <div className="main flex gap-2 items-center">
            <div className="check">
              <input className="w-[20px] h-[20px] mt-2" type="checkbox" name=" " id="" />
            </div>
            <div className="text">Enable change admin theme?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralOrder;
