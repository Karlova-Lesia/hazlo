import axiosInstance from './axios';
import { USERS_URL } from '../constants/endpoints';

const getUsers = () => axiosInstance.get(USERS_URL);

const getMembersByIds = (memberIds) => {
  const queryString = memberIds.join('&id=');

  return axiosInstance.get(`${USERS_URL}?id=${queryString}`);
};

export { getUsers, getMembersByIds };
