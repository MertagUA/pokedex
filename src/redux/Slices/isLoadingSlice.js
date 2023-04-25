import { createSlice } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => (state = action.payload),
  },
});

export const { setIsLoading } = isLoadingSlice.actions;
