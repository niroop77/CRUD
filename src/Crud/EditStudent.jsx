import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

// ✅ Toast imports
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditStudent() {
  let { id } = useParams();

  const [studentId, setStudentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  let nav = useNavigate();

  useEffect(() => {
    axios
      .get(`https://69537a1da319a928023b9138.mockapi.io/api/students/${id}`)
      .then((res) => {
        setStudentId(res.data.student_id);
        setFirstName(res.data.first_name);
        setLastName(res.data.last_name);
        setEmail(res.data.email);
        setMobile(res.data.mobile);
        setAddress(res.data.address);
      })
      .catch(() => {
        toast.error("Failed to fetch student details");
      });
  }, [id]);

  const editStudent = (e) => {
    e.preventDefault();

    axios
      .put(`https://69537a1da319a928023b9138.mockapi.io/api/students/${id}`, {
        student_id: studentId,
        first_name: firstName,
        last_name: lastName,
        email: email,
        mobile: mobile,
        address: address,
      })
      .then(() => {
        toast.success("Student updated successfully");

        // ✅ Delay navigation
        setTimeout(() => {
          nav("/crud/view/table");
        }, 2000);
      })
      .catch(() => {
        toast.error("Failed to update student");
      });
  };

  return (
    <>
      <Navbar />

      <div className="container d-flex justify-content-center mt-5">
        <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "660px" }}>
          <h5 className="text-center text-primary mb-4">
            <i className="bi bi-person-plus-fill me-2"></i>
            Edit Student
          </h5>

          <form onSubmit={editStudent}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Student ID</label>
                <input
                  type="text"
                  className="form-control"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  rows="2"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-primary w-100 mt-3">
                  <i className="bi bi-check-circle me-2"></i>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* ✅ Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default EditStudent;
