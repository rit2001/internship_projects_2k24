import axios from 'axios';

const API_URL = 'https://your-api-url.com/jobs';

export const getJobs = async () => {
  return await axios.get(API_URL);
};

export const getJobById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createJob = async (job) => {
  return await axios.post(API_URL, job);
};

export const updateJob = async (id, job) => {
  return await axios.put(`${API_URL}/${id}`, job);
};

export const deleteJob = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
