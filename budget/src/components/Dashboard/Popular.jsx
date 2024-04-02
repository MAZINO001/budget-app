// export default function Popular() {
//   return (
//     <div className=" ">
//       <h3 className="pb-1 text-lg font-semibold tracking-wider ">Popular</h3>
//       <hr className="pb-2" />
//       <div className="flex flex-col gap-2 items-center">
//         <div className="bg-gray-700 w-[100%] h-[46px] rounded-md px-2 flex items-center justify-between">
//           <span className="ml-2">Food</span>
//           <span className="ml-2">KFC</span>
//           <div>
//             <span>200$</span>
//           </div>
//         </div>
//         <div className="bg-gray-700 w-[100%] h-[46px] rounded-md px-2 flex items-center justify-between">
//           <span className="ml-2">Food</span>
//           <span className="ml-2">KFC</span>
//           <div>
//             <span>200$</span>
//           </div>
//         </div>
//         <div className="bg-gray-700 w-[100%] h-[46px] rounded-md px-2 flex items-center justify-between">
//           <span className="ml-2">Food</span>
//           <span className="ml-2">KFC</span>
//           <div>
//             <span>200$</span>
//           </div>
//         </div>
//         <div className="bg-gray-700 w-[100%] h-[46px] rounded-md px-2 flex items-center justify-between">
//           <span className="ml-2">Food</span>
//           <span className="ml-2">KFC</span>
//           <div>
//             <span>200$</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { HistoryPreBiuld3 } from "../global/PreBuildComp";

export default function Popular() {
  return (
    <div className="bg-gray-700 rounded-md">
      <h3 className="pb-1 text-lg font-semibold tracking-wider ml-2 ">
        Popular
      </h3>
      <hr className="pb-2" />
      <HistoryPreBiuld3 />
    </div>
  );
}
