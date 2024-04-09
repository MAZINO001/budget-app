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
      state.saving = action.payload;
    },
  },
});

export const { updateSaving } = savingSlice.actions;
