const Expenses = [
  { name: "Salary" },
  { name: "Freelance Work" },
  { name: "Side Hustles" },
  { name: "Rental Income" },
  { name: "Investment Income" },
];
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAmount } from "../components/Redux/Features/AddNewSlices/AmountSlice";
import { Dropdown } from "primereact/dropdown";
import { IoMdRestaurant } from "react-icons/io";

export default function Amount() {
  const dispatch = useDispatch();
  const [localAmount, setLocalAmount] = useState(0);
  const [localSource, setLocalSource] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleValueChange = (e) => {
    const newValue = e.value;
    setLocalAmount(newValue);
    dispatch(
      updateAmount({
        amount: newValue,
        source: localSource,
      })
    );
  };
  const togglePanel = () => {
    setIsActive(!isActive);
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
          <div className="flex-auto w-[50%]">
            <label htmlFor="amount4" className="font-bold block mb-2">
              Amount
            </label>
            <InputNumber
              value={localAmount}
              onValueChange={handleValueChange}
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
              className="h-[40px] flex items-center"
              itemTemplate={categoryOptionTemplate}
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
        <div className="flex b flex-col gap-4  justify-center bg-blue-500 w-[300px] h-[350px] popupPosition rounded-md p-4 text-lg">
          <h1>Amount: {localAmount}</h1>
          <h1>source: {localSource.name}</h1>
          <div className="flex gap-4">
            <button
              className="bg-red-500 px-4 py-2 rounded-md capitalize cursor-pointer text-md"
              onClick={togglePanel}
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
