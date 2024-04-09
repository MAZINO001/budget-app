/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  saving: 0,
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
