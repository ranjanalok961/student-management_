import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { FaUserGraduate, FaBookOpen } from "react-icons/fa";
import "../css/Dashboard.css";

function Dashboard() {
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    fetchTotalStudents();
  }, []);

  const fetchTotalStudents = async () => {
    try {
      const response = await axios.get(
        "https://students-k8h7.onrender.com/api/students"
      );
      setTotalStudents(response.data.length);
    } catch (error) {
      console.error("Error fetching students", error);
    }
  };

  return (
    <Layout>
      <div className="dashboard-header">
        <h1>Welcome, Admin 👋</h1>
        <p>Here’s what’s happening in your system today.</p>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card blue">
          <div className="card-icon">
            <FaUserGraduate />
          </div>
          <div>
            <h3>Total Students</h3>
            <h2>{totalStudents}</h2>
          </div>
        </div>

        <div className="dashboard-card purple">
          <div className="card-icon">
            <FaBookOpen />
          </div>
          <div>
            <h3>Courses Available</h3>
            <h2>5</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;