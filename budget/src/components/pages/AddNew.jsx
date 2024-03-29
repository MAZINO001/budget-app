// import { ChartBars } from "../Dashboard/Charts";

// export default function ew() {
//   return (
//     <div className="flex flex-col mb-2 mx-2 h-[89vh] ">
//       <div className="bg-gray-700 h-[4rem] rounded-md flex justify-between items-center mb-2 px-2">
//         <button className="bg-gray-600 p-2 rounded-md md:text-lg text-md capitalize font-semibold tracking-wider cursor-pointer">
//           transction
//         </button>
//         <button className="bg-gray-600 p-2 rounded-md md:text-lg text-md capitalize font-semibold tracking-wider cursor-pointer">
//           budget
//         </button>
//         <button className="bg-gray-600 p-2 rounded-md md:text-lg text-md capitalize font-semibold tracking-wider cursor-pointer ">
//           davings
//         </button>
//       </div>

//       <div className="bg-gray-700 h-[100%] rounded-md">
//         <ChartBars />
//       </div>
//     </div>
//   );
// }

export default function ew() {
  return (
    <div className="flex gap-2 h-[100%] mx-2 mb-2 text-black">
      <div className="bg-gray-700 w-[50%] p-2 flex flex-col gap-y-2">
        <input type="number" placeholder="Amount" />
        <div className="bg-white h-[25%]">categories</div>
        <input type="date" />
        <input type="datetime" />
        <textarea name="" id="" cols="20" rows="5"></textarea>
        <button type="submit" className="bg-red-500 ">add transaction</button>
      </div>
      <div className="w-[50%] h-[98.5%]">
        <div className="bg-gray-700 h-[50%] p-2  mb-2">test</div>
        <div className="bg-gray-700 h-[50%] p-2 ">test</div>
      </div>
    </div>
  );
}
