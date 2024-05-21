import axios from 'axios';
import { setToken } from '../interceptor/interceptor';

export const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  timeout: 10000000,
}); 

// axiosClient.interceptors.request.use(setToken);
