import { MdOutlineAddBox } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
export default function Sidebar() {
  return (
    <div className=" w-[10vw] h-[100vh] flex flex-col justify-between items-center">
      <GiWallet className="text-3xl mt-2 cursor-pointer" />
      <div className="flex flex-col justify-between h-[400px]  text-2xl cursor-pointer mb-16">
        <MdHomeFilled className="" />
        <MdOutlineAddBox className="" />
        <MdHistory className="" />
        <IoMdCalendar className="" />
      <IoMdSettings className="" />
      </div>
    </div>
  );
}
