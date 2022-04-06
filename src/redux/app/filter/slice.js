import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterValue(state, action) {
      return action.payload;
    },
  },
});
export const { filterValue } = filterSlice.actions;
