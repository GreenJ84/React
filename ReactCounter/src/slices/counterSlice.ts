import { createSlice } from '@reduxjs/toolkit'

interface counterType{
    value: number
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    } as counterType,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;