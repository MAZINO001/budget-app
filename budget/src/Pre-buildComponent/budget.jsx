import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";
import { updateBudget } from "../components/Redux/Features/AddNewSlices/BudegtSlice";
import { useDispatch } from "react-redux";

export default function Budget() {
  const dispatch = useDispatch();
  const [localBudget, setLocalBudget] = useState(0);
  const [Active, setActive] = useState(false);
  const togglepanel = () => {
    setActive(!Active);
  };

  const handleValueChange = (e) => {
    const newValue = e.value;
    setLocalBudget(newValue);
    dispatch(updateBudget(newValue));
  };

  return (
    <>
      <div className="card flex flex-wrap gap-3 p-fluid ">
        <div className="flex-auto">
          <label htmlFor="amount2" className="font-bold block mb-2">
            Budget Amount
          </label>
          <InputNumber
            value={localBudget}
            onValueChange={handleValueChange}
            placeholder="$0.00"
            mode="currency"
            currency="USD"
            style={{ height: "40px" }}
          />
        </div>
      </div>
      <div className="card flex items-center justify-center mt-2">
        <Button
          label="Submit"
          className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center absolute bottom-[5px]"
          onClick={togglepanel}
        />
      </div>
      {Active && (
        <div className="flex b flex-col gap-4 items-center justify-center bg-blue-500 w-[300px] h-[350px] popupPosition rounded-md p-4 text-lg">
          <h1>Budget: {localBudget}</h1>
          <div className="flex gap-4">
            <button
              className="bg-red-500 px-4 py-2 rounded-md capitalize cursor-pointer text-md "
              onClick={togglepanel}
            >
              save
            </button>

            <button
              className="bg-red-500 px-4 py-2 rounded-md capitalize cursor-pointer text-md "
              onClick={togglepanel}
            >
              edit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
