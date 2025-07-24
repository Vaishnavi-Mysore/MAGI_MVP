// Button slices for Navbar and Hero
import { createSlice } from "@reduxjs/toolkit";

const uiButtonsSlice = createSlice({
  name: "uiButtons",
  initialState: {
    navbar: {
      buttonLabel: "Navbar Button",
      isDisabled: false,
      buttonVariant: "primary",
    },
    hero: {
      buttonLabel: "Hero Button",
      isDisabled: false,
      buttonVariant: "secondary",
    },
    // Can add more sections here as needed
    chatHeaderNewChat: {
      buttonLabel: "New Chat",
      isDisabled: false,
      buttonVariant: "primary",
    },
    chatHeaderProfile: {
      buttonLabel: "Profile",
      isDisabled: false,
      buttonVariant: "secondary",
    },
    chatHeaderLogOut: {
      buttonLabel: "x",
      isDisabled: false,
      buttonVariant: "danger",
    },
  },
  // Navbar Button Reducers
  reducers: {
    setNavbarButtonLabel: (state, action) => {
      state.navbar.buttonLabel = action.payload;
    },
    setNavbarButtonDisabled: (state, action) => {
      state.navbar.isDisabled = action.payload;
    },
    setNavbarButtonVariant: (state, action) => {
      state.navbar.buttonVariant = action.payload;
    },
    // Hero SectionButton Reducers
    setHeroButtonLabel: (state, action) => {
      state.hero.buttonLabel = action.payload;
    },
    setHeroButtonDisabled: (state, action) => {
      state.hero.isDisabled = action.payload;
    },
    setHeroButtonVariant: (state, action) => {
      state.hero.buttonVariant = action.payload;
    },
    // Chat Header New Chat Button Reducers
    setChatNewChatHeaderButtonLabel: (state, action) => {
      state.chatHeaderNewChat.buttonLabel = action.payload;
    },
    setChatNewChatHeaderButtonDisabled: (state, action) => {
      state.chatHeaderNewChat.isDisabled = action.payload;
    },
    setChatNewChatHeaderButtonVariant: (state, action) => {
      state.chatHeaderNewChat.buttonVariant = action.payload;
    },
    // Chat Header Profile Button Reducers
    setChatProfileHeaderButtonLabel: (state, action) => {
      state.chatHeaderProfile.buttonLabel = action.payload;
    },
    setChatProfileHeaderButtonDisabled: (state, action) => {
      state.chatHeaderProfile.isDisabled = action.payload;
    },
    setChatProfileHeaderButtonVariant: (state, action) => {
      state.chatHeaderProfile.buttonVariant = action.payload;
    },
    // Chat Header Log Out Button Reducers
    setChatHeaderLogOutButtonLabel: (state, action) => {
      state.chatHeaderLogOut.buttonLabel = action.payload;
    },
    setChatHeaderLogoutButtonDisabled: (state, action) => {
      state.chatHeaderLogOut.isDisabled = action.payload;
    },
    setChatHeaderLogOutButtonVariant: (state, action) => {
      state.chatHeaderLogOut.buttonVariant = action.payload;
    },
  },
});

export const {
  setNavbarButtonLabel,
  setNavbarButtonDisabled,
  setNavbarButtonVariant,
  setHeroButtonLabel,
  setHeroButtonDisabled,
  setHeroButtonVariant,
  setChatNewChatHeaderButtonLabel,
  setChatNewChatHeaderButtonDisabled,
  setChatNewChatHeaderButtonVariant,
  setChatProfileHeaderButtonLabel,
  setChatProfileHeaderButtonDisabled,
  setChatProfileHeaderButtonVariant,
  setChatHeaderLogOutButtonLabel,
  setChatHeaderLogoutButtonDisabled,
  setChatHeaderLogOutButtonVariant,
} = uiButtonsSlice.actions;

export default uiButtonsSlice.reducer;
