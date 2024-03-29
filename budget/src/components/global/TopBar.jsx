import { GoBellFill } from "react-icons/go";
import DropdownMenu from "./PreBuildComp";
import avatar from "../../assets/avatar.jpg";
export default function TopBar() {
  return (
    <div className=" w-full h-[50px] flex justify-between items-center px-2">
      <div className="w-[150px] h-[35px] bg-gray-700 flex items-center justify-center rounded-md">
        latest transacions
      </div>
      <div className="flex items-center gap-4 ">
        <div className="w-[80px] h-[35px] pl-4  flex items-center gap-4 bg-gray-700 rounded-md">
          <DropdownMenu />
        </div>
        <GoBellFill className="text-2xl cursor-pointer" />
        <img
          src={avatar}
          className="w-[30px] h-[30px] rounded-full cursor-pointer"
          alt="avatar"
        />
      </div>
    </div>
  );
}
