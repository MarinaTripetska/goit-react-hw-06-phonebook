import { createReducer } from '@reduxjs/toolkit';
import { initialContacts } from '../../../initialContacts';
import { addContact, removeContact } from './actions';

export const contactReducer = createReducer(initialContacts, {
  [addContact]: (state, action) => [...state, action.payload],
  [removeContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});
