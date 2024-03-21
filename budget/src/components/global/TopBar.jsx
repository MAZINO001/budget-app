import { GoBellFill } from "react-icons/go";
import avatar from "../../assets/avatar.jpg"
export default function TopBar() {
  return (
    <div className=" w-full h-[7vh] flex justify-between items-center">
      <div className="w-[200px] h-[30px] bg-gray-500 text-center rounded-md">latest transacions</div>
      <div className="flex items-center gap-4 mr-2">
        <div className="w-[100px] h-[30px] bg-gray-500 pl-4 rounded-md">Range</div>
        <GoBellFill className="text-2xl"/>
        <img src={avatar} className="w-[30px] h-[30px] rounded-full  " alt="avatar" />
      </div>
    </div>
  );
}
