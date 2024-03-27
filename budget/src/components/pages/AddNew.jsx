import { ChartBars } from "../Dashboard/Charts";

export default function AddNew() {
  return (
    <div className="flex flex-col mb-2 mx-2 h-[100%]">
      <div className="bg-gray-700 h-[20%] rounded-md flex justify-evenly items-center mb-2">
        <button className="bg-red-500 p-3 rounded-md text-lg capitalize font-semibold tracking-wider cursor-pointer">add transction</button>
        <button className="bg-red-500 p-3 rounded-md text-lg capitalize font-semibold tracking-wider cursor-pointer">add budget</button>
        <button className="bg-red-500 p-3 rounded-md text-lg capitalize font-semibold tracking-wider cursor-pointer">add davings</button>
      </div>

      <div className="bg-gray-700 h-[80%] rounded-md">
        <ChartBars/>
      </div>
    </div>
  );
}
