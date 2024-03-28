import { ChartBars } from "../Dashboard/Charts";

export default function ew() {
  return (
    <div className="flex flex-col mb-2 mx-2 h-[100%]">
      <div className="bg-gray-700 h-[20%] rounded-md flex justify-between items-center mb-2">
        <span className="text-xl ml-2">Add New :</span>
        <button className="bg-red-500 px-3 py-2 rounded-md text-lg capitalize font-semibold tracking-wider cursor-pointer">
          transction
        </button>
        <button className="bg-red-500 px-3 py-2 rounded-md text-lg capitalize font-semibold tracking-wider cursor-pointer">
          budget
        </button>
        <button className="bg-red-500 px-3 py-2 rounded-md text-lg capitalize font-semibold tracking-wider cursor-pointer mr-2">
          davings
        </button>
      </div>

      <div className="bg-gray-700 h-[80%] rounded-md">
        <ChartBars />
      </div>
    </div>
  );
}
