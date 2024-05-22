import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { updateSaving } from "../components/Redux/Features/AddNewSlices/SavingSlice";
import { useDispatch } from "react-redux";
import { InputText } from "primereact/inputtext";

export default function Savings() {
  const dispatch = useDispatch();
  const [localSaving, setLocalSaving] = useState();
  const [LocalDescription, setLocalDescription] = useState("");
  const [LocalGoal, setLocalGoal] = useState("");
  const [dates, setDates] = useState(0);
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

  const handleValueChange = () => {
    dispatch(
      updateSaving({
        saving: localSaving,
        goal: LocalGoal,
        description: LocalDescription,
        date: formatDate(dates),
      })
    );

    const newSavings = {
      saving: localSaving,
      goal: LocalGoal,
      description: LocalDescription,
      date: formatDate(dates),
    };
    const existingSavings = JSON.parse(localStorage.getItem("savings")) || [];
    const updatedSavings = [...existingSavings, newSavings];
    localStorage.setItem("savings", JSON.stringify(updatedSavings));
    togglePanel();
    setLocalSaving("");
    setLocalDescription("");
    setLocalGoal("");
    setDates("");
  };

  const togglePanel = () => {
    setIsActive(!isActive);
  };

  // test

  // test

  return (
    <div className="flex flex-wrap gap-3 p-fluid">
      <div className="flex w-[100%] gap-4">
        <div className="flex-auto w-[50%]">
          <label htmlFor="amount" className="font-bold block mb-2">
            Saving Amount
          </label>
          <InputNumber
            value={localSaving}
            onValueChange={(e) => setLocalSaving(e.value)}
            placeholder="$0.00"
            mode="currency"
            currency="USD"
            style={{ height: "40px" }}
          />
        </div>
        <div className="card flex flex-col justify-content-center w-[50%]">
          <label htmlFor="Description" className="font-bold block mb-2">
            Goal
          </label>
          <InputText
            placeholder="Goal"
            value={LocalGoal}
            onChange={(e) => setLocalGoal(e.target.value)}
            style={{ padding: " 2px 12px", height: "40px" }}
          />
        </div>
      </div>

      <div className="card flex justify-content-center flex-col w-[100%] ">
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
      <div className="card flex flex-col justify-content-center w-[100%]">
        <label htmlFor="LocalDescription" className="font-bold block mb-2">
          Description
        </label>
        <InputTextarea
          value={LocalDescription}
          placeholder="Add A Amall Aescription"
          onChange={(e) => setLocalDescription(e.target.value)}
          style={{ padding: " 2px 12px", height: "70px" }}
        />
      </div>

      <div className="card flex items-center justify-center mt-2 w-[100%]">
        <Button
          label="Submit"
          className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center justify-center absolute bottom-[5px]"
          onClick={togglePanel}
        />
      </div>
      {isActive && (
        <div className="resultPopUp popupPosition">
          <h1>Amount: {localSaving}</h1>
          <h1>Goal: {LocalGoal}</h1>
          <h1>duration: {formatDate(dates)}</h1>
          <h1>Description: {LocalDescription}</h1>
          <div className="flex gap-4">
            <button
              className="bg-red-500 px-4 py-2 rounded-md capitalize cursor-pointer text-md"
              onClick={handleValueChange}
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
