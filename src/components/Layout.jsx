import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../css/Layout.css";

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-main">
        <Topbar />
        <div className="layout-content">{children}</div>
      </div>
    </div>
  );
}

export default Layout;