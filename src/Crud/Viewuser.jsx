import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Viewuser() {
  const [students, setStudents] = useState(() => {
    return JSON.parse(localStorage.getItem("students")) || [];
  });

  useEffect(() => {
    axios
      .get("https://69537a1da319a928023b9138.mockapi.io/api/students")
      .then((res) => {
        setStudents(res.data);
        localStorage.setItem("students", JSON.stringify(res.data));
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure to delete?")) {
      try {
        await axios.delete(
          `https://69537a1da319a928023b9138.mockapi.io/api/students/${id}`
        );
        const updated = students.filter((s) => s.id !== id);
        setStudents(updated);
        localStorage.setItem("students", JSON.stringify(updated));
      } catch {
        alert("Delete failed");
      }
    }
  };

  return (
    <>
    <Navbar />
    <div className="container mt-4">
      <h3 className="text-center text-primary mb-4">
        <i className="bi bi-people-fill me-2"></i>
        Students List
      </h3>

      <div className="row">
        {students.map((student) => (
          <div key={student.id} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="text-primary">
                  {student.first_name} {student.last_name}
                </h5>

                <p><b>Student ID:</b> {student.student_id}</p>
                <p><b>Email:</b> {student.email}</p>
                <p><b>Mobile:</b> {student.mobile}</p>
                <p><b>Address:</b> {student.address}</p>

                <Link
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Viewuser;
