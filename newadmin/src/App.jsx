import { useEffect, useRef, useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { LuMoon } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMessage } from "react-icons/bi";
import { IoScanOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import Title from "./ui/Title";
import Border from "./ui/Border";
import { FaPercentage } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { FaUnity } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import Sidebar from "./component/SideBar";
import { FaXmark } from "react-icons/fa6";
import MobileMenu from "./component/MobileMenu";
import HeaderSearch from "./component/HeaderSearch";
import Message from "./component/Message";
import Notifaction from "./component/Notifaction";
import HeaderDashBord from "./component/HeaderDashBord";
import AdminProfile from "./component/AdminProfile";
import { ToastContainer } from 'react-toastify';
import { useSelector } from "react-redux";



function App() {
  // countery array area start
  const countery = [   
    {name:"bangladesh",flag:"https://i.ibb.co.com/7phT04f/bangladesh.png"},
    {name:"US",flag:" https://i.ibb.co.com/DGrgq1b/icons8-india-50.png"},
    {name:"India",flag:"https://i.ibb.co.com/98BN3rs/united-states.png"}
  ]
//  message area start
const message =[
  {message:"hello sir??",name:"jon doe",time:"12.00PM", image:"https://themesflat.co/html/remos/images/avatar/user-11.png"},
  {message:"are you avliable??",name:"smith doe",time:"01.00PM", image:"https://themesflat.co/html/remos/images/avatar/user-12.png"},
  {message:"your product problem",name:"camtesia",time:"06.00PM", image:"https://themesflat.co/html/remos/images/avatar/user-13.png"},
  {message:"thanks",name:"yong doe",time:"12.00PM", image:"https://themesflat.co/html/remos/images/avatar/user-11.png"},
]

// notifaction area start
const notifactionItem = [
  {image:<FaPercentage  />,title:"Discount available",message:"Morbi sapien massa, ultricies at rhoncus at, ullamcorper nec diam"},
  {image:<FaUserClock />,title:"Account has been verified",message:"Mauris libero ex, iaculis vitae rhoncus et"},
  {image:<FaUnity />,title:"Order shipped successfully",message:"Integer aliquam eros nec sollicitudin sollicitudin"},
  {image:<TbTruckDelivery />,title:"Order pending: ID 305830",message:"Ultricies at rhoncus at ullamcorper"},
]


// releted apps area start
const reletedApps = [
   {icon:"https://i.ibb.co.com/PN7zQKJ/photoshop.png",name:"Photoshop"},
   {icon:"https://i.ibb.co.com/M62YMwH/illustrator.png",name:"illustrator"},
   {icon:"https://i.ibb.co.com/0t2RWkx/sheets.png",name:"Sheet"},
   {icon:"https://i.ibb.co.com/JcmZ28d/gmail.png",name:"Gmail"},
   {icon:"https://i.ibb.co.com/nCFWQk8/video.png",name:"youtube"},
   {icon:"https://i.ibb.co.com/Cm4cnzH/instagram.png",name:"Instgram"},
   {icon:"https://i.ibb.co.com/PQRgGBJ/pdf.png",name:"PDF"},
]


  // alll state here
  const menuRef = useRef(null)
  const messageClose = useRef(null)
  const notifactionRef = useRef(null)
  const appsRef = useRef(null)
  const profileRef = useRef(null)
  const [navbar,setNavbar] = useState(true)
  const [openItem,setOpenItem] = useState("")
  const [counteryDropDown,setCounter] = useState("https://i.ibb.co.com/7phT04f/bangladesh.png")
  const [messageHandeler,setMessageHandeler] = useState(false)
  const [notifaction,setNotfication] = useState(false)
  const [appsSection,setAppsSection] = useState(false)
  const [userProfile,setProfile] = useState(false)
 




  const outSideHandler = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      // Close the menu when clicking outside
      setOpenItem("");
    }

    if (messageClose.current && !messageClose.current.contains(e.target)) {
      // Close the menu when clicking outside
      setMessageHandeler("");
    }

    if (messageClose.current && !messageClose.current.contains(e.target)) {
      // Close the menu when clicking outside
      setNotfication("");
    }

    if (appsRef.current && !appsRef.current.contains(e.target)) {
      // Close the menu when clicking outside
      setAppsSection(false);
    }
 
    if (profileRef.current && !profileRef.current.contains(e.target)) {
      // Close the menu when clicking outside
      setProfile(false);
    }

   

  };
  
  useEffect(() => {
    // Add the event listener to handle outside clicks
    document.addEventListener("mousedown", outSideHandler);
  
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", outSideHandler);
    };
  }, []);
  
const hanseler =()=>{
  console.log("hello")
}

const Gettoken = useSelector((state) => state.allData.token);
const location = useLocation()
const navagete = useNavigate()
const [token,setToken] = useState(Gettoken)
  return (
    <div className="bg-[#f2f7fb]">
        <div className="ite-area flex h-screen font-mainFont ">
            {/* Sidebar */}
            {
             Gettoken &&
            <div className={`${ navbar ? 'w-[25%]' : "w-0"} xxs:hidden md:block  h-screen overflow-y-auto no-scrollbar  transition-all duration-700 bg-white `}>
                <div className="item   h-screen bg-black/700  "  >
                    <div className="heade  h-full  " >
                       <div className="all-item">
                           <div className="item bg-white sticky top-0 border-b-[2px]  z-50 py-3">
                              <div className=" flex items-center justify-between image mx-4 ">
                                 <div className="">
                                    <img className="w-[150px]"  src="https://themesflat.co/html/remos/images/logo/logo@2x.png" alt="logo" />
                                 </div>
                                 <div onClick={() => setNavbar(false)} className="icon cursor-pointer border border-gray-400 shadow-xl hover:border-black/80 duration-300">
                                    <FaXmark className=" text-3xl" />
                                 </div>
                              </div>
                           </div>    
                         {/* navbar main item here area start */}
                         <div className="main  max-h-screen overflow-y-auto no-scrollbar ">
                            <div className="content mx-4">
                              <Sidebar/>
                            </div>
                         </div>
                       </div>
                    </div>
                </div>
            </div> 
             }
            {/* Main Content */}
            <div className={` ${navbar ? "w-[75%]" :"w-[100%]" } xxs:w-full  overflow-y-auto bg-[#f2f7fb]  transition-all duration-700 min-h-screen z-50 `}>
                <div  className="item "  >
                  {
                     Gettoken &&
                   <div className="header bg-white py-2 shadow-xl  sticky top-0 z-50  ">
                        {/* mobile area here start  */}
                          <div className=" md:hidden ">
                             <MobileMenu/>
                          </div>
                        {/* mobile area end here */}
                        <div className="xxs:hidden md:block">
                         <div className="item mx-4 flex gap-4 items-center justify-between ">
                             {/* search area astart */}
                                <HeaderSearch navbar={navbar} setNavbar={setNavbar} />
                                {/* user-and-icon  */}
                                <div className="user flex gap-8 items-center">
                                   <div ref={menuRef} className="all-menu relative ">
                                      <div onClick={()=>setOpenItem(1)} className="countery h-8 cursor-pointer w-8 bg-[#e4e9f0] rounded-full flex justify-center items-center">
                                           <img className="h-6op    w-6" src={counteryDropDown} alt="" />
                                      </div>
                                      {/* iner area atart */}
                                      <div  className={` ${openItem === 1 ? "block" :"hidden"} absolute mt-6 w-[200px] bg-white rounded-md shadow-xl`}>
                                       {
                                         countery.map((item,index)=>(
                                          <div key={index} onClick={()=>{setCounter(item?.flag),setOpenItem("")}} className="item p-1 mx-4 flex items-center gap-2 my-2 cursor-pointer">
                                              <div className="image">
                                                 <img className="w-6 h-6" src={item?.flag} alt="flag" />
                                              </div>
                                              <p>{item?.name}</p>
                                          </div>
                                         ))
                                       }
                                        
                                      </div>
                                   </div>
                                   <div className="all-menu">
                                      <div className="countery  h-8 cursor-pointer w-8 bg-[#e4e9f0] rounded-full flex justify-center items-center">
                                           <LuMoon className="h-6 w-6" />    
                                      </div>
                                   </div>



                                    {/* mesage area here  */}
                                   <div  className="all-menu relative">
                                      <div onClick={()=>setMessageHandeler(true)}  className="countery relative h-8 cursor-pointer w-8 bg-[#e4e9f0] rounded-full flex justify-center items-center">
                                           <BiMessage className="h-6 w-6" />
                                           <div className=" bg-[#ff5200] text-[12px] text-white font-semibold top-[-4px] right-[-6px] absolute h-4 w-4 rounded-full  flex justify-center items-center">
                                              9+
                                           </div>
                                      </div>
                                      {/* message iner item start */}
                                      <div ref={messageClose}   className={`${ messageHandeler  ? "block" :"hidden"} item absolute right-2 top-14 bg-white w-[350px] rounded-md`}>
                                         <div  className={` cotent mx-4 font-mainFont `}>
                                             <div className="title py-[15px]">
                                                 <Title title="Message" className="text-base" />
                                             </div>
                                             <Border/>
                                             <Message message={message} hanseler={hanseler}/>
                                         </div>
                                      </div>
                                   </div>

                                   {/* notefaction area start */}
                                   <div className=" relative">
                                      <div onClick={()=>setNotfication(true)} className="countery relative h-8 cursor-pointer w-8 bg-[#e4e9f0] rounded-full flex justify-center items-center">
                                           <IoIosNotificationsOutline className="h-6 w-6"  />
                                           <div className=" bg-[#2275fc] text-[12px] text-white font-semibold top-[-4px] right-[-6px] absolute h-4 w-4 rounded-full  flex justify-center items-center">
                                              8
                                           </div>
                                      </div>
                                      {/* notifaction iner item */}
                                      <div ref={notifactionRef} className={`${notifaction ? "block" : "hidden"} item absolute bg-white w-[350px] right-2 top-14 rounded-md`}>
                                         <div className="item px-4 py-2">
                                            <div className="title py-2">
                                               <Title title="Notifications"/>
                                            </div>
                                            <Border/>
                                            <Notifaction notifactionItem={notifactionItem} />
                                         </div>
                                      </div>
                                   </div>





                                   <div className="all-menu">
                                      <div className="countery h-8 cursor-pointer w-8 bg-[#e4e9f0] rounded-full flex justify-center items-center">
                                           <IoScanOutline className="h-6 w-6" />
                                      </div>
                                   </div>

                                   <div onClick={()=>setAppsSection(true)} className="all-menu relative">
                                      <div  className="countery h-8 cursor-pointer w-8 bg-[#e4e9f0] rounded-full flex justify-center items-center">
                                           <RxDashboard className="h-6 w-6" />
                                      </div>
                                      {/* dash bord iner item area start */}
                                      <div ref={appsRef} className={`${appsSection ? "block" : "hidden"} main absolute bg-white right-4 top-14 w-[350px] rounded-md`}>
                                        <div className="content p-4">
                                            <div className="title py-2 mb-2">
                                               <Title title="Related apps"/>
                                            </div>
                                            <Border/>
                                            <HeaderDashBord reletedApps={reletedApps} />
                                        </div>
                                      </div>
                                   </div>
                                   <div onClick={()=>setProfile(true)} className=" cursor-pointer relative-menu flex items-center gap-1 border-r-2 pr-12">
                                      <div  className="countery h-8 cursor-pointer w-8 bg-[#e4e9f0] rounded-full flex justify-center items-center">
                                           <FiUser className="h-6 w-6" />
                                      </div>
                                      <div className="text leading-[15px]">
                                         <p className="text-[14px] font-bold ">Jasim doe</p>
                                         <p className="text-[12px] font-medium">Admin</p>
                                      </div>
                                       {/* adminuser ptofile area start */}
                                       <div ref={profileRef} className={`${ userProfile ? "block" : "hidden"} main absolute right-[50px] top-20`}>
                                        <AdminProfile />
                                      </div>
                                   </div>
                                   <div className="all-menu flex items-center gap-1  ">
                                      <div className="countery relative  cursor-pointer  bg-[#e4e9f0] rounded-full flex justify-center items-center">
                                           <img src="https://i.ibb.co.com/jw6T619/icons8-gear.gif" className="h-8 w-8" />
                                      </div>
                                   </div>
                                </div>
                         </div>
                        </div> 
                     </div> 
                  }
                     <div className="main p-8">
                        <Outlet/>
                     </div>
                   {
                    <div className="foter]">
                       <div className="main text-center bg-white py-2 w-full">
                           <p>This site develop by <a className="text-green-600 hover:underline" href="https://protflio-lyart.vercel.app/">sheikhrakib883@gmail.com</a>  </p>
                       </div>
                     </div>
                     }
                </div>
            </div>
            <ToastContainer />
        </div> 
    </div>
)
}

export default App
