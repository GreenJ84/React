import { createSlice } from '@reduxjs/toolkit'

interface commentType {
    id: number
    name: string
    comment: string
}

const commentSlice = createSlice({
    name: 'comments',
    initialState: [] as Array<commentType>,
    reducers: {
        addComment: (state, action) => {
            state.push(action.payload)
        },
        removeComment: (state, action) => {
            state.filter( item => item.id !== action.payload)
        }
    }
})

export const { addComment, removeComment } = commentSlice.actions;
export default commentSlice.reducer;