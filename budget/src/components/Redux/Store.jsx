import { configureStore } from "@reduxjs/toolkit";
import { amountSlice } from "./Features/AddNewSlices/AmountSlice";
import { transactionSlice } from "./Features/AddNewSlices/TransactionSlice";
import { savingSlice } from "./Features/AddNewSlices/SavingSlice";
import { budgetSlice } from "./Features/AddNewSlices/BudegtSlice";

export const store = configureStore({
  reducer: {
    amount: amountSlice.reducer,
    transaction: transactionSlice.reducer,
    saving: savingSlice.reducer,
    budget: budgetSlice.reducer,
  },
});
