import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');
export const removeContact = createAction('contact/remove');
export const editContact = createAction('contacts/edit');
