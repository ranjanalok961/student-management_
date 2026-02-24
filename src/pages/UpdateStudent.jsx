import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";
import "../css/UpdateStudent.css";

function UpdateStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    age: ""
  });

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await axios.get(
        `https://students-k8h7.onrender.com/api/students/${id}`
      );
      setStudent(response.data);
    } catch (error) {
      alert("Error fetching student");
    }
  };

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://students-k8h7.onrender.com/api/students/${id}`,
        student
      );
      alert("Student Updated Successfully!");
      navigate("/students");
    } catch (error) {
      alert("Error updating student");
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <div className="form-card">
          <h2>Update Student ✏️</h2>
          <p>Edit student details below.</p>

          <form onSubmit={handleUpdate}>
            <div className="input-group">
              <label>Name</label>
              <input
                name="name"
                value={student.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={student.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Course</label>
              <select
                name="course"
                value={student.course}
                onChange={handleChange}
                required
              >
                <option value="">Select Course</option>
                <option value="BCA">BCA</option>
                <option value="MCA">MCA</option>
                <option value="BTech">BTech</option>
                <option value="MBA">MBA</option>
              </select>
            </div>

            <div className="input-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={student.age}
                onChange={handleChange}
                required
              />
            </div>

            <button className="update-btn">Update Student</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default UpdateStudent;