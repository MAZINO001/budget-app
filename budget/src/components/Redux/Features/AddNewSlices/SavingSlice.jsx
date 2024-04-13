/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  saving: 10,
  description: "this is a test",
  date: "10/10/2020",
};

export const savingSlice = createSlice({
  name: "saving",
  initialState,
  reducers: {
    updateSaving: (state, action) => {
      state.saving = action.payload.saving;
      state.description = action.payload.description;
      state.date = action.payload.date;

      console.log("Updated State:", state.saving);
      console.log("Updated State:", state.description);
      console.log("Updated State:", state.date);
    },
  },
});

export const { updateSaving } = savingSlice.actions;
