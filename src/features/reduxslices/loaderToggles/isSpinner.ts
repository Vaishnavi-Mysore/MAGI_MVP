import { createSlice } from "@reduxjs/toolkit";

const isSpinnerSlice = createSlice({
  name: "isSpinner",
  initialState: {
    spinLoader: false,
  },
  reducers: {
    setSpinLoader: (state, action) => {
      state.spinLoader = action.payload;
    },
  },
});

export const { setSpinLoader } = isSpinnerSlice.actions;

export default isSpinnerSlice.reducer;