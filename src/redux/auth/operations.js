import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Встановлюємо базову адресу API
axios.defaults.baseURL = 'https://connections-api.goit.global';

// Функція для збереження токена в заголовках
const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  localStorage.setItem('token', token); // Зберігаємо токен у браузері
};

// Функція для очищення токена
const clearAuthToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
  localStorage.removeItem('token'); // Видаляємо токен
};

// Реєстрація
export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setAuthToken(data.token); // Зберігаємо токен після реєстрації
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Логін
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Логаут
export const logoutUser = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
    clearAuthToken();
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Оновлення користувача
export const refreshUser = createAsyncThunk('auth/refresh', async (_, { rejectWithValue }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return rejectWithValue('No token found');
  }

  setAuthToken(token);

  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    clearAuthToken();
    return rejectWithValue(error.response.data);
  }
});
