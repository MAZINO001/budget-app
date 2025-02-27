// import { GoBellFill } from "react-icons/go";
// import avatar from "../../assets/avatar.jpg";
// import { BadgeIcon, SavingsBar } from "./PreBuildComp";
// import { useState } from "react";
// export default function TopBar() {
//   const [PopUp, setPopUp] = useState(false);

//   return (
//     <div className=" w-full h-[50px] flex justify-between items-center px-2 py-2 ">
//       {/* <div className=" w-[344px] md:w-[253px] text-sm md:text-md h-[33px] bg-gray-700 flex items-center justify-center rounded-md  p-1"> */}
//       <div className=" w-[344px]">
//         <span>
//           <SavingsBar />
//         </span>
//       </div>
//       <div className="flex items-center gap-4 ">
//         <span>hi</span>
//         <div
//           className="relative mr-2 md:mr-0 "
//           onClick={() => setPopUp((state) => !state)}
//         >
//           <span className="absolute bottom-4 left-4">
//             <BadgeIcon />
//           </span>
//           <GoBellFill className="text-3xl cursor-pointer" />
//         </div>
//         <div
//           className={
//             PopUp
//               ? "bg-white absolute top-10 right-16 flex flex-col p-2 gap-y-2 rounded-md largeZIindex "
//               : "bg-white absolute top-10 right-16 hidden flex-col p-2 gap-y-2 rounded-md largeZIindex "
//           }
//         >
//           <span className="bg-gray-600 p-1 rounded-sm">
//             You are financially fucked :)
//           </span>
//           <span className="bg-gray-600 p-1 rounded-sm">
//             You are financially fucked :)
//           </span>
//           <span className="bg-gray-600 p-1 rounded-sm">
//             You are financially fucked :)
//           </span>
//           <span className="bg-gray-600 p-1 rounded-sm">
//             You are financially fucked :)
//           </span>
//         </div>
//         <img
//           src={avatar}
//           className="w-[33px] h-[33px] rounded-full cursor-pointer hidden md:block "
//           alt="avatar"
//         />
//       </div>
//     </div>
//   );
// }
import { GoBellFill } from "react-icons/go";
import avatar from "../../assets/avatar.jpg";
import { BadgeIcon, SavingsBar } from "./PreBuildComp";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
export default function TopBar() {
  const [PopUp, setPopUp] = useState(false);
  const [Dark, setDark] = useState(true);
  return (
    <div className=" w-full h-[50px] flex justify-between items-center px-2 py-2 ">
      {/* <div className=" w-[344px] md:w-[253px] text-sm md:text-md h-[33px] bg-gray-700 flex items-center justify-center rounded-md  p-1"> */}
      <div className=" w-[344px]">
        <span>
          <SavingsBar />
        </span>
      </div>
      <div className="flex items-center gap-4 ">
        <span onClick={() => setDark((state) => !state)} className="text-2xl">
          {Dark ? <FaMoon /> : <FaSun />}
        </span>
        <div
          className="relative mr-2 md:mr-0 "
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
