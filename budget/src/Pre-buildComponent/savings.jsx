import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { updateSaving } from "../components/Redux/Features/AddNewSlices/SavingSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Savings() {
  const dispatch = useDispatch();
  const saving = useSelector((state) => state.savingSlice?.saving || 0.0);
  const [localSaving, setLocalSaving] = useState(saving);
  const [description, setDescription] = useState("");
  const [dates, setDates] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const formatDate = (dates) => {
    if (!dates || !Array.isArray(dates) || dates.length !== 2) {
      return "";
    }

    const [startDate, endDate] = dates;

    const formattedStartDate = new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(startDate);

    const formattedEndDate = new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(endDate);

    return `${formattedStartDate} - ${formattedEndDate}`;
  };

  const handleValueChange = (e) => {
    const newValue = e.value;
    setLocalSaving(newValue);
    dispatch(
      updateSaving({
        saving: localSaving,
        description: description,
        date: dates,
      })
    );
  };

  const handleDescriptionChange = (e) => {
    const newValue = e.target.value;
    setDescription(newValue);
  };

  const togglePanel = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="flex flex-wrap gap-3 p-fluid">
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

      <div className="card flex flex-col justify-content-center w-[100%]">
        <label htmlFor="Description" className="font-bold block mb-2">
          Description
        </label>
        <InputTextarea
          value={description}
          onChange={handleDescriptionChange}
          style={{ padding: " 2px 12px", height: "70px" }}
        />
      </div>

      <div className="card flex justify-content-center flex-col ">
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
      <div className="card flex items-center justify-center mt-2">
        <Button
          label="Submit"
          className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center absolute bottom-[5px]"
          onClick={togglePanel}
        />
      </div>
      {isActive && (
        <div className="flex b flex-col gap-4 items-center justify-center bg-blue-500 w-[300px] h-[350px] popupPosition rounded-md p-4 text-lg">
          <h1>Amount: {localSaving}</h1>
          <h1>description: {description}</h1>
          <h1>duration: {formatDate(dates)}</h1>
          <div className="flex gap-4">
            <button
              className="bg-red-500 px-4 py-2 rounded-md capitalize cursor-pointer text-md"
              onClick={togglePanel}
            >
              Save
            </button>
            <button
              className="bg-red-500 px-4 py-2 rounded-md capitalize cursor-pointer text-md"
              onClick={togglePanel}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
