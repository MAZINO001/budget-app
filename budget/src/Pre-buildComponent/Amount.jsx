/* eslint-disable no-unused-vars */
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAmount } from "../components/Redux/Features/AddNewSlices/Slices";

export function AmountInput() {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.AmountSlice?.amount || 0.0);
  const [localAmount, setLocalAmount] = useState(amount);

  const handleValueChange = (e) => {
    const newValue = e.value;
    setLocalAmount(newValue);
    dispatch(updateAmount({ amount: newValue }));
  };

  console.log(localAmount);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <label htmlFor="amount4" className="font-bold block mb-2">
          Amount
        </label>
        <InputNumber
          value={localAmount}
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

export function AmountAddButton() {
  return (
    <div className="card flex items-center justify-center mt-2">
      <Button
        label="Submit"
        className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center absolute bottom-[5px] "
      />
    </div>
  );
}
