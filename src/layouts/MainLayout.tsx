import React from "react";
import AmazonNavbar from "../components/common/navbar/AmazonNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";

const MainLayout: React.FC = () => (
  <>
    <AmazonNavbar />
    <main style={{ minHeight: "calc(100vh - 60px)" }}>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default MainLayout;
