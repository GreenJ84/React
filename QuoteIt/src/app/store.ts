import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import quoteSlice, { quoteType } from './slices/quoteSlice'

export interface storeType {
  quotes: Array<quoteType>
}

export const store = configureStore({
  reducer: {
    quotes: quoteSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
