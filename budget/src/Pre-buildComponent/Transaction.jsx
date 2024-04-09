/* eslint-disable no-unused-vars */
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { IoMdRestaurant } from "react-icons/io";
import { updateTransaction } from "../components/Redux/Features/AddNewSlices/TransactionSlice";
import { useDispatch } from "react-redux";

export function TransactionInput() {
  const dispatch = useDispatch();
  const [localTransaction, setLocalTransaction] = useState("");

  const handleValueChange = (e) => {
    const newValue = e.value;
    setLocalTransaction(newValue);
    dispatch(updateTransaction({ transaction: newValue }));
  };

  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <label htmlFor="Input" className="font-bold block mb-2">
          Transaction Amount
        </label>
        <InputNumber
          value={localTransaction}
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
export function TransactionTextarea() {
  const [localDescription, setLocalDescription] = useState("");
  return (
    <div className="card flex flex-col justify-content-center">
      <label htmlFor="Description" className="font-bold block mb-2">
        Description
      </label>
      <InputTextarea
        value={localDescription}
        onChange={(e) => setLocalDescription(e.target.value)}
        style={{ padding: " 2px 12px", height: "70px" }}
      />
    </div>
  );
}
/****************************** */
const Expenses = [
  { name: "housing", icon: "" },
  { name: "utilities", icon: "" },
  { name: "transportation", icon: "" },
  { name: "debt payments", icon: "" }, // Added closing parenthesis
  { name: "subscriptions", icon: "" },
  { name: "bills", icon: "" },
  { name: "groceries", icon: "" }, // Kept groceries, removed duplicate food
  { name: "clothing", icon: "" },
  { name: "personal care", icon: "" }, // Added closing quotation mark
  { name: "entertainment", icon: "" },
  { name: "pets", icon: "" },
  { name: "gifts", icon: "" },
  { name: "donations", icon: "" },
  { name: "travel", icon: "" },
  { name: "education", icon: "" },
];

export function TransactionCategory() {
  const [localCategory, setLocalCategory] = useState("");
  const categoryOptionTemplate = (option) => (
    <div className="flex align-items-center">
      <IoMdRestaurant className="text-[28px] text-red-500 border-red-500 rounded-full border mr-2" />
      <div>{option.name}</div>
    </div>
  );

  return (
    <div className="card flex flex-col justify-content-center">
      <label htmlFor="Category" className="font-bold block mb-2">
        Category
      </label>

      <Dropdown
        value={localCategory}
        onChange={(e) => setLocalCategory(e.target.value)}
        options={Expenses} // Use Expenses array for options
        optionLabel="name"
        placeholder="Select a Category"
        filter
        className="h-[40px] flex items-center"
        itemTemplate={categoryOptionTemplate}
      />
    </div>
  );
}
/****************************** */

export function TransactionDate() {
  const [localDate, setLocalDate] = useState("");
  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <label htmlFor="buttondisplay" className="font-bold block mb-2">
          Date
        </label>
        <Calendar
          id="buttondisplay"
          value={localDate}
          placeholder="Add Date"
          onChange={(e) => setLocalDate(e.target.value)}
          style={{ height: "40px" }}
        />
      </div>
    </div>
  );
}

/****************************** */
export function TransactionTime() {
  const [localTime, setLocalTime] = useState("");
  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <label htmlFor="buttondisplay" className="font-bold block mb-2">
          Time
        </label>
        <Calendar
          value={localTime}
          onChange={(e) => setLocalTime(e.target.value)}
          timeOnly
          placeholder="Add time"
          icon={() => <i className="pi pi-clock" />}
          style={{ height: "40px" }}
        />
      </div>
    </div>
  );
}
/****************************** */
import { useSelector } from "react-redux";
export function TransactionAddButton() {
  const amount = useSelector((state) => state.amount.transaction);
  const time = useSelector((state) => state.amount.transaction);
  const date = useSelector((state) => state.amount.transaction);
  const description = useSelector((state) => state.amount.transaction);
  const category = useSelector((state) => state.amount.transaction);

  return (
    <div className="card flex items-center justify-center">
      <Button
        label="Submit"
        className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center absolute bottom-[5px] "
      />
      {/* <div className="flex bg-blue-500 w-[300px] h-[400px] popupPosition rounded-md">
        {amount}
        {time}
        {date}
        {description}
        {category}
      </div> */}
    </div>
  );
}
