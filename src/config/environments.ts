// src/config/environments.ts
// Usage: import { API_BASE_URL } from '../config/environments';

export const API_BASE_URL =
  import.meta.env.MODE === "production"
    ? "https://api.example.com"
    : "http://localhost:3000";
