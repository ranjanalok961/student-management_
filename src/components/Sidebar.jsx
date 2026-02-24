import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaUserGraduate } from "react-icons/fa";
import "../css/Sidebar.css";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">🎓 StudentSys</h2>

      <Link
        to="/dashboard"
        className={`sidebar-link ${
          location.pathname === "/dashboard" ? "active" : ""
        }`}
      >
        <FaTachometerAlt className="icon" />
        Dashboard
      </Link>

      <Link
        to="/students"
        className={`sidebar-link ${
          location.pathname.includes("/students") ? "active" : ""
        }`}
      >
        <FaUserGraduate className="icon" />
        Students
      </Link>
    </div>
  );
}

export default Sidebar;