import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import "../css/Register.css";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !course.trim() || !password.trim()) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await axios.post(
        "https://students-k8h7.onrender.com/api/auth/register",
        {
          name: name,
          email: email,
          password: password,
        },
      );

      alert(response.data); // "User registered successfully!"
      navigate("/");
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      } else {
        setError("Server error. Try again.");
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Student System</h1>

        <form onSubmit={handleRegister}>
          <div className="field">
            <label className="label">Full Name:</label>
            <input
              className="input"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
            />
          </div>

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
            <label className="label">Course:</label>
            <select
              className="input"
              value={course}
              onChange={(e) => {
                setCourse(e.target.value);
                setError("");
              }}
            >
              <option value="">Select course</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="BTech">BTech</option>
              <option value="MBA">MBA</option>
            </select>
          </div>

          <div className="field">
            <label className="label">Password:</label>
            <input
              className="input"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
          </div>

          <button className="primary-btn" type="submit">
            Register
          </button>

          {error && <p className="error-text">{error}</p>}

          {/* Switch */}
          <p className="switch-text">
            Already have an account?{" "}
            <Link className="switch-link" to="/">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
