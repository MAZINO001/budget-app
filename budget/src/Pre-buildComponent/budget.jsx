import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";
import { updateBudget } from "../components/Redux/Features/AddNewSlices/BudegtSlice";
import { useDispatch, useSelector } from "react-redux";

export function BudgetInput() {
  const dispatch = useDispatch();
  const budegt = useSelector((state) => state.budgetSlice?.budegt || 0.0);
  const [localBudegt, setLocalBudegt] = useState(budegt);

  const handleValueChange = (e) => {
    const newValue = e.value;
    setLocalBudegt(newValue);
    dispatch(updateBudget({ budegt: newValue }));
  };

  console.log(localBudegt);
  return (
    <div className="card flex flex-wrap gap-3 p-fluid ">
      <div className="flex-auto">
        <label htmlFor="amount2" className="font-bold block mb-2">
          Budegt Amount
        </label>
        <InputNumber
          value={localBudegt}
          onValueChange={handleValueChange}
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
