/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
};

export const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    updateAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const { updateAmount } = amountSlice.actions;
