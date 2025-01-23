import React, { useState } from 'react';
import Title from '../ui/Title';
import UserPermission from '../ui/UserPermission';

const Them = () => {
   const [inputValu, setInputValu] = useState("120");
   const valueHere = (event) => {
      setInputValu(event.target.value);
   };

   return (
      <div className="bg-white rounded-lg">
         <div className="main p-4 flex">
            <div className="w-[40%]">
               <Title title="Them" />
               <p className="text-[13px] text-[#666B81]">Setting for theme</p>
            </div>
            <div className="w-[60%] flex flex-col gap-2">
               <div className="cace-area">
                  <Title title="Enable cache site map?" />
                  <UserPermission />
               </div>
               {/* site map area here start */}
               <div className="main">
                  <Title title="Cache Time Site map (minutes)" />
                  <div className="input">
                     <input
                        value={inputValu}
                        onChange={valueHere}
                        className="border outline-none w-full mt-1 p-2 rounded-lg"
                        type="text"
                     />
                  </div>
               </div>
               {/* admin bar area here start */}
               <div className="main">
                  <div className="item flex gap-2">
                     <div className="check">
                        <input className="w-[20px] h-[20px]" type="checkbox" name="" id="" />
                     </div>
                     <p className="text-[13px] text-[#666B81]"> Show admin bar (When admin logged in, still show admin bar in website)?</p>
                  </div>
               </div>

               {/* rediret not found from */}
               <div className="redirect">
                  <div className="title">
                     <Title title="Redirect all not found requests to homepage?" />
                     <UserPermission/>
                  </div>
               </div>

               {/* shoe guide line area here start */}
               <div className="main">
                  <Title title="Show guidelines?" />
                  <UserPermission/>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Them;
