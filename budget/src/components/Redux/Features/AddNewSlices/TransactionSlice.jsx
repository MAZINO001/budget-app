/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import Data from "../../../../Data/fakeData.json";
const initialState = {
  data: Data.map((item) => ({
    date: item.Date,
    time: item.Time,
    category: item.Category,
    description: item.Description,
    amount: item.Amount,
  })),
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    updateTransaction: (state, action) => {
      state.transaction = action.payload.transaction;
      state.category = action.payload.category;
      state.time = action.payload.time;
      state.date = action.payload.date;
      state.description = action.payload.description;
      state.payee = action.payload.payee;
    },
  },
});

export const { updateTransaction } = transactionSlice.actions;
