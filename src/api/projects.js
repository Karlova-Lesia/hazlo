import axiosInstance from './axios';
import { PROJECTS_URL } from '../constants/endpoints';

const getProjects = () => axiosInstance.get(PROJECTS_URL);

const getProject = ({ id }) => axiosInstance.get(`${PROJECTS_URL}/${id}`);

const createProject = (projectData) => axiosInstance.post(PROJECTS_URL, projectData);

const editProject = (id, projectData) => axiosInstance.put(`${PROJECTS_URL}/${id}`, projectData);

const deleteProject = (id) => axiosInstance.delete(`${PROJECTS_URL}/${id}`);

export {
  getProjects, getProject, createProject, editProject, deleteProject,
};
