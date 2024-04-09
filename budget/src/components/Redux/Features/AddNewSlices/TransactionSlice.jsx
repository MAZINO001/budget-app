/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transaction: 0,
  category: "",
  time: "",
  date: "",
  description: "",
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
    },
  },
});

export const { updateTransaction } = transactionSlice.actions;
