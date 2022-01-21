import axiosInstance from './axios';
import { PROJECTS_URL } from '../constants/endpoints';

const getProjects = ({ userId }) => axiosInstance.get(`${PROJECTS_URL}?userId=${userId}`);

const getProject = ({ id }) => axiosInstance.get(`${PROJECTS_URL}/${id}`);

export { getProjects, getProject };
