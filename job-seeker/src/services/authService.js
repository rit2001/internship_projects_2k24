import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const register = (user) => {
  return axios.post(`${API_URL}/register`, user);
};

export const getUserProfile = () => {
  return axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
};

export const updateUserProfile = (profile) => {
  return axios.put(`${API_URL}/profile`, profile, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
};
