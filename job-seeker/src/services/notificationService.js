import axios from 'axios';

const API_URL = 'https://your-api-url.com/notifications';

export const getNotifications = async (userId) => {
  return await axios.get(`${API_URL}?userId=${userId}`);
};
