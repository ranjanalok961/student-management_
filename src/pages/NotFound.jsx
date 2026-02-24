import { useNavigate } from "react-router-dom";
import "../css/NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="nf-page">
      <div className="nf-card">
        <h1 className="nf-title">404 - Page Not Found</h1>

        <button className="nf-btn" onClick={() => navigate("/dashboard")}>
          Go Back to Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;