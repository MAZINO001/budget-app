import { configureStore } from "@reduxjs/toolkit";
import {
  updateAmount,
  updateTransaction,
  updateSaving,
  updateBudget,
} from "./Features/AddNewSlices/Slices";

export const store = configureStore({
  reducer: {
    amount: updateAmount.reducer,
    transaction: updateTransaction.reducer,
    saving: updateSaving.reducer,
    budget: updateBudget.reducer,
  },
});
