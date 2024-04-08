import { Link } from "react-router-dom";
import "./login.css";
export default function Login() {
  return (
    <section className="loginContainer">
      <form>
        <h2>Welcome Back</h2>
        <input type="email" name="email" required placeholder="email" />
        <input
          type="password"
          name="password"
          minLength={4}
          required
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <p>
          Do not Have An Account ? <Link to="/register">Register</Link>
        </p>
      </form>
      <div className="login-right"></div>
    </section>
  );
}
