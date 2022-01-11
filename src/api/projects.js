import axiosInstance from './axios';
import { PROJECTS_URL } from '../constants/endpoints';

const getProjects = ({ userId }) => axiosInstance.get(`${PROJECTS_URL}?userId=${userId}`);

export { getProjects };
