import { createSlice } from '@reduxjs/toolkit';

export const headerColorSlice = createSlice({
  name: 'color',
  initialState: '',
  reducers: {
    setColor: (state, action) => (state = action.payload),
  },
});

export const { setColor } = headerColorSlice.actions;
