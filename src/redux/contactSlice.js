import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
      prepare: contact => {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, filterContacts, readContactsFromLocalStorage} = contactSlice.actions;
const contactsReducer = contactSlice.reducer;
export const persistedReducer = persistReducer(persistConfig, contactsReducer);