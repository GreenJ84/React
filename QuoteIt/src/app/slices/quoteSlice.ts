import { createSlice } from "@reduxjs/toolkit";

export interface quoteType {
    id: number
    author: string
    text: string
}

const quoteSlice = createSlice({
    name: 'allQuotes',
    initialState: [] as Array<quoteType>,
    reducers: {
        newQuote: (state, action) => {
            console.log(action.payload)
            state.push(action.payload)
        },
        removeQuote: (state, action) => {
            state.filter(item => item.id !== action.payload )
        },
    }
})

export const { newQuote, removeQuote } = quoteSlice.actions;
export default quoteSlice.reducer;