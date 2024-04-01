// import { IoMdRestaurant } from "react-icons/io";
// export default function History() {
//   return (
//     <div className="overflow-hidden">
//       <h3 className="pb-1 text-lg font-semibold tracking-wider">History</h3>
//       <hr className="pb-2" />
//       <div className="flex flex-col gap-2 items-center overflow-auto">
//         <div className="bg-gray-700 w-[100%] h-[46px] rounded-md px-2 flex items-center justify-between">
//           <div className="flex">
//             <IoMdRestaurant className="text-[28px] text-red-500 border-red-500 rounded-full border" />
//             <span className="ml-2">Food</span>
//           </div>
//           <div>
//             <span>200$</span>
//           </div>
//         </div>
//         <div className="bg-gray-700 w-[100%] h-[46px] rounded-md px-2 flex items-center justify-between">
//           <div className="flex">
//             <IoMdRestaurant className="text-[28px] text-red-500 border-red-500 rounded-full border" />
//             <span className="ml-2">Food</span>
//           </div>
//           <div>
//             <span>200$</span>
//           </div>
//         </div>
//         <div className="bg-gray-700 w-[100%] h-[46px] rounded-md px-2 flex items-center justify-between">
//           <div className="flex">
//             <IoMdRestaurant className="text-[28px] text-red-500 border-red-500 rounded-full border" />
//             <span className="ml-2">Food</span>
//           </div>
//           <div>
//             <span>200$</span>
//           </div>
//         </div>
//         <div className="bg-gray-700 w-[100%] h-[46px] rounded-md px-2 flex items-center justify-between">
//           <div className="flex">
//             <IoMdRestaurant className="text-[28px] text-red-500 border-red-500 rounded-full border" />
//             <span className="ml-2">Food</span>
//           </div>
//           <div>
//             <span>200$</span>
//           </div>
//         </div>
//         {/* testing */}

//         {/* <div className="bg-gray-700 w-[100%] h-[46px] rounded-md px-2 flex items-center justify-between">
//           <div className="flex">
//             <IoMdRestaurant className="text-[28px] text-red-500 border-red-500 rounded-full border" />
//             <span className="ml-2">Food</span>
//           </div>
//           <div>
//             <span>200$</span>
//           </div>
//         </div>
//         <div className="bg-gray-700 w-[100%] h-[46px] rounded-md px-2 flex items-center justify-between">
//           <div className="flex">
//             <IoMdRestaurant className="text-[28px] text-red-500 border-red-500 rounded-full border" />
//             <span className="ml-2">Food</span>
//           </div>
//           <div>
//             <span>200$</span>
//           </div>
//         </div>
//         <div className="bg-gray-700 w-[100%] h-[46px] rounded-md px-2 flex items-center justify-between">
//           <div className="flex">
//             <IoMdRestaurant className="text-[28px] text-red-500 border-red-500 rounded-full border" />
//             <span className="ml-2">Food</span>
//           </div>
//           <div>
//             <span>200$</span>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { HistoryPreBiuld2 } from "../global/PreBuildComp";

export default function History() {
  return (
    <div className="bg-gray-700 rounded-md">
      <div className="flex justify-between items-center">
        <h3 className="pb-1 text-lg font-semibold tracking-wider">History</h3>
        <Link to="/history">
          <span className="text-md hover:bg-red-500 p-1 rounded-md">
            See All
          </span>
        </Link>
      </div>

      <hr className="pb-2 " />
      <HistoryPreBiuld2 />
    </div>
  );
}
