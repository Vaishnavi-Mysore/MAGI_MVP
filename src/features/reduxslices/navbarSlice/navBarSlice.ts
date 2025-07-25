import { createSlice } from "@reduxjs/toolkit";



const navbarLinksSlice = createSlice({ 
    name: "navbarLinks",
    initialState: {
        isNavbarLinksClicked: false,
    },
    reducers: {
        setNavbarLinks: (state, action) => {
            state.isNavbarLinksClicked = action.payload;
        },
    },
})

export const { setNavbarLinks } = navbarLinksSlice.actions;
export default navbarLinksSlice.reducer;