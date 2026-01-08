import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Adduser() {
  const [studentId, setStudentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getuserdata = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://69537a1da319a928023b9138.mockapi.io/api/students",
        {
          student_id: studentId,
          first_name: firstName,
          last_name: lastName,
          email: email,
          mobile: mobile,
          address: address,
        }
      );

      console.log(response.data);

      toast.success("Hey 👋! Student Added Successfully!", {
        position: "top-right",
      });

      // Clear form
      setStudentId("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMobile("");
      setAddress("");

      // ✅ Delay navigation so toast is visible
      setTimeout(() => {
        navigate("/crud/view/table");
      }, 2000);
    } catch (err) {
      toast.error("❌ Failed to add student", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container d-flex justify-content-center mt-5">
        <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "660px" }}>
          <h5 className="text-center text-primary mb-4">
            <i className="bi bi-person-plus-fill me-2"></i>
            Add Student
          </h5>

          <form onSubmit={getuserdata}>
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
                <button
                  className="btn btn-primary w-100 mt-3"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Saving...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-check-circle me-2"></i>
                      Submit
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Toast container kept exactly as you had */}
      <ToastContainer />
    </>
  );
}

export default Adduser;
