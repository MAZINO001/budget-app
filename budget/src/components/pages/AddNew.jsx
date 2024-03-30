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

import Input1, {
  AddButton,
  Textarea,
  Date,
  Time,
  Category,
} from "../global/PreBuildComp";

export default function AddNew() {
  return (
    <div className="flex gap-2 h-[100%] mx-2 mb-2 text-black">
      <div className="bg-gray-700 w-[50%] h-full px-16 flex flex-col gap-y-2 rounded-md">
        <Input1/>
        <Category />
        <Date />
        <Time />
        <Textarea />
        <AddButton />
      </div>
      <div className="w-[50%] h-[98.5%]">
        <div className="bg-gray-700 h-[50%] rounded-md p-2  mb-2">test</div>
        <div className="bg-gray-700 h-[50%] rounded-md p-2 ">test</div>
      </div>
    </div>
  );
}
