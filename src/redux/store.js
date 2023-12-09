import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: {
    userAuthReducer: authSlice.reducer,
    searchReducer: searchSlice,
  },
});
