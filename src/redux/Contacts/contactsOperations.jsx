import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://6481866b29fa1c5c50318910.mockapi.io';


export const fetchContacs = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const {data} = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, {rejectWithValue}) => {
    try {
      const {data} = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, {rejectWithValue}) => {
    try {
      const {data} = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
