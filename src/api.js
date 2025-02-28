import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global';

// Функція для встановлення токена (після логіну)
export const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// Функція для очищення токена (при логауті)
export const clearAuthToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

// Реєстрація користувача
export const registerUser = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  setAuthToken(data.token); // Зберігаємо токен
  return data;
};

// Логін користувача
export const loginUser = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  setAuthToken(data.token);
  return data;
};

// Логаут користувача
export const logoutUser = async () => {
  await axios.post('/users/logout');
  clearAuthToken();
};

// Отримання контактів
export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

// Додавання нового контакту
export const addContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

// Видалення контакту
export const deleteContact = async contactId => {
  await axios.delete(`/contacts/${contactId}`);
};
