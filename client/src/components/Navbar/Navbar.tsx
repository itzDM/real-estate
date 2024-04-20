import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
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
        {!currentUser ? (
          <Link to="/login">Sign-in</Link>
        ) : (
          <div>
            <Link to="/profile">
              <img
                className="navAvatar"
                src={currentUser.avatar || "./noAvatar.svg"}
                alt=""
              />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
