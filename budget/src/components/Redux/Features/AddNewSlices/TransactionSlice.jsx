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
      state.transaction = action.payload;
      state.category = action.payload;
      state.time = action.payload;
      state.date = action.payload;
      state.description = action.payload;
    },
  },
});

export const { updateTransaction } = transactionSlice.actions;
