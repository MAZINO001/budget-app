/* eslint-disable no-unused-vars */
import {
  TransactionInput,
  TransactionAddButton,
  TransactionTextarea,
  TransactionCategory,
  TransactionDate,
  TransactionTime,
} from "../../Pre-buildComponent/Transaction";
import { BudgetInput, BudgetAddButton } from "../../Pre-buildComponent/budget";
import {
  SavingsInput,
  SavingsTextarea,
  SavingsDurations,
  SavingsAddButton,
} from "../../Pre-buildComponent/savings";
import { AmountInput, AmountAddButton } from "../../Pre-buildComponent/Amount";

export default function AddNew() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2  md:h-[100%]  mx-2  text-black mb-16 md:mb-0">
      <div className="w-[100%] md:w-[50%] h-[100%]">
        <div className="bg-gray-700 h-[140px] md:h-[25%] px-2 flex flex-col gap-y-2 rounded-md relative mb-2 ">
          <AmountInput />
          <AmountAddButton />
        </div>
        <div className="bg-gray-700 h-[410px] md:h-[73.6%] px-2 flex flex-col gap-y-2 rounded-md relative">
          <TransactionInput />
          <TransactionCategory />
          <div className="flex itemx-center justify-between gap-2">
            <TransactionDate />
            <TransactionTime />
          </div>
          <TransactionTextarea />
          <TransactionAddButton />
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] h-[100%]">
        <div className="bg-gray-700 h-[285px] md:h-[60%] rounded-md p-2  mb-2 relative">
          <SavingsInput />
          <SavingsTextarea />
          <SavingsDurations />
          <SavingsAddButton />
        </div>
        <div className="bg-gray-700 h-[150px] md:h-[38.5%] rounded-md p-2 relative">
          <BudgetInput />
          <BudgetAddButton />
        </div>
      </div>
    </div>
  );
}
