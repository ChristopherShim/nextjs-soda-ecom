import { createSlice } from "@reduxjs/toolkit";

const initialFormState = { editVisibility: false };

const editSlice = createSlice({
  name: "editState",
  initialState: initialFormState,
  reducers: {
    startEdit(state) {
      state.editVisibility = true;
    },
    discardEdit(state) {
      state.editVisibility = false;
    },
  },
});

export const editActions = editSlice.actions;

export default editSlice;
