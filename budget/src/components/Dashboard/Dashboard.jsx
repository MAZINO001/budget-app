// export default function Dashboard() {
//   return (
//     <div className=" w-100% h-[100vh] mt-2 mr-4">
//       <div className="flex items-center gap-4 mb-4">
//         <div className="">
//           <div className="bg-red-500 w-[307px] h-[110px] rounded-md mb-4">
//             amounnt
//           </div>
//           <div className="bg-red-500 w-[307px] h-[110px] rounded-md">
//             expenses
//           </div>
//         </div>
//         <div className="bg-red-500 w-[418px] h-[238px] rounded-md">history</div>
//         <div className="bg-red-500 w-[418px] h-[238px] rounded-md">popular</div>
//       </div>
//       <div className="flex items-center gap-4">
//         <div className="bg-red-500 w-[580px] h-[280px] rounded-md">chart 1</div>
//         <div className="bg-red-500 w-[580px] h-[280px] rounded-md">chart 2</div>
//       </div>
//     </div>
//   );
// }

export default function Dashboard() {
  return (
    <div className="flex flex-col w-[100%]">
      <div className="flex items-center  gap-4">
        <div className="flex flex-col w-[30%] ">
          <div className="bg-red-500 h-[140px] mb-[20px]">amounnt</div>
          <div className="bg-red-500 h-[140px] ">expenses</div>
        </div>
        <div className="bg-red-500 w-[35%] h-[300px]">history</div>
        <div className="bg-red-500 w-[35%] h-[300px]">popular</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-red-500 w-[50%] h-[400px] ">chart 1</div>
        <div className="bg-red-500 w-[50%] h-[400px] ">chart 2</div>
      </div>
    </div>
  );
}
