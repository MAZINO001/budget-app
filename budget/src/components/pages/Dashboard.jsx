import { RadarApexChart, LineApexChart } from "../Dashboard/Charts";
import { CreditCard1, CreditCard2 } from "../Dashboard/CreditCard";
import History from "../Dashboard/History";
import Popular from "../Dashboard/Popular";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full md:mx-0 px-2  mb-16 md:mb-0">
      <div className="flex items-center  md:gap-2 mb-2  flex-col  md:flex-row ">
        <div className="flex md:flex-col flex-row gap-2 md:gap-0 w-[100%] md:w-[30%] max-w-[600px] md:max-w-none">
          <div className=" md:w-[100%] w-[50%] h-[120px]  mb-2 rounded-md z-50">
            <CreditCard1 />
          </div>
          <div className=" md:w-[100%] w-[50%] h-[120px] rounded-md z-50">
            <CreditCard2 />
          </div>
        </div>
        <div className=" w-[100%] md:w-[35%] h-[250px] max-w-[600px] md:max-w-none rounded-md mb-2 md:mb-0">
          <Popular />
        </div>
        <div className=" w-[100%] md:w-[35%] h-[250px] max-w-[600px] md:max-w-none rounded-md  ">
          <History />
        </div>
      </div>
      <div className="flex items-center md:flex-row flex-col gap-2 ">
        {/* <div className=" w-[100%] md:w-[40%] h-[290px] rounded-md max-w-[600px] md:max-w-none"> */}
        <div className=" w-[100%] md:w-[40%] h-[290px] rounded-md max-w-[600px] md:max-w-none overflow-hidden">
          <RadarApexChart />
        </div>
        <div className=" w-[100%] md:w-[60%] h-[290px] rounded-md max-w-[600px] md:max-w-none overflow-hidden">
          <LineApexChart />
        </div>
      </div>
    </div>
  );
}
