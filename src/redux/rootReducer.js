import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './app/contacts';
import { filterSlice } from './app/filter';

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterSlice.reducer,
});
