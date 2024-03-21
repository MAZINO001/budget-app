export default function Dashboard() {
  return (
    // <div className="bg-red-500 w-[100vw] h-[100vh]">
    <div className=" w-full h-[100vh] mt-4 ml-2">
      <div className="flex items-center gap-6 mb-6">
        <div className="">
          <div className="bg-red-500 w-[300px] h-[100px] rounded-md mb-6">
            amounnt
          </div>
          <div className="bg-red-500 w-[300px] h-[100px] rounded-md">
            expenses
          </div>
        </div>
        <div className="bg-red-500 w-[418px] h-[218px] rounded-md">history</div>
        <div className="bg-red-500 w-[418px] h-[218px] rounded-md">popular</div>
      </div>
      <div className="flex items-center gap-6">
        <div className="bg-red-500 w-[580px] h-[280px] rounded-md">chart 1</div>
        <div className="bg-red-500 w-[580px] h-[280px] rounded-md">chart 2</div>
      </div>
    </div>
  );
}
