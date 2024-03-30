/* eslint-disable react/prop-types */
import { IoMdRestaurant } from "react-icons/io";
import "primereact/resources/themes/tailwind-light/theme.css";

import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
export function Rnage() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [{ range: "Month" }, { range: "Week" }, { range: "Day" }];

  return (
    <div className="card flex justify-content-center ">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="range"
        placeholder="Month"
        className="w-full md:w-14rem h-[35px] flex items-center"
      />
    </div>
  );
}

//input bumbers

import { InputNumber } from "primereact/inputnumber";

export default function Input1() {
  const [value1, setValue1] = useState(20);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <label htmlFor="stacked-buttons" className="font-bold block mb-2">
          Amount
        </label>
        <InputNumber
          inputId="stacked-buttons"
          value={value1}
          onValueChange={(e) => setValue1(e.value)}
          placeholder="$0.00"
          mode="currency"
          currency="USD"
          style={{ height: "48px" }}
        />
      </div>
    </div>
  );
}
//button Component
import { Button } from "primereact/button";
export function AddButton() {
  return (
    <div className="card flex items-center justify-center">
      <Button
        label="Submit"
        className="w-[35%] px-2 py-2 bg-[#06B6D4] text-white h-[48px] flex items-center "
      />
    </div>
  );
}
//text earea
import { InputTextarea } from "primereact/inputtextarea";

export function Textarea() {
  const [value, setValue] = useState("");

  return (
    <div className="card flex flex-col justify-content-center">
      <label htmlFor="Description" className="font-bold block mb-2">
        Description
      </label>
      <InputTextarea
        inputId="Description"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: " 2px 12px", height: "110px" }}
      />
    </div>
  );
}
//categories

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
        inputId="Category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.value)}
        options={Expenses} // Use Expenses array for options
        optionLabel="name"
        placeholder="Select a Category"
        filter
        itemTemplate={categoryOptionTemplate}
      />
    </div>
  );
}

//date
import { Calendar } from "primereact/calendar";
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
          style={{ height: "48px" }}
        />
      </div>
    </div>
  );
}

//time
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
          style={{ height: "48px" }}
        />
      </div>
    </div>
  );
}
