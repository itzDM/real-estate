import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        🏦 <span>Real-eState</span>
      </Link>
      <div>
        <Link to="/placeList">🔍</Link>
        <Link to="/">Home</Link>
        <Link to="/agents">Agents</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Sign-in</Link>
      </div>
    </nav>
  );
}
