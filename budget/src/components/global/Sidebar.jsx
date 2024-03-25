import { MdOutlineAddBox } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
export default function Sidebar() {
  return (
    <div className=" md:w-[50px] lg:w-[150px] h-[45px] max-h-[600px] md:h-[100vh] flex flex-row md:flex-col justify-between items-center bg-gray-500 sm:bg-blue-500 md:bg-green-500 lg:bg-yellow-500">
      <GiWallet className="text-3xl md:ml-0 ml-2 md:mt-2 cursor-pointer" />
      <div className="flex flex-row md:flex-col justify-between md:h-[400px] text-2xl lg:text-2xl md:text-3xl cursor-pointer gap-14 mx-4">
        <div className="flex items-center gap-2">
          <MdHomeFilled />
          <span className="text-sm none hidden lg:flex">Dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineAddBox />
          <span className="text-sm hidden lg:flex">Add New</span>
        </div>
        <div className="flex items-center gap-2">
          <MdHistory />
          <span className="text-sm hidden lg:flex">History</span>
        </div>
        <div className="flex items-center gap-2">
          <IoMdCalendar />
          <span className="text-sm hidden lg:flex">Calendar</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-2xl lg:text-2xl md:text-3xl cursor-pointer md:mb-2 md:mr-0 mr-2 ">
        <IoMdSettings />
        <span className="text-sm hidden lg:flex">Settings</span>
      </div>
    </div>
  );
}
