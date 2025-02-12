import axios from 'axios';
import { environment } from '../config/environment';

const api = axios.create({
  baseURL: environment.apiUrl,
  timeout: 15000, // Increased timeout
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

api.interceptors.request.use(request => {
  console.log('API Request:', {
    url: request.baseURL + request.url,
    method: request.method,
    headers: request.headers
  });
  return request;
});

api.interceptors.response.use(
  response => {
    console.log('API Response:', {
      status: response.status,
      url: response.config.url,
      data: response.data
    });
    return response;
  },
  error => {
    console.error('API Error:', {
      message: error?.message,
      url: error?.config?.baseURL + error?.config?.url,
      status: error?.response?.status
    });
    throw error;
  }
);

export default api;
