import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { visibility: false };

const editSlice = createSlice({
  name: "editState",
  initialState,
  reducers: {
    startEdit(state) {
      state.visibility = true
    },
    discardEdit(state) {
      state.visibility = false
    },
  },
});

// const editButtonReducer = (state = initialState, action) => {
//   if (action.type === "startEdit") {
//     return {
//       visibility: true,
//     };
//   }

//   if (action.type === "discardEdit") {
//     return {
//       visibility: false,
//     };
//   }

//   return state;
// };

// const store = createStore(editButtonReducer);


const store = configureStore({
    reducer: editSlice.reducer
})

export const editActions = editSlice.actions

export default store;
