import { Link } from "react-router-dom";
import "./register.css";
export default function Register() {
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    console.log(formData);
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
          <select name="type">
            <option value="user">User</option>
            <option value="agent">Agent</option>
          </select>
        </div>
        <div className="registerPic">
          <label htmlFor="image">Choose a Profile Pic</label>
          <input type="file" name="image" accept="image/*" />
        </div>
        <button type="submit">Register</button>
        <p>
          Already Have An Account ? <Link to="/login">Login</Link>
        </p>
      </form>
      <div className="register-right"></div>
    </section>
  );
}
