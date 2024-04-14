// /* eslint-disable no-unused-vars */
// import { Button } from "primereact/button";
// import { InputNumber } from "primereact/inputnumber";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateAmount } from "../components/Redux/Features/AddNewSlices/AmountSlice";

// export function AmountInput() {
//   const dispatch = useDispatch();
//   const amount = useSelector((state) => state.amountSlice?.amount || 0.0);
//   const [localAmount, setLocalAmount] = useState(amount);

//   const handleValueChange = (e) => {
//     const newValue = e.value;
//     setLocalAmount(newValue);
//     dispatch(updateAmount({ amount: newValue }));
//   };

//   console.log(localAmount);

//   return (
//     <div className="card flex flex-wrap gap-3 p-fluid">
//       <div className="flex-auto">
//         <label htmlFor="amount4" className="font-bold block mb-2">
//           Amount
//         </label>
//         <InputNumber
//           value={localAmount}
//           onValueChange={handleValueChange}
//           placeholder="$0.00"
//           mode="currency"
//           currency="USD"
//           style={{ height: "40px" }}
//         />
//       </div>
//     </div>
//   );
// }

// export function AmountAddButton() {
//   return (
//     <div className="card flex items-center justify-center mt-2">
//       <Button
//         label="Submit"
//         className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center absolute bottom-[5px] "
//       />
//     </div>
//   );
// }

import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAmount } from "../components/Redux/Features/AddNewSlices/AmountSlice";

export default function Amount() {
  const dispatch = useDispatch();
  const [localAmount, setLocalAmount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleValueChange = (e) => {
    const newValue = e.value;
    setLocalAmount(newValue);
    dispatch(updateAmount(newValue));
  };

  const togglePanel = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="card flex flex-wrap gap-3 p-fluid">
        <div className="flex-auto">
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
      </div>
      <div className="card flex items-center justify-center mt-2">
        <Button
          label="Submit"
          className="w-[150px] px-2 py-2 bg-[#06B6D4] text-white h-[40px] flex items-center absolute bottom-[5px]"
          onClick={togglePanel}
        />
      </div>
      {isActive && (
        <div className="flex b flex-col gap-4 items-center justify-center bg-blue-500 w-[300px] h-[350px] popupPosition rounded-md p-4 text-lg">
          <h1>Amount: {localAmount}</h1>
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
