import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const api = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

// Функція для збереження токена в заголовках
export const setAuthToken = token => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// Функція для очищення токена
export  const clearAuthToken = () => {
  api.defaults.headers.common['Authorization'] = '';
};

// Реєстрація користувача
export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials,  thunkAPI) => {
    try {
      const { data } = await api.post('/users/signup', credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Зберігаємо токен після реєстрації
      setAuthToken(data.token);
      return data;
    } catch (error) {
     return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Логін користувача
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post('/users/login', credentials);
       localStorage.setItem('token', data.token);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Логаут користувача
export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.post('/users/logout');
    clearAuthToken();
  } catch (error) {
     return thunkAPI.rejectWithValue(error.message);
  }
});

// Оновлення інформації про користувача
export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return thunkAPI.rejectWithValue('Токен не знайдено');
  }

  setAuthToken(token);

  try {
    const { data } = await api.get('/users/current');
    return data;
 } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
