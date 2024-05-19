/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "primereact/resources/themes/tailwind-light/theme.css";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import Data from "../../Data/fakeData.json";


/************************* history ****************************/

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function HistoryPreBiuld1() {
  const existingTransactions =
    JSON.parse(localStorage.getItem("transactions")) ?? [];
  const [transactions, setTransactions] = useState(existingTransactions);
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
          field="category"
          header="Category"
          sortable
          className="bg-gray-600 text-white "
          style={{ width: "20%" }}
          headerStyle={{ backgroundColor: " rgb(55 65 81)", color: "#fff" }}
        ></Column>
        <Column
          field="date"
          header="Date"
          sortable
          className="bg-gray-600 text-white"
          style={{ width: "20%" }}
          headerStyle={{ backgroundColor: " rgb(55 65 81)", color: "#fff" }}
        ></Column>
        <Column
          field="time"
          header="Time"
          sortable
          className="bg-gray-600 text-white"
          style={{ width: "20%" }}
          headerStyle={{ backgroundColor: " rgb(55 65 81)", color: "#fff" }}
        ></Column>
        <Column
          field="payee"
          header="Payee"
          sortable
          className="bg-gray-600 text-white"
          style={{ width: "20%" }}
          headerStyle={{ backgroundColor: " rgb(55 65 81)", color: "#fff" }}
        ></Column>
        <Column
          field="transaction"
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
