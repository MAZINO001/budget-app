import { GoBellFill } from "react-icons/go";
import avatar from "../../assets/avatar.jpg";
import { Rnage } from "./PreBuildComp";
export default function TopBar() {
  return (
    <div className=" w-full h-[50px] flex justify-between items-center px-2">
      <div className="w-[200px] h-[35px] bg-gray-700 flex items-center justify-center rounded-md">
        Food at KFC 50$
      </div>
      <div className="flex items-center gap-4 ">
        <div className=" pl-4  flex items-center gap-4 rounded-md">
          <Rnage />
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
