import { createReducer } from '@reduxjs/toolkit';
import { initialContacts } from '../../../initialContacts';
import { addContact, editContact, removeContact } from './actions';

export const contactReducer = createReducer(initialContacts, {
  [addContact]: (state, action) => [...state, action.payload],
  [editContact]: (state, action) => {
    const el = state.find(el => el.id === action.payload.id);
    el.name = action.payload.name;
    el.number = action.payload.number;
  },

  [removeContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});
