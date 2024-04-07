// import {
//   Durations,
//   AddButton1,
//   Input3,
//   Input1,
//   AddButton,
//   Textarea,
//   Date,
//   Time,
//   Category,
//   Input2,
//   Textarea2,
//   AddButton2,
//   Input4,
//   AddButton3,
// } from "../global/PreBuildComp";

// export default function AddNew() {
//   return (
//     <div className="flex gap-2 h-[100%] mx-2 text-black ">
//       <div className=" w-[50%] ">
//         <div className="bg-gray-700 h-[25%] px-2 flex flex-col gap-y-2 rounded-md relative mb-2">
//           <h2 className="capitalize text-center text-lg text-white font-bold tracking-wider mb-[-25px]">
//             add Amount
//           </h2>
//           <Input4 />
//           <AddButton3 />
//         </div>
//         <div className="bg-gray-700 h-[73.6%] px-2 flex flex-col gap-y-2 rounded-md relative">
//           <h2 className="capitalize text-center text-lg text-white font-bold tracking-wider mb-[-25px]">
//             add New transaction
//           </h2>
//           <Input1 />
//           <Category />
//           <div className="flex itemx-center justify-between">
//             <Date/>
//             <Time />
//           </div>
//           <Textarea />
//           <AddButton />
//         </div>
//       </div>
//       <div className="w-[50%] ">
//         <div className="bg-gray-700 h-[60%] rounded-md p-2  mb-2 relative">
//           <h2 className="capitalize text-center text-lg text-white font-bold tracking-wider mb-[-25px]">
//             add savings
//           </h2>
//           <Input2 />
//           <Textarea2 />
//           <Durations />
//           <AddButton1 />
//         </div>
//         <div className="bg-gray-700 h-[38.5%] rounded-md p-2 relative">
//           <h2 className="capitalize text-center text-lg text-white font-bold tracking-wider mb-[-25px]">
//             add monthly budget
//           </h2>
//           <Input3 />
//           <AddButton2 />
//         </div>
//       </div>
//     </div>
//   );
// }

import {
  TransactionInput,
  TransactionAddButton,
  TransactionTextarea,
  TransactionCategory,
  TransactionDate,
  TransactionTime,
} from "../../Pre-buildComponent/Transaction";
import { BudgetInput, BudgetAddButton } from "../../Pre-buildComponent/budget";
import {
  SavingsInput,
  SavingsTextarea,
  SavingsDurations,
  SavingsAddButton,
} from "../../Pre-buildComponent/savings";
import { AmountInput, AmountAddButton } from "../../Pre-buildComponent/Amount";

export default function AddNew() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2  md:h-[100%]  mx-2  text-black mb-16 md:mb-0">
      <div className="w-[100%] md:w-[50%] h-[100%]">
        <div className="bg-gray-700 h-[140px] md:h-[25%] px-2 flex flex-col gap-y-2 rounded-md relative mb-2 ">
          <h2 className="capitalize text-center text-lg text-white font-bold tracking-wider mb-[-25px]">
            add Amount
          </h2>
          <Input />
          <AddButton />
        </div>
        <div className="bg-gray-700 h-[410px] md:h-[73.6%] px-2 flex flex-col gap-y-2 rounded-md relative">
          <h2 className="capitalize text-center text-lg text-white font-bold tracking-wider mb-[-25px]">
            add New transaction
          </h2>
          <Input />
          <Category />
          <div className="flex itemx-center justify-between gap-2">
            <Date />
            <Time />
          </div>
          <Textarea />
          <AddButton />
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] h-[100%]">
        <div className="bg-gray-700 h-[285px] md:h-[60%] rounded-md p-2  mb-2 relative">
          <h2 className="capitalize text-center text-lg text-white font-bold tracking-wider mb-[-25px]">
            add savings
          </h2>
          <Input />
          <Textarea />
          <Durations />
          <AddButton />
        </div>
        <div className="bg-gray-700 h-[150px] md:h-[38.5%] rounded-md p-2 relative">
          <h2 className="capitalize text-center text-lg text-white font-bold tracking-wider mb-[-25px]">
            add monthly budget
          </h2>
          <Input />
          <AddButton />
        </div>
      </div>
    </div>
  );
}
