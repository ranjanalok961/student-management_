import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import "../css/StudentDetails.css";

function StudentDetails() {
  const navigate = useNavigate();

  return (
    <Layout>
      <h1>Student Details</h1>

      <div className="details-card">
        <p>ID: 101</p>
        <p>Name: Alok Ranjan</p>
        <p>Email: alok@email.com</p>
        <p>Course: BCA</p>
        <p>Age: 21</p>
      </div>

      <button onClick={() => navigate(-1)}>Back</button>
    </Layout>
  );
}

export default StudentDetails;