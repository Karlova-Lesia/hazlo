import axiosInstance from './axios';
import { USERS_URL } from '../constants/endpoints';

const getUsers = () => axiosInstance.get(USERS_URL);

export { getUsers };
