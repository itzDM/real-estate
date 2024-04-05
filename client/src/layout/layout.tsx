import { Outlet } from "react-router-dom";
import "./layout.css";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
const Layout: React.FC = () => {
  return (
    <main className="layout">
      <Navbar />
      <div className="content">{<Outlet />}</div>
    </main>
  );
};

export default Layout;
