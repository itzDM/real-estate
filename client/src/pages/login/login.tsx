import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { apiRequest } from "../../lib/apiRequest";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
export default function Login() {
  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const [error, SetError] = useState("");
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const response = await apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.data) {
      updateUser(response.data);
      navigate("/");
    }
    SetError(response.error);
  };
  return (
    <section className="loginContainer">
      <form onSubmit={handelSubmit}>
        <h2>Welcome Back</h2>
        <input type="email" name="email" required placeholder="email" />
        <input
          type="password"
          name="password"
          minLength={3}
          required
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <p className="error">{error}</p>
        <p>
          Do not Have An Account ? <Link to="/register">Register</Link>
        </p>
      </form>
      <div className="login-right">
        <img src="/login.jpg" alt="image login" />
      </div>
    </section>
  );
}
