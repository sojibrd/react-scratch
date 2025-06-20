import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--background)",
    }}
  >
    <div
      style={{
        width: 400,
        padding: "2rem",
        background: "var(--card-bg)",
        borderRadius: "var(--border-radius)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <Outlet />
    </div>
  </div>
);

export default AuthLayout;
