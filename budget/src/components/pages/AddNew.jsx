import { ChartBars } from "../Dashboard/Charts";

export default function ew() {
  return (
    <div className="flex flex-col mb-2 mx-2 h-[89vh] ">
      <div className="bg-gray-700 h-[4rem] rounded-md flex justify-between items-center mb-2 px-2">
        <button className="bg-gray-600 p-2 rounded-md md:text-lg text-md capitalize font-semibold tracking-wider cursor-pointer">
          transction
        </button>
        <button className="bg-gray-600 p-2 rounded-md md:text-lg text-md capitalize font-semibold tracking-wider cursor-pointer">
          budget
        </button>
        <button className="bg-gray-600 p-2 rounded-md md:text-lg text-md capitalize font-semibold tracking-wider cursor-pointer ">
          davings
        </button>
      </div>

      <div className="bg-gray-700 h-[100%] rounded-md">
        <ChartBars />
      </div>
    </div>
  );
}

