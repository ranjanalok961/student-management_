import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Email and password are required!");
      return;
    }

    try {
      const response = await axios.post(
        `https://students-k8h7.onrender.com/api/auth/login?email=${email}&password=${password}`,
      );

      alert(response.data); // "Login successful!"

      if (response.data === "Login successful!") {
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      } else {
        setError("Invalid email or password!");
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Student System</h1>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Email:</label>
            <input
              className="input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
          </div>

          <div className="field">
            <label className="label">Password:</label>
            <input
              className="input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
          </div>

          <button className="primary-btn" type="submit">
            Login
          </button>

          {error && <p className="error-text">{error}</p>}

          {/* Switch */}
          <p className="switch-text">
            Don’t have an account?{" "}
            <Link className="switch-link" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
