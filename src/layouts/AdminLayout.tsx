import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => (
  <div
    style={{
      minHeight: "100vh",
      background: "var(--background)",
      color: "var(--text)",
    }}
  >
    <header
      style={{
        padding: "1rem",
        background: "var(--navbar-bg)",
        color: "var(--navbar-text)",
      }}
    >
      <h1>Admin Panel</h1>
    </header>
    <aside
      style={{
        width: 220,
        float: "left",
        minHeight: "calc(100vh - 60px)",
        background: "#222",
        color: "#fff",
        padding: "1rem",
      }}
    >
      {/* Sidebar navigation goes here */}
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
    <main style={{ marginLeft: 240, padding: "2rem" }}>
      <Outlet />
    </main>
  </div>
);

export default AdminLayout;
