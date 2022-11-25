import { createSlice } from "@reduxjs/toolkit";

interface authType {
    isAuthenticated: boolean
}

export const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        isAuthenticated: false
    } as authType,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        },
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;