// export default function Dashboard() {
//   return (
//     <div className="flex flex-col w-[100%]  ">
//       <div className="flex items-center  gap-2 mb-2">
//         <div className="flex flex-col w-[30%] ">
//           <div className="bg-red-500 h-[120px] mb-2 rounded-md">
//             amounnt
//           </div>
//           <div className="bg-red-500 h-[120px] rounded-md">expenses</div>
//         </div>
//         <div className="bg-red-500 w-[35%] h-[250px] rounded-md">history</div>
//         <div className="bg-red-500 w-[35%] h-[250px] rounded-md">popular</div>
//       </div>
//       <div className="flex items-center gap-2">
//         <div className="bg-red-500 w-[50%] h-[290px] rounded-md">chart 1</div>
//         <div className="bg-red-500 w-[50%] h-[290px] rounded-md">chart 2</div>
//       </div>
//     </div>
//   );
// }

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full  md:mx-0 ">
      <div className="flex items-center  md:gap-2 mb-2  flex-col  md:flex-row">
        <div className="flex md:flex-col flex-row gap-2 md:gap-0 w-[100%] md:w-[30%] max-w-[500px] md:max-w-none">
          <div className="bg-red-500 md:w-[100%] w-[50%] h-[120px]  mb-2 rounded-md">
            amounnt
          </div>
          <div className="bg-red-500 md:w-[100%] w-[50%] h-[120px] rounded-md">
            expenses
          </div>
        </div>
        <div className="bg-red-500 w-[100%] md:w-[35%] h-[250px] max-w-[500px] md:max-w-none rounded-md md:mb-0 mb-2">
          history
        </div>
        <div className="bg-red-500 w-[100%] md:w-[35%] h-[250px] max-w-[500px] md:max-w-none rounded-md">
          popular
        </div>
      </div>
      <div className="flex items-center md:flex-row flex-col gap-2">
        <div className="bg-red-500 w-[100%] md:w-[50%] h-[290px] rounded-md max-w-[500px] md:max-w-none">
          chart 1
        </div>
        <div className="bg-red-500 w-[100%] md:w-[50%] h-[290px] rounded-md max-w-[500px] md:max-w-none">
          chart 2
        </div>
      </div>
    </div>
  );
}
