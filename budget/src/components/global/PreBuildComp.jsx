/* eslint-disable no-unused-vars */
/*********************** transactions in add new ************************ */

/* eslint-disable react/prop-types */
import { IoMdRestaurant } from "react-icons/io";
import "primereact/resources/themes/tailwind-light/theme.css";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import Data from "../../Data/fakeData.json";
export function Rnage() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [{ range: "Month" }, { range: "Week" }, { range: "Day" }];

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="range"
        placeholder="Month"
        className="w-full md:w-14rem h-[33px] flex items-center bg-gray-700 "
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
        // className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center "
        className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center absolute bottom-[5px] "
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
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: " 2px 12px", height: "70px" }}
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
        // className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center "
        className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center absolute bottom-[5px] "
      />
    </div>
  );
}
/************************  budget in add new *********************** */
// budget mount
export function Input3() {
  const [value3, setValue3] = useState(20);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid ">
      <div className="flex-auto">
        <label htmlFor="amount2" className="font-bold block mb-2">
          Amount
        </label>
        <InputNumber
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
        // className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center "
        className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center absolute bottom-[5px] "
      />
    </div>
  );
}

/************************* history ****************************/

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function HistoryPreBiuld1() {
  const [transactions, setTransactions] = useState(Data);

  return (
    <div className="card " style={{ backgroundColor: "#000" }}>
      <DataTable
        className="text-lg "
        value={transactions}
        tableStyle={{
          minWidth: "30rem",
        }}
      >
        <Column
          field="Category"
          header="Category"
          sortable
          className="bg-gray-600 text-white "
          style={{ width: "20%" }}
          headerStyle={{ backgroundColor: " rgb(55 65 81)", color: "#fff" }}
        ></Column>
        <Column
          field="Date"
          header="Date"
          sortable
          className="bg-gray-600 text-white"
          style={{ width: "20%" }}
          headerStyle={{ backgroundColor: " rgb(55 65 81)", color: "#fff" }}
        ></Column>
        <Column
          field="Date"
          header="Date"
          sortable
          className="bg-gray-600 text-white"
          style={{ width: "20%" }}
          headerStyle={{ backgroundColor: " rgb(55 65 81)", color: "#fff" }}
        ></Column>
        <Column
          field="Time"
          header="Time"
          sortable
          className="bg-gray-600 text-white"
          style={{ width: "20%" }}
          headerStyle={{ backgroundColor: " rgb(55 65 81)", color: "#fff" }}
        ></Column>
        <Column
          field="Amount"
          header="Amount"
          sortable
          className="bg-gray-600 text-white"
          style={{ width: "20%" }}
          headerStyle={{ backgroundColor: " rgb(55 65 81)", color: "#fff" }}
        ></Column>
      </DataTable>
    </div>
  );
}

/************************* History********************** */
import { VirtualScroller } from "primereact/virtualscroller";
import { classNames } from "primereact/utils";

export function HistoryPreBiuld2() {
  const items = Data.map((item) => (
    <div
      key={item.index}
      className="flex items-center justify-between w-[100%] px-2"
    >
      <span>{item.Category}</span>
      <span>{item.Time}</span>
      <span>{item.Amount}$</span>
    </div>
  ));

  const itemTemplate = (item, options) => {
    const className = classNames("flex align-items-center p-2", {
      "surface-hover": options.odd,
    });

    return (
      <div
        className="className bg-gray-600 rounded-md mb-2 flex items-center w-[100%] "
        style={{ height: options.props.itemSize + "px" }}
      >
        {item}
      </div>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <VirtualScroller
        items={items}
        itemSize={50}
        itemTemplate={itemTemplate}
        className="border-1 surface-border border-round mx-2 "
        style={{ width: "100%", height: "207px" }}
      />
    </div>
  );
}
/************************* Popular********************** */

export function HistoryPreBiuld3() {
  const top10Items = Data.sort((a, b) => b.Amount - a.Amount).slice(0, 10);

  const items = top10Items.map((item) => (
    <div
      key={item.index}
      className="flex items-center justify-between w-[100%] px-2"
    >
      <span>{item.Category}</span>
      <span>{item.Amount}$</span>
    </div>
  ));
  const itemTemplate = (item, options) => {
    const className = classNames("flex align-items-center p-2", {
      "surface-hover": options.odd,
    });

    return (
      <div
        className="className bg-gray-600 rounded-md mb-2 flex items-center w-[100%]"
        style={{ height: options.props.itemSize + "px" }}
      >
        {item}
      </div>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <VirtualScroller
        items={items}
        itemSize={50}
        itemTemplate={itemTemplate}
        className="border-1 surface-border border-round mx-2"
        style={{ width: "100%", height: "207px" }}
      />
    </div>
  );
}

// add amount

export function Input4() {
  const [Amount, setAmount] = useState(20);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <label htmlFor="amount4" className="font-bold block mb-2">
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

export function AddButton3() {
  return (
    <div className="card flex items-center justify-center mt-2">
      <Button
        label="Submit"
        // className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center "
        className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center absolute bottom-[5px] "
      />
    </div>
  );
}
//badges in the ring thing :)
import { Badge } from "primereact/badge";

export function BadgeIcon() {
  return (
    <div className="card flex justify-content-center">
      <Badge value="4" severity="info" className="bg-red-500"></Badge>
    </div>
  );
}
//the bill popup
