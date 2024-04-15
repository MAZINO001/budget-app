/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { IoMdRestaurant } from "react-icons/io";
import { useDispatch } from "react-redux";
import { updateTransaction } from "../components/Redux/Features/AddNewSlices/TransactionSlice";
import { InputText } from "primereact/inputtext";
const Expenses = [
  { name: "housing", icon: "" },
  { name: "utilities", icon: "" },
  { name: "transportation", icon: "" },
  { name: "debt payments", icon: "" },
  { name: "subscriptions", icon: "" },
  { name: "bills", icon: "" },
  { name: "groceries", icon: "" },
  { name: "clothing", icon: "" },
  { name: "personal care", icon: "" },
  { name: "entertainment", icon: "" },
  { name: "pets", icon: "" },
  { name: "gifts", icon: "" },
  { name: "donations", icon: "" },
  { name: "travel", icon: "" },
  { name: "education", icon: "" },
];

export default function Transaction() {
  const [Active, setActive] = useState(false);
  const dispatch = useDispatch();
  const [localTransaction, setLocalTransaction] = useState("");
  const [localTime, setLocalTime] = useState(new Date());
  const [localDate, setLocalDate] = useState(new Date());
  const [localDescription, setLocalDescription] = useState("");
  const [localPayee, setLocalPayee] = useState("");
  const [localCategory, setLocalCategory] = useState("");

  const formatTime = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const togglepanel = () => {
    setActive(!Active);
  };
  const handleValueChange = () => {
    const formattedTime =
      localTime.getHours().toString().padStart(2, "0") +
      ":" +
      localTime.getMinutes().toString().padStart(2, "0");
    const formattedDate =
      localDate.getDate().toString().padStart(2, "0") +
      "/" +
      (localDate.getMonth() + 1).toString().padStart(2, "0") +
      "/" +
      localDate.getFullYear();
    dispatch(
      updateTransaction({
        transaction: localTransaction,
        time: formattedTime,
        date: formattedDate,
        description: localDescription,
        payee: localPayee,
        category: localCategory.name,
      })
    );
    togglepanel();
  };

  const categoryOptionTemplate = (option) => (
    <div className="flex align-items-center">
      <IoMdRestaurant className="text-[28px] text-red-500 border-red-500 rounded-full border mr-2" />
      <div>{option.name}</div>
    </div>
  );

  return (
    <>
      <div className="card flex flex-wrap gap-3 p-fluid">
        <div className="flex w-[100%] gap-4">
          <div className="flex-auto">
            <label htmlFor="Input" className="font-bold block mb-2 w-[50%]">
              Transaction
            </label>
            <InputNumber
              value={localTransaction}
              onValueChange={(e) => setLocalTransaction(e.value)}
              placeholder="$0.00"
              mode="currency"
              currency="USD"
              style={{ height: "40px" }}
            />
          </div>
          <div className="card flex flex-col justify-content-center w-[50%]">
            <label htmlFor="Description" className="font-bold block mb-2">
              Payee
            </label>
            <InputText
              keyfilter="int"
              placeholder="Payee"
              value={localPayee}
              onChange={(e) => setLocalPayee(e.target.value)}
              style={{ padding: " 2px 12px", height: "40px" }}
            />
          </div>
        </div>
      </div>
      <div className="card flex flex-col justify-content-center">
        <label htmlFor="Category" className="font-bold block mb-2">
          Category
        </label>
        <Dropdown
          value={localCategory}
          onChange={(e) => setLocalCategory(e.value)}
          options={Expenses}
          optionLabel="name"
          placeholder="Select a Category"
          filter
          className="h-[40px] flex items-center"
          itemTemplate={categoryOptionTemplate}
        />
      </div>

      <div className="flex gap-4 w-[100%] ">
        <div className="card flex flex-wrap gap-3 p-fluid w-[50%]">
          <div className="flex-auto">
            <label htmlFor="buttondisplay" className="font-bold block mb-2">
              Time
            </label>
            <Calendar
              value={localTime}
              onChange={(e) => setLocalTime(e.value)}
              timeOnly
              placeholder="Add time"
              icon={() => <i className="pi pi-clock" />}
              style={{ height: "40px" }}
            />
          </div>
        </div>
        <div className="card flex flex-wrap gap-3 p-fluid w-[50%]">
          <div className="flex-auto">
            <label htmlFor="buttondisplay" className="font-bold block mb-2">
              Date
            </label>
            <Calendar
              id="buttondisplay"
              value={localDate}
              placeholder="Add Date"
              onChange={(e) => setLocalDate(e.value)}
              style={{ height: "40px" }}
            />
          </div>
        </div>
      </div>

      <div className="card flex flex-col justify-content-center">
        <label htmlFor="Description" className="font-bold block mb-2">
          Memo
        </label>
        <InputTextarea
          value={localDescription}
          onChange={(e) => setLocalDescription(e.target.value)}
          style={{ padding: " 2px 12px", height: "70px" }}
        />
      </div>
      <div className="card flex items-center justify-center w-[100%]">
        <Button
          label="Submit"
          className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center absolute bottom-[5px]"
          onClick={handleValueChange}
        />
      </div>
      {Active && (
        <div className="flex b flex-col gap-4  justify-center bg-blue-500 w-[300px] h-[350px] popupPosition rounded-md p-4 text-lg">
          <h1>Transaction Amount: {localTransaction}</h1>
          <h1>Time: {formatTime(localTime)}</h1>
          <h1>Date: {formatDate(localDate)}</h1>
          <h1>Description: {localDescription}</h1>
          <h1>Payee: {localPayee}</h1>
          <h1>Category: {localCategory.name}</h1>
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
