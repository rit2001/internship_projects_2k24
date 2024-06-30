import axios from 'axios';

const API_URL = 'https://your-api-url.com/auth';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const register = async (user) => {
  return await axios.post(`${API_URL}/register`, user);
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const updateUser = async (user) => {
  const response = await axios.put(`${API_URL}/update`, user);
  localStorage.setItem('user', JSON.stringify(response.data));
  return response.data;
};
