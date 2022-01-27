import axiosInstance from './axios';
import { TASKS_URL } from '../constants/endpoints';

const getTasks = (projectId) => axiosInstance.get(`${TASKS_URL}?projectId=${projectId}`);

const editTask = (id, task) => axiosInstance.put(`${TASKS_URL}/${id}`, task);

const createTask = (taskData) => axiosInstance.post(TASKS_URL, taskData);

export { getTasks, editTask, createTask };
