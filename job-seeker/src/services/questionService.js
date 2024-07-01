import axios from 'axios';

const API_URL = 'http://localhost:5000/api/questions';

export const getAllQuestions = () => {
  return axios.get(API_URL);
};

export const getQuestionById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createQuestion = (question) => {
  return axios.post(API_URL, question, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
};
