/* eslint-disable no-unused-vars */
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
