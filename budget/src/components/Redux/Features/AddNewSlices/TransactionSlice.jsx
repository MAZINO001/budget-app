/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   transaction: 10,
//   category: "somthing",
//   time: "12:10",
//   date: "10/10/2020",
//   description: "this is a test",
//   payee: "kfc",
// };

// export const transactionSlice = createSlice({
//   name: "transaction",
//   initialState,
//   reducers: {
//     updateTransaction: (state, action) => {
//       state.transaction = action.payload.transaction;
//       state.category = action.payload.category;
//       state.time = action.payload.time;
//       state.date = action.payload.date;
//       state.description = action.payload.description;
//       state.payee = action.payload.payee;
//     },
//   },
// });

import { createSlice } from "@reduxjs/toolkit";
import jsonData from "../../../../Data/fakeData.json";

let updatedJsonData = [...jsonData]; // Initialize with the initial JSON data

const initialState = {
  transaction: 10,
  category: "something",
  time: "12:10",
  date: "10/10/2020",
  description: "this is a test",
  payee: "kfc",
};

export const updateTransactionAndJson =
  (transactionData) => (dispatch, getState) => {
    dispatch(transactionSlice.actions.updateTransaction(transactionData));

    // Update the JSON data
    updatedJsonData = [...updatedJsonData, transactionData];
    // Perform the logic to update the JSON file with updatedJsonData
  };

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    updateTransaction: (state, action) => {
      const { transaction, category, time, date, description, payee } =
        action.payload;
      state.transaction = transaction;
      state.category = category;
      state.time = time;
      state.date = date;
      state.description = description;
      state.payee = payee;
    },
  },
});

export const { updateTransaction } = transactionSlice.actions;

export { updatedJsonData }; // Export the updatedJsonData variable
