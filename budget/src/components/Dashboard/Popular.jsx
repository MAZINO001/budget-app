import { IoMdRestaurant } from "react-icons/io";

export default function Popular() {
  return (
    <div className=" ">
      <h3 className="pb-1 text-lg font-semibold tracking-wider ">Popular</h3>
      <hr className="pb-2" />
      <div className="flex flex-col gap-2 items-center">
        <div className="bg-gray-700 w-[100%] h-[46px] rounded-md px-2 flex items-center justify-between">
          <div className="flex">
            <IoMdRestaurant className="text-[28px] text-red-500 border-red-500 rounded-full border" />
            <span className="ml-2">Food</span>
          </div>
          <div>
            <span>200$</span>
          </div>
        </div>
        <div className="bg-gray-700 w-[100%] h-[46px] rounded-md px-2 flex items-center justify-between">
          <div className="flex">
            <IoMdRestaurant className="text-[28px] text-red-500 border-red-500 rounded-full border" />
            <span className="ml-2">Food</span>
          </div>
          <div>
            <span>200$</span>
          </div>
        </div>
        <div className="bg-gray-700 w-[100%] h-[46px] rounded-md px-2 flex items-center justify-between">
          <div className="flex">
            <IoMdRestaurant className="text-[28px] text-red-500 border-red-500 rounded-full border" />
            <span className="ml-2">Food</span>
          </div>
          <div>
            <span>200$</span>
          </div>
        </div>
        <div className="bg-gray-700 w-[100%] h-[46px] rounded-md px-2 flex items-center justify-between">
          <div className="flex">
            <IoMdRestaurant className="text-[28px] text-red-500 border-red-500 rounded-full border" />
            <span className="ml-2">Food</span>
          </div>
          <div>
            <span>200$</span>
          </div>
        </div>
      </div>
    </div>
  );
}
