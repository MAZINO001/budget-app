import { MdOutlineAddBox } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
export default function Sidebar() {
  return (
    <div className=" w-[150px] h-[100vh] flex flex-col justify-between items-center bg-gray-500">
      <GiWallet className="text-3xl mt-4 cursor-pointer" />
      <div className="flex flex-col justify-between h-[400px]  text-2xl cursor-pointer ">
        <div className="flex items-center gap-2">
          <MdHomeFilled />
          <span className="text-sm ">Dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineAddBox />
          <span className="text-sm">Add New</span>
        </div>
        <div className="flex items-center gap-2">
          <MdHistory />
          <span className="text-sm">History</span>
        </div>
        <div className="flex items-center gap-2">
          <IoMdCalendar />
          <span className="text-sm">Calendar</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-2xl cursor-pointer mb-4">
        <IoMdSettings />
        <span className="text-sm">Settings</span>
      </div>
    </div>
  );
}
