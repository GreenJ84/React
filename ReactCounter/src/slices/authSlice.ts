import { createSlice } from "@reduxjs/toolkit";

interface authType {
    isAuthenticated: boolean
    loginForm: boolean
}

export const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        isAuthenticated: false,
        loginForm: false
    } as authType,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        },
        toggleForm(state) {
            if (state.loginForm === false){
                state.loginForm = true
            } else {
                state.loginForm = false
            }
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;