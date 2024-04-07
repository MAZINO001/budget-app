import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { IoMdRestaurant } from "react-icons/io";

export function TransactionInput() {
  const [Amount, setAmount] = useState(20);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <label htmlFor="Input" className="font-bold block mb-2">
          Amount
        </label>
        <InputNumber
          value={Amount}
          onValueChange={(e) => setAmount(e.value)}
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
export function AddButton() {
  return (
    <div className="card flex items-center justify-center">
      <Button
        label="Submit"
        className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center absolute bottom-[5px] "
      />
    </div>
  );
}
/****************************** */
export function Textarea() {
  const [value, setValue] = useState("");

  return (
    <div className="card flex flex-col justify-content-center">
      <label htmlFor="Description" className="font-bold block mb-2">
        Description
      </label>
      <InputTextarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
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

export function Category() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryOptionTemplate = (option) => (
    <div className="flex align-items-center">
      {/* remove it later  */}
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
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.value)}
        options={Expenses} // Use Expenses array for options
        optionLabel="name"
        placeholder="Select a Category"
        filter
        // style={{ height: "40px" }}
        className="h-[40px] flex items-center"
        itemTemplate={categoryOptionTemplate}
      />
    </div>
  );
}
/****************************** */

export function Date() {
  const [date, setDate] = useState(null);
  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <label htmlFor="buttondisplay" className="font-bold block mb-2">
          Date
        </label>
        <Calendar
          id="buttondisplay"
          value={date}
          placeholder="Add Date"
          onChange={(e) => setDate(e.value)}
          style={{ height: "40px" }}
        />
      </div>
    </div>
  );
}

/****************************** */
export function Time() {
  const [date, setDate] = useState(null);
  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <label htmlFor="buttondisplay" className="font-bold block mb-2">
          Time
        </label>
        <Calendar
          value={date}
          onChange={(e) => setDate(e.value)}
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
