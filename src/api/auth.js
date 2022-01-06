import axiosInstance from './axios';
import { LOGIN_URL, REGISTER_URL } from '../constants/endpoints';

const registerUser = (userData) => axiosInstance.post(REGISTER_URL, userData);

const authUser = ({ email, password }) => axiosInstance.post(LOGIN_URL, { email, password });

export { registerUser, authUser };
