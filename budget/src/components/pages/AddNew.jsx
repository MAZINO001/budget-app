// import Budget from "../../Pre-buildComponent/budget";
// import Amount from "../../Pre-buildComponent/Amount";
// import Savings from "../../Pre-buildComponent/savings";
// import Transaction from "../../Pre-buildComponent/Transaction";
// export default function AddNew() {
//   return (
//     <div className="flex flex-col md:flex-row items-center gap-2  md:h-[100%]  mx-2  text-black mb-16 md:mb-0">
//       <div className="w-[100%] md:w-[50%] h-[100%]">
//         <div className="bg-gray-700 h-[140px] md:h-[25%] px-2 flex flex-col gap-y-2 rounded-md relative mb-2 ">
//           <Amount />
//         </div>
//         <div className="bg-gray-700 h-[410px] md:h-[73.6%] px-2 flex flex-col gap-y-2 rounded-md relative">
//           <Transaction />
//         </div>
//       </div>
//       <div className="w-[100%] md:w-[50%] h-[100%]">
//         <div className="bg-gray-700 h-[285px] md:h-[65%] rounded-md p-2  mb-2 relative">
//           <Savings />
//         </div>
//         <div className="bg-gray-700 h-[150px] md:h-[33.5%] rounded-md p-2 relative">
//           <Budget />
//         </div>
//       </div>
//     </div>
//   );
// }
import Budget from "../../Pre-buildComponent/budget";
import Amount from "../../Pre-buildComponent/Amount";
import Savings from "../../Pre-buildComponent/savings";
import Transaction from "../../Pre-buildComponent/Transaction";
export default function AddNew() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2  md:h-[100%]  mx-2  text-black mb-16 md:mb-0">
      <div className="w-[100%] md:w-[50%] h-[100%]">
        <div className="bg-gray-700 h-[140px] md:h-[25%] px-4 flex flex-col gap-y-2 rounded-md relative mb-2 ">
          <Amount />
        </div>
        <div className="bg-gray-700 h-[410px] md:h-[73.6%] px-4 flex flex-col gap-y-2 rounded-md relative">
          <Transaction />
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] h-[100%]">
        <div className="bg-gray-700 h-[285px] md:h-[65%] rounded-md px-4  mb-2 relative">
          <Savings />
        </div>
        <div className="bg-gray-700 h-[150px] md:h-[33.5%] rounded-md px-4 relative">
          <Budget />
        </div>
      </div>
    </div>
  );
}
