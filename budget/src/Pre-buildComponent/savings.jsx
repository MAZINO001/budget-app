import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { updateSaving } from "../components/Redux/Features/AddNewSlices/Slices";
import { useDispatch, useSelector } from "react-redux";

export function SavingsInput() {
  const dispatch = useDispatch();
  const saving = useSelector((state) => state.savingSlice?.saving || 0.0);
  const [localSaving, setLocalSaving] = useState(saving);

  const handleValueChange = (e) => {
    const newValue = e.value;
    setLocalSaving(newValue);
    dispatch(updateSaving({ saving: newValue }));
  };

  console.log(localSaving);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <label htmlFor="amount" className="font-bold block mb-2">
          Saving Amount
        </label>
        <InputNumber
          value={localSaving}
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
/********************************* */
export function SavingsTextarea() {
  const [value, setValue] = useState("");

  return (
    <div className="card flex flex-col justify-content-center">
      <label htmlFor="description" className="font-bold block mb-2">
        Description
      </label>
      <InputTextarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: " 2px 12px", height: "40px" }}
      />
    </div>
  );
}
/********************************* */

export function SavingsDurations() {
  const [dates, setDates] = useState(null);

  return (
    <div className="card flex justify-content-center flex-col">
      <label htmlFor="duration" className="font-bold block mb-2">
        Duration
      </label>
      <Calendar
        value={dates}
        onChange={(e) => setDates(e.value)}
        selectionMode="range"
        readOnlyInput
        hideOnRangeSelection
        style={{ height: "40px" }}
      />
    </div>
  );
}
/********************************* */
export function SavingsAddButton() {
  return (
    <div className="card flex items-center justify-center mt-2">
      <Button
        label="Submit"
        className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center absolute bottom-[5px] "
      />
    </div>
  );
}
