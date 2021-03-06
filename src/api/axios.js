import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

instance.interceptors.response.use(
  ({ data }) => data,
  (error) => Promise.reject(error),
);

export default instance;
