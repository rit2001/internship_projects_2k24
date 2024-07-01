import axios from 'axios';

const API_URL = 'http://localhost:5000/api/answers';

export const createAnswer = (answer) => {
  return axios.post(API_URL, answer, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
};
