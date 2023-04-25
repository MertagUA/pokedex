import { configureStore } from '@reduxjs/toolkit';
import { headerColorSlice } from './Slices/headerColorSlice';
import { isLoadingSlice } from './Slices/isLoadingSlice';

export const store = configureStore({
  reducer: {
    color: headerColorSlice.reducer,
    isLoading: isLoadingSlice.reducer,
  },
});
