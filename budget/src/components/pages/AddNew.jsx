// import ButtonsDemo from "../global/PreBuildComp";
// export default function ew() {
//   return (
//     <div className="flex gap-2 h-[100%] mx-2 mb-2 text-black">
//       <div className="bg-gray-700 w-[50%] p-2 flex flex-col gap-y-2">
//       <ButtonsDemo/>
//         <div className="bg-white h-[25%]">categories</div>
//         <input type="date" />
//         <input type="datetime" />
//         <textarea name="" id="" cols="20" rows="5"></textarea>
//         <button type="submit" className="bg-red-500 ">add transaction</button>
//       </div>
//       <div className="w-[50%] h-[98.5%]">
//         <div className="bg-gray-700 h-[50%] p-2  mb-2">test</div>
//         <div className="bg-gray-700 h-[50%] p-2 ">test</div>
//       </div>
//     </div>
//   );
// }

import {
  Durations,
  AddButton1,
  Input3,
  Input1,
  AddButton,
  Textarea,
  Date,
  Time,
  Category,
  Input2,
  Textarea2,
  AddButton2,
} from "../global/PreBuildComp";

export default function AddNew() {
  return (
    <div className="flex gap-2 h-[100%] mx-2 mb-2 text-black">
      <div className="bg-gray-700 w-[50%] h-full px-16 flex flex-col gap-y-2 rounded-md">
        <h2 className="capitalize text-center text-lg text-white font-bold tracking-wider">
          add transaction
        </h2>

        <Input1 />
        <Category />
        <Date />
        <Time />
        <Textarea />
        <AddButton />
      </div>
      <div className="w-[50%] h-[98.5%]">
        <div className="bg-gray-700 h-[57%] rounded-md p-2  mb-2">
          <h2 className="capitalize text-center text-lg text-white font-bold tracking-wider">
            add savings
          </h2>
          <Input2 />
          <Textarea2 />
          <Durations />
          <AddButton1 />
        </div>
        <div className="bg-gray-700 h-[43%] rounded-md p-2 ">
          <h2 className="capitalize text-center text-lg text-white font-bold tracking-wider ">
            add budget
          </h2>
          <Input3 />
          <AddButton2 />
        </div>
      </div>
    </div>
  );
}
