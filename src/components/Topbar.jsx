import { useNavigate } from "react-router-dom";
import "../css/Topbar.css";

function Topbar() {
  const navigate = useNavigate();

  return (
    <div className="topbar">
      <div className="topbar-title">Dashboard</div>
      <button className="logout-btn" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}

export default Topbar;