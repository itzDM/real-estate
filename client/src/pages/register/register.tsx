import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { apiRequest } from "../../lib/apiRequest";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [error, SetError] = useState("");
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const { image, ...data } = Object.fromEntries(formData.entries());
    console.log(image);
    const response = await apiRequest("/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.message) navigate("/login");
    SetError(response.error);
  };
  return (
    <section className="registerContainer">
      <form onSubmit={handelSubmit}>
        <h2>Register Here</h2>
        <input
          type="text"
          name="name"
          minLength={4}
          required
          placeholder="name"
        />
        <input type="email" name="email" required placeholder="email" />
        <input
          type="password"
          name="password"
          minLength={4}
          required
          placeholder="Password"
        />
        <div className="registerType">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="user">User</option>
            <option value="agent">Agent</option>
          </select>
        </div>
        <div className="registerPic">
          <label htmlFor="image">Choose a Profile Pic</label>
          <input type="file" id="image" name="image" accept="image/*" />
        </div>
        <button type="submit">Register</button>
        <p className="error">{error}</p>
        <p>
          Already Have An Account ? <Link to="/login">Login</Link>
        </p>
      </form>
      <div className="register-right">
        <img src="/register.jpg" alt="image register" />
      </div>
    </section>
  );
}
