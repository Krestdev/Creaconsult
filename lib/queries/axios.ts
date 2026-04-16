// lib/axios.ts
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// REQUEST INTERCEPTOR
api.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  config.headers.Authorization = `Bearer ${token}`;
  console.log(config.headers.Authorization);

  return config;
});

// RESPONSE INTERCEPTOR (refresh token pattern)
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
    }

    return Promise.reject(error);
  },
);
