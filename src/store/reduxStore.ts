// Redux store.ts
import { configureStore } from '@reduxjs/toolkit';
import uiButtonReducer from '../features/reduxslices/uiSlices/buttonSlices';
import isSpinnerReducer from '../features/reduxslices/loaderToggles/isSpinner';
import inputSignInReducer from '../features/reduxslices/formSlice/inputSliceSignUp';
import chatSliceReducer from '../features/reduxslices/chatSlice/chatSlice';
import navbarLinksReducer from '../features/reduxslices/navbarSlice/navBarSlice';
import { api } from '../services/chat-api/chat-api';

// Single Store with multiple reducers
export const store = configureStore({
    reducer: {
        uiButtons: uiButtonReducer, // This can be extended with more slices as needed
        isSpinner: isSpinnerReducer,
        inputSignIn: inputSignInReducer,
        chat: chatSliceReducer,
        [api.reducerPath]: api.reducer,
        navbarLinks: navbarLinksReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
