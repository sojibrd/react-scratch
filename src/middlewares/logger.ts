// src/middlewares/logger.ts
import { Middleware } from "@reduxjs/toolkit";

export const logger: Middleware = (store) => (next) => (action) => {
  console.log("[Logger Middleware] Dispatching:", action);
  const result = next(action);
  console.log("[Logger Middleware] Next state:", store.getState());
  return result;
};
