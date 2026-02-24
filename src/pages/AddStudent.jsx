import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";
import "../css/AddStudent.css";

function AddStudent() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    age: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://students-k8h7.onrender.com/api/students", student);
      alert("Student Added Successfully!");
      navigate("/students");
    } catch (error) {
      alert("Error adding student");
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <div className="form-card">
          <h2>Add New Student 🎓</h2>
          <p>Fill in the details below to register a student.</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Name</label>
              <input
                name="name"
                placeholder="Enter student name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter student email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Course</label>
              <select name="course" onChange={handleChange} required>
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
                placeholder="Enter age"
                onChange={handleChange}
                required
              />
            </div>

            <button className="save-btn">Save Student</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default AddStudent;