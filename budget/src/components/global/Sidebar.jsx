// import { MdOutlineAddBox } from "react-icons/md";
// import { IoMdSettings } from "react-icons/io";
// import { MdHistory } from "react-icons/md";
// import { IoMdCalendar } from "react-icons/io";
// import { MdHomeFilled } from "react-icons/md";
// import { GiWallet } from "react-icons/gi";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// export default function Sidebar() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 640) {
//         setIsMobile(true);
//       } else {
//         setIsMobile(false);
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return (
//     <div className=" md:w-[50px] lg:w-[150px] h-[45px] max-h-[600px] md:h-[100vh] flex flex-row md:flex-col justify-between items-center">
//       <div className="flex items-center gap-2 md:ml-0 ml-2 md:mt-2">
//         <Link to="/">
//           <GiWallet className=" text-2xl font-semibold tracking-wide cursor-pointer" />
//         </Link>
//         <span className="text-lg  none sm:hidden lg:flex flex">CashCare</span>
//       </div>
//       <div
//         className={`${
//           isMobile
//             ? "flex flex-row md:flex-col justify-between md:h-[400px] text-3xl cursor-pointer gap-14 mobileSidebar "
//             : "flex flex-row md:flex-col justify-between md:h-[400px] text-3xl cursor-pointer gap-14 mx-4 "
//         }`}
//       >
//         <div className="flex items-center gap-2">
//           <Link to="/">
//             <MdHomeFilled />
//           </Link>
//           <span className="text-sm none hidden lg:flex">Dashboard</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <Link to="/addnew">
//             <MdOutlineAddBox />
//           </Link>
//           <span className="text-sm hidden lg:flex">Add New</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <Link to="/history">
//             <MdHistory />
//           </Link>
//           <span className="text-sm hidden lg:flex">History</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <Link to="/calendar">
//             <IoMdCalendar />
//           </Link>
//           <span className="text-sm hidden lg:flex">Calendar</span>
//         </div>
//       </div>
//       <div className="flex items-center gap-2 text-3xl cursor-pointer md:mb-2 md:mr-0 mr-2 ">
//         <Link to="/dettings">
//           <IoMdSettings />
//         </Link>
//         <span className="text-sm hidden lg:flex">Settings</span>
//       </div>
//     </div>
//   );
// }
import { MdOutlineAddBox } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className=" md:w-[50px] lg:w-[150px] h-[45px] max-h-[600px] md:h-[100vh] flex flex-row md:flex-col justify-between items-center">
      <Link to="/" className="flex items-center gap-2 md:ml-0 ml-2 md:mt-2">
        <GiWallet className=" text-2xl font-semibold tracking-wide cursor-pointer" />
        <span className="text-lg  none sm:hidden lg:flex flex">CashCare</span>
      </Link>
      <div
        className={`${
          isMobile
            ? "flex flex-row md:flex-col justify-between md:h-[400px] text-3xl cursor-pointer gap-14 mobileSidebar "
            : "flex flex-row md:flex-col justify-between md:h-[400px] text-3xl cursor-pointer gap-14 mx-4 "
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <MdHomeFilled />
          <span className="text-sm none hidden lg:flex">Dashboard</span>
        </Link>
        <Link to="/addnew" className="flex items-center gap-2">
          <MdOutlineAddBox />
          <span className="text-sm hidden lg:flex">Add New</span>
        </Link>
        <Link to="/history" className="flex items-center gap-2">
          <MdHistory />
          <span className="text-sm hidden lg:flex">History</span>
        </Link>
        <Link to="/calendar" className="flex items-center gap-2">
          <IoMdCalendar />
          <span className="text-sm hidden lg:flex">Calendar</span>
        </Link>
      </div>
      <Link
        to="/dettings"
        className="flex items-center gap-2 text-3xl cursor-pointer md:mb-2 md:mr-0 mr-2 "
      >
        <IoMdSettings />
        <span className="text-sm hidden lg:flex">Settings</span>
      </Link>
    </div>
  );
}
