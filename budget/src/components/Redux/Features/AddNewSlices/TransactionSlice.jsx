// /* eslint-disable no-unused-vars */
// import { createSlice, configureStore } from "@reduxjs/toolkit";

// const initialState = {
//   amount: 0,
//   transaction: 0,
//   saving: 0,
//   budget: 0,
// };

// export const amountSlice = createSlice({
//   name: "amount",
//   initialState,
//   reducers: {
//     updateAmount: (state, action) => {
//       state.amount = action.payload;
//     },
//   },
// });

// export const transactionSlice = createSlice({
//   name: "transaction",
//   initialState,
//   reducers: {
//     updateTransaction: (state, action) => {
//       state.transaction = action.payload;
//     },
//   },
// });

// export const savingSlice = createSlice({
//   name: "saving",
//   initialState,
//   reducers: {
//     updateSaving: (state, action) => {
//       state.saving = action.payload;
//     },
//   },
// });

// export const budgetSlice = createSlice({
//   name: "budget",
//   initialState,
//   reducers: {
//     updateBudget: (state, action) => {
//       state.budget = action.payload;
//     },
//   },
// });

// export const { updateAmount } = amountSlice.actions;
// export const { updateTransaction } = transactionSlice.actions;
// export const { updateSaving } = savingSlice.actions;
// export const { updateBudget } = budgetSlice.actions;

/* eslint-disable no-unused-vars */
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  transaction: 0,
};


export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    updateTransaction: (state, action) => {
      state.transaction = action.payload;
    },
  },
});


export const { updateTransaction } = transactionSlice.actions;
