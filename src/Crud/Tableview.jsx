import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
function Tableview () {
    const [students, setStudents] = useState([]);
      let nav = useNavigate();
    
      useEffect(() => {
        const fetchStudents = async () => {
          try {
            const response = await axios.get(
              "https://69537a1da319a928023b9138.mockapi.io/api/students"
            );
            setStudents(response.data);
          } catch (err) {
            console.error(err);
          }
        };
    
        fetchStudents();
      }, []);

      const deleteStudent = async (id) => {
  if (window.confirm("Are you sure to delete ?")) {
    try {
      await axios.delete(
        "https://69537a1da319a928023b9138.mockapi.io/api/students/" + id
      );

      // ✅ Remove deleted student from UI
      setStudents((prev) => prev.filter((student) => student.id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  }
};

    
    return(
        <>
        <Navbar />
       <div className="container mt-4">
      <h3 className="text-center text-primary mb-4">
        <i className="bi bi-people-fill me-2"></i>
        Table View
      </h3>
      <div className="table-responsive">
  <table className="table table-hover table-bordered align-middle custom-table">
    <thead className="table-primary text-center">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Mobile</th>
        <th>Address</th>
        <th>Options</th>
      </tr>
    </thead>

    <tbody>
      {students.map((student) => (
        <tr key={student.id}>
          <td className="text-truncate" style={{ maxWidth: "180px" }}>
            {student.student_id}
          </td>
          <td className="fw-semibold">
            {student.first_name} {student.last_name}
          </td>
          <td>{student.mobile}</td>
          <td>{student.address}</td>
          <td className="text-center">
            <button
              onClick={() => deleteStudent(student.id)}
              className="btn btn-sm btn-outline-danger"
            >
              <i className="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
    <tfoot className="table-primary text-center">
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Mobile</th>
        <th>Address</th>
        <th>Options</th>
      </tr>
    </tfoot>
  </table>
</div>

      </div>
      </>
    )
}
export default Tableview;