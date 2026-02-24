import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "../css/StudentList.css";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "https://localhost:8080/api/students"
      );
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students", error);
    }
  };

  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      await axios.delete(
        `https://students-k8h7.onrender.com/api/students/${id}`
      );
      fetchStudents();
    }
  };

  return (
    <Layout>
      <div className="student-header">
        <h1>Student Management</h1>
        <Link to="/students/add" className="add-btn">
          <FaPlus /> Add Student
        </Link>
      </div>

      <div className="table-card">
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <span className="course-badge">
                    {student.course}
                  </span>
                </td>
                <td>{student.age}</td>
                <td className="actions">
                  <Link
                    to={`/students/edit/${student.id}`}
                    className="edit-btn"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(student.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default StudentList;