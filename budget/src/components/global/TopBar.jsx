import { GoBellFill } from "react-icons/go";
import avatar from "../../assets/avatar.jpg";
import { BadgeIcon, Rnage } from "./PreBuildComp";
import Data from "../../Data/fakeData.json";
import { useState } from "react";
export default function TopBar() {
  const [PopUp, setPopUp] = useState(false);

  const sortedData = Data.sort((a, b) => {
    const dateA = new Date(`${a.Date} ${a.Time}`);
    const dateB = new Date(`${b.Date} ${b.Time}`);
    return dateB - dateA;
  });
  const lastTransaction = sortedData[0];

  return (
    <div className=" w-full h-[50px] flex justify-between items-center px-2 py-2 ">
      <div className="w-[180px] h-[33px] bg-gray-700 flex items-center justify-center rounded-md text-sm p-1">
        <span>
          {lastTransaction.Description} : {lastTransaction.Amount} $
        </span>
      </div>
      <div className="flex items-center gap-4 ">
        <div className=" ml-4 flex items-center gap-4 rounded-md bg-gray-700 ">
          <Rnage />
        </div>
        <div
          className="relative mr-2 md:mr-0"
          onClick={() => setPopUp((state) => !state)}
        >
          <span className="absolute bottom-4 left-4">
            <BadgeIcon />
          </span>
          <GoBellFill className="text-3xl cursor-pointer" />
        </div>
        <div
          className={
            PopUp
              ? "bg-white absolute top-10 right-16 flex flex-col p-2 gap-y-2 rounded-md largeZIindex "
              : "bg-white absolute top-10 right-16 hidden flex-col p-2 gap-y-2 rounded-md largeZIindex "
          }
        >
          <span className="bg-gray-600 p-1 rounded-sm">
            You are financially fucked :)
          </span>
          <span className="bg-gray-600 p-1 rounded-sm">
            You are financially fucked :)
          </span>
          <span className="bg-gray-600 p-1 rounded-sm">
            You are financially fucked :)
          </span>
          <span className="bg-gray-600 p-1 rounded-sm">
            You are financially fucked :)
          </span>
        </div>
        <img
          src={avatar}
          className="w-[33px] h-[33px] rounded-full cursor-pointer hidden md:block "
          alt="avatar"
        />
      </div>
    </div>
  );
}
