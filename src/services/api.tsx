import axios from 'axios';
import { environment } from '../config/environment';

const api = axios.create({
  baseURL: environment.apiUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
