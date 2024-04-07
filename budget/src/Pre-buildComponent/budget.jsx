import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";

export function BudgetInput() {
  const [value3, setValue3] = useState(20);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid ">
      <div className="flex-auto">
        <label htmlFor="amount2" className="font-bold block mb-2">
          Amount
        </label>
        <InputNumber
          value={value3}
          onValueChange={(e) => setValue3(e.value)}
          placeholder="$0.00"
          mode="currency"
          currency="USD"
          style={{ height: "40px" }}
        />
      </div>
    </div>
  );
}
/****************************** */
export function BudgetAddButton() {
  return (
    <div className="card flex items-center justify-center mt-2">
      <Button
        label="Submit"
        className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center absolute bottom-[5px] "
      />
    </div>
  );
}
/****************************** */
