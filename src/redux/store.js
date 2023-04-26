import { configureStore } from '@reduxjs/toolkit';
import { headerColorSlice } from './Slices/headerColorSlice';
import { isLoadingSlice } from './Slices/isLoadingSlice';
import { isActiveButtonSlice } from './Slices/isActiveButtonSlice';

export const store = configureStore({
  reducer: {
    color: headerColorSlice.reducer,
    isLoading: isLoadingSlice.reducer,
    isActiveButton: isActiveButtonSlice.reducer,
  },
});
