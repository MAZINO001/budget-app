import Calculator from "../Tools/Calculator";
import CurrencyConverter from "../Tools/CurrencyConverter";
import FinancialLiteracy from "../Tools/FinancialLiteracy";
import Game from "../Tools/Game";

export default function Tools() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 grid-rows-2 gap-2 mx-2 mb-16 h-[90.2vh] ">
      <div className="bg-gray-700 rounded-md items-center flex justify-center cursor-pointer">
        <Calculator />
      </div>
      <div className="bg-gray-700 rounded-md items-center flex justify-center cursor-pointer">
        <CurrencyConverter />
      </div>
      <div className="bg-gray-700 rounded-md items-center flex justify-center cursor-pointer">
        <FinancialLiteracy />
      </div>
      <div className="bg-gray-700 rounded-md items-center flex justify-center cursor-pointer">
        <Game />
      </div>
    </div>
  );
}
