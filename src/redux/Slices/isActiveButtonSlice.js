import { createSlice } from '@reduxjs/toolkit';

export const isActiveButtonSlice = createSlice({
  name: 'isActiveButton',
  initialState: '',
  reducers: {
    setIsActiveButton: (state, action) => (state = action.payload),
  },
});

export const { setIsActiveButton } = isActiveButtonSlice.actions;
