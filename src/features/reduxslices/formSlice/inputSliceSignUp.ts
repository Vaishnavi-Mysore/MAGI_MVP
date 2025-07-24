// features/reduxslices/formSlice/inputSliceSignIn.ts
import { createSlice } from "@reduxjs/toolkit";

const inputSliceSignUp = createSlice({
    name: "inputSignIn",
    initialState: {
        isSubmitted: false,
        globalError: null as string | null,
    },
    reducers: {
        setIsSubmitted: (state, action) => {
            state.isSubmitted = action.payload;
        },
        setGlobalError: (state, action) => {
            state.globalError = action.payload;
        },
    },
});

export const {
    setIsSubmitted,
    setGlobalError,
} = inputSliceSignUp.actions;

export default inputSliceSignUp.reducer;
