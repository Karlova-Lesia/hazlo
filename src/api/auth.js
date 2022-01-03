import axiosInstance from './axios';
import { REGISTER_URL } from '../constants/endpoints';

const registerUser = (userData) => axiosInstance.post(REGISTER_URL, userData);

export { registerUser };
