/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  budget: 0,
};

export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    updateBudget: (state, action) => {
      state.budget = action.payload;
      console.log("status" + action.payload);
    },
  },
});

export const { updateBudget } = budgetSlice.actions;
