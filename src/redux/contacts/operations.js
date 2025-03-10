import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../auth/operations";

// GET
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { signal, rejectWithValue }) => {
    try {
      const response = await api.get("/contacts", { signal });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

// POST
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const state = thunkAPI.getState(); 
      const token = state.auth.token; 

    
      
      if (!token) {
        return thunkAPI.rejectWithValue("No token provided");
      }

      const response = await api.post("/contacts", contact, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


// DELETE
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      await api.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
