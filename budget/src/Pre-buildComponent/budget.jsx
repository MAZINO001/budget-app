import {
  FaHome,
  FaCar,
  FaShoppingCart,
  FaMoneyBillAlt,
  FaTshirt,
  FaUser,
  FaFilm,
  FaPaw,
  FaGift,
  FaHandsHelping,
  FaPlane,
  FaGraduationCap,
} from "react-icons/fa";

const Expenses = [
  { name: "housing", icon: <FaHome /> },
  { name: "utilities", icon: <FaMoneyBillAlt /> },
  { name: "transportation", icon: <FaCar /> },
  { name: "debt payments", icon: <FaMoneyBillAlt /> },
  { name: "subscriptions", icon: <FaMoneyBillAlt /> },
  { name: "bills", icon: <FaMoneyBillAlt /> },
  { name: "groceries", icon: <FaShoppingCart /> },
  { name: "clothing", icon: <FaTshirt /> },
  { name: "personal care", icon: <FaUser /> },
  { name: "entertainment", icon: <FaFilm /> },
  { name: "pets", icon: <FaPaw /> },
  { name: "gifts", icon: <FaGift /> },
  { name: "donations", icon: <FaHandsHelping /> },
  { name: "travel", icon: <FaPlane /> },
  { name: "education", icon: <FaGraduationCap /> },
];

import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";
import { updateBudget } from "../components/Redux/Features/AddNewSlices/BudegtSlice";
import { useDispatch } from "react-redux";
import { Dropdown } from "primereact/dropdown";

export default function Budget() {
  const dispatch = useDispatch();
  const [localBudget, setLocalBudget] = useState();
  const [localCategory, setlocalCategory] = useState("");
  const [Active, setActive] = useState(false);
  const togglepanel = () => {
    setActive(!Active);
  };

  const handleValueChange = (e) => {
    const newValue = e.value;
    setLocalBudget(newValue);
    dispatch(
      updateBudget({
        budget: newValue,
        category: localCategory.name,
      })
    );
  };

  const categoryOptionTemplate = (option) => (
    <div className="flex items-center justify-center gap-2">
      <div>{option.icon}</div>
      <div>{option.name}</div>
    </div>
  );
  return (
    <>
      <div className="card flex flex-wrap gap-3 p-fluid ">
        <div className="flex-auto">
          <label htmlFor="amount2" className="font-bold block mb-2">
            Budget Amount
          </label>
          <InputNumber
            value={localBudget}
            onValueChange={handleValueChange}
            placeholder="$0.00"
            mode="currency"
            currency="USD"
            style={{ height: "40px" }}
          />
        </div>
        <div className="card flex flex-col justify-content-center w-[100%] text-white">
          <label htmlFor="Category" className="font-bold block mb-2">
            Category
          </label>
          <Dropdown
            value={localCategory}
            onChange={(e) => setlocalCategory(e.value)}
            options={Expenses}
            optionLabel="name"
            placeholder="Select a Category"
            filter
            className="h-[40px] flex items-center"
            itemTemplate={categoryOptionTemplate}
            style={{ backgroundColor: "#4a5568", color: "#fff" }}
          />
        </div>
      </div>
      <div className="card flex items-center justify-center mt-2">
        <Button
          label="Submit"
          className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center absolute bottom-[5px]"
          onClick={togglepanel}
        />
      </div>
      {Active && (
        <div className="resultPopUp popupPosition">
          <h1>Budget: {localBudget}</h1>
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
