import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl =
  "https://5cda25e4-4e78-443b-b828-6738d6c2cfc7-dev.e1-us-east-azure.choreoapis.dev/notes-app/backend/v1";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
