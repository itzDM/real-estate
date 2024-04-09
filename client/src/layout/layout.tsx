import { Navigate, Outlet } from "react-router-dom";
import "./layout.css";
import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../context/AuthContext";
const Layout: React.FC = () => {
  return (
    <main className="layout">
      <Navbar />
      <div className="content">{<Outlet />}</div>
    </main>
  );
};

const AuthPages: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  return !currentUser ? (
    Navigate({ to: "/login" })
  ) : (
    <main className="layout">
      <Navbar />
      <div className="content">{<Outlet />}</div>
    </main>
  );
};

export { Layout, AuthPages };
