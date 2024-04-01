/*********************** transactions in add new ************************ */

/* eslint-disable react/prop-types */
import { IoMdRestaurant } from "react-icons/io";
import "primereact/resources/themes/tailwind-light/theme.css";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
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

//input numbers

export function Input1() {
  const [Amount, setAmount] = useState(20);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <label htmlFor="amount1" className="font-bold block mb-2">
          Amount
        </label>
        <InputNumber
          inputId="amount1"
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
//button Component

export function AddButton() {
  return (
    <div className="card flex items-center justify-center">
      <Button
        label="Submit"
        className="w-[35%] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center "
      />
    </div>
  );
}
//text earea

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
        // style={{ height: "40px" }}
        className="h-[40px] flex items-center"
        itemTemplate={categoryOptionTemplate}
      />
    </div>
  );
}

//date
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
          style={{ height: "40px" }}
        />
      </div>
    </div>
  );
}
/************************  savings in add new *********************** */
//amount of saving
export function Input2() {
  const [value2, setValue2] = useState(20);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <label htmlFor="amount" className="font-bold block mb-2">
          Amount
        </label>
        <InputNumber
          inputId="amount"
          value={value2}
          onValueChange={(e) => setValue2(e.value)}
          placeholder="$0.00"
          mode="currency"
          currency="USD"
          style={{ height: "40px" }}
        />
      </div>
    </div>
  );
}

//name of saving
export function Textarea2() {
  const [value, setValue] = useState("");

  return (
    <div className="card flex flex-col justify-content-center">
      <label htmlFor="description" className="font-bold block mb-2">
        Description
      </label>
      <InputTextarea
        inputId="description"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: " 2px 12px", height: "40px" }}
      />
    </div>
  );
}
//duration of saving

export function Durations() {
  const [dates, setDates] = useState(null);

  return (
    <div className="card flex justify-content-center flex-col">
      <label htmlFor="duration" className="font-bold block mb-2">
        Duration
      </label>
      <Calendar
        inputId="duration"
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
//btn
export function AddButton1() {
  return (
    <div className="card flex items-center justify-center mt-2">
      <Button
        label="Submit"
        className="w-[35%] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center "
      />
    </div>
  );
}
/************************  budget in add new *********************** */
// budget mount
export function Input3() {
  const [value3, setValue3] = useState(20);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <label htmlFor="amount2" className="font-bold block mb-2">
          Amount
        </label>
        <InputNumber
          inputId="amount2"
          value={value3}
          onValueChange={(e) => setValue3(e.value)}
          placeholder="$0.00"
          mode="currency"
          currency="USD"
          style={{ height: "40px" }}
        />
      </div>
    </div>
  );
}
//categories

//btn
export function AddButton2() {
  return (
    <div className="card flex items-center justify-center mt-2">
      <Button
        label="Submit"
        className="w-[35%] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center "
      />
    </div>
  );
}


/************************* history ****************************/

import {  useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function SingleColumnDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
                <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
                <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
                <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        