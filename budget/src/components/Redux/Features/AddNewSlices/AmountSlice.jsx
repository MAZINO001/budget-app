/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
  source: "",
};

export const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    updateAmount: (state, action) => {
      state.amount = action.payload.amount;
      state.source = action.payload.source;
    },
  },
});

export const { updateAmount } = amountSlice.actions;
