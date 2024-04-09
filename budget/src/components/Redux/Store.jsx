import { configureStore } from "@reduxjs/toolkit";
import {
  amountSlice,
  transactionSlice,
  savingSlice,
  budgetSlice,
} from "./Features/AddNewSlices/Slices";

export const store = configureStore({
  reducer: {
    amount: amountSlice.reducer,
    transaction: transactionSlice.reducer,
    saving: savingSlice.reducer,
    budget: budgetSlice.reducer,
  },
});
