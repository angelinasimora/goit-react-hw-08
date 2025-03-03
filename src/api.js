// import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.goit.global';


// export const setAuthToken = token => {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };


// export const clearAuthToken = () => {
//   axios.defaults.headers.common['Authorization'] = '';
// };


// export const registerUser = async credentials => {
//   const { data } = await axios.post('/users/signup', credentials);
//   setAuthToken(data.token); 
//   return data;
// };


// export const loginUser = async credentials => {
//   const { data } = await axios.post('/users/login', credentials);
//   setAuthToken(data.token);
//   return data;
// };


// export const logoutUser = async () => {
//   await axios.post('/users/logout');
//   clearAuthToken();
// };


// export const fetchContacts = async () => {
//   const { data } = await axios.get('/contacts');
//   return data;
// };


// export const addContact = async contact => {
//   const { data } = await axios.post('/contacts', contact);
//   return data;
// };

// export const deleteContact = async contactId => {
//   await axios.delete(`/contacts/${contactId}`);
// };
