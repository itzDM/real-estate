import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../context/AuthContext";
import "./layout.css";
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

const AuthAndAgentPages: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) return Navigate({ to: "/login" });
  if (currentUser?.type != "agent") return Navigate({ to: "/" });
  return (
    <main className="layout">
      <Navbar />
      <div className="content">{<Outlet />}</div>
    </main>
  );
};

export { AuthAndAgentPages, AuthPages, Layout };
