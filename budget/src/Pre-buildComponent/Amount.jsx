import {
  FaMoneyCheckAlt,
  FaBriefcase,
  FaDollarSign,
  FaHome,
  FaChartPie,
} from "react-icons/fa";

const Expenses = [
  { name: "Salary", icon: <FaMoneyCheckAlt /> },
  { name: "Freelance Work", icon: <FaBriefcase /> },
  { name: "Side Hustles", icon: <FaDollarSign /> },
  { name: "Rental Income", icon: <FaHome /> },
  { name: "Investment Income", icon: <FaChartPie /> },
];

import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAmount } from "../components/Redux/Features/AddNewSlices/AmountSlice";
import { Dropdown } from "primereact/dropdown";

export default function Amount() {
  const dispatch = useDispatch();
  const [localAmount, setLocalAmount] = useState();
  const [localSource, setLocalSource] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleValueChange = () => {
    dispatch(
      updateAmount({
        amount: localAmount,
        source: localSource.name,
      })
    );

    const newAmount = {
      amount: localAmount, // Corrected line
      source: localSource.name,
    };

    const existingAmount = JSON.parse(localStorage.getItem("amount")) || [];
    const index = existingAmount.findIndex(
      (item) => item.source === localSource.name
    );
    if (index !== -1) {
      existingAmount[index].amount = localAmount;
    } else {
      existingAmount.push(newAmount);
    }
    localStorage.setItem("amount", JSON.stringify(existingAmount));

    togglePanel();
    setLocalAmount("");
    setLocalSource("");
  };

  const togglePanel = () => {
    setIsActive(!isActive);
  };
  const categoryOptionTemplate = (option) => (
    <div className="flex items-center justify-center gap-2">
      <div>{option.icon}</div>
      <div>{option.name}</div>
    </div>
  );

  return (
    <>
      <div className="card flex flex-wrap gap-3 p-fluid">
        <div className="flex w-[100%] gap-4">
          <div className="flex-auto w-[50%]">
            <label htmlFor="amount4" className="font-bold block mb-2">
              Amount
            </label>
            <InputNumber
              value={localAmount}
              onValueChange={(e) => setLocalAmount(e.value)}
              placeholder="$0.00"
              mode="currency"
              currency="USD"
              style={{ height: "40px" }}
            />
          </div>
          <div className="card flex flex-col justify-content-center w-[50%]">
            <label htmlFor="Category" className="font-bold block mb-2">
              Category
            </label>
            <Dropdown
              value={localSource}
              onChange={(e) => setLocalSource(e.value)}
              options={Expenses}
              optionLabel="name"
              placeholder="Select a income Source"
              filter
              className="h-[40px] flex items-center "
              itemTemplate={categoryOptionTemplate}
              style={{ backgroundColor: "#4a5568", color: "#fff" }}
            />
          </div>
        </div>
      </div>
      <div className="card flex items-center justify-center mt-2">
        <Button
          label="Submit"
          className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center absolute bottom-[5px]"
          onClick={togglePanel}
        />
      </div>
      {isActive && (
        <div className="resultPopUp popupPosition">
          <h1>Amount: {localAmount}</h1>
          <h1>source: {localSource.name}</h1>
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
    </>
  );
}
