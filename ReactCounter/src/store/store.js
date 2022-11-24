import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    resolvers:{
        counter: counterReducer,
    }
});

