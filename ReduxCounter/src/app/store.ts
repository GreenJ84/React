import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { counterType } from "../slices/counterSlice";
import authReducer, { authType } from "../slices/authSlice";

export interface storeType {
    counter: counterType
    auth: authType
}

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;