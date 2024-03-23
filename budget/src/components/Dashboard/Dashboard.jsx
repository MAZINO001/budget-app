export default function Dashboard() {
  return (
    <div className="flex flex-col w-[100%]  ">
      <div className="flex items-center  gap-2 mb-2">
        <div className="flex flex-col w-[30%] ">
          <div className="bg-red-500 h-[120px] mb-2 rounded-md">
            amounnt
          </div>
          <div className="bg-red-500 h-[120px] rounded-md">expenses</div>
        </div>
        <div className="bg-red-500 w-[35%] h-[250px] rounded-md">history</div>
        <div className="bg-red-500 w-[35%] h-[250px] rounded-md">popular</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-red-500 w-[50%] h-[290px] rounded-md">chart 1</div>
        <div className="bg-red-500 w-[50%] h-[290px] rounded-md">chart 2</div>
      </div>
    </div>
  );
}
