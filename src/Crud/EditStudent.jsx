import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

function EditStudent() {

   let {id} = useParams();

    const [studentId, setStudentId] = useState("");
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState("");
     const [email, setEmail] = useState("");
     const [mobile, setMobile] = useState("");
     const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  let nav = useNavigate();


useEffect(() => {

    axios.get(`https://69537a1da319a928023b9138.mockapi.io/api/students/${id}`).then((res) => {

        // console.log(res.data);
        setStudentId(res.data.student_id);
        setFirstName(res.data.first_name);
        setLastName(res.data.last_name);
        setEmail(res.data.email);
        setMobile(res.data.mobile);
        setAddress(res.data.address);

    }).catch((err) => {
        alert(err);

    })

},[])

const editStudent = (e) => {

    e.preventDefault();

    axios.put(`https://69537a1da319a928023b9138.mockapi.io/api/students/${id}`, 
        {
          student_id: studentId,
          first_name: firstName,
          last_name: lastName,
          email: email,
          mobile: mobile,
          address: address,
        }).then((res) => {
                nav("/crud/view/table");
        }).catch((err) => {
            alert(err);
        })

}

    return(
        
        <>
        
             <Navbar/>
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "660px" }}>
        <h5 className="text-center text-primary mb-4">
          <i className="bi bi-person-plus-fill me-2"></i>
          Edit Student
        </h5>
<form onSubmit={editStudent}>
  <div className="row g-3">
    {/* Student ID */}
    <div className="col-md-6">
      <label className="form-label">Student ID</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        required
        // defaultValue={studentId}
      />
    </div>

    {/* First Name */}
    <div className="col-md-6">
      <label className="form-label">First Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
    </div>

    {/* Last Name */}
    <div className="col-md-6">
      <label className="form-label">Last Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
    </div>

    {/* Email */}
    <div className="col-md-6">
      <label className="form-label">Email</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>

    {/* Mobile */}
    <div className="col-md-6">
      <label className="form-label">Mobile</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter mobile number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        required
      />
    </div>

    {/* Address – full width */}
    <div className="col-md-6">
      <label className="form-label">Address</label>
      <textarea
        className="form-control"
        rows="2"
        placeholder="Enter address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      ></textarea>
    </div>

    {/* Submit Button */}
    <div className="col-12">
      <button className="btn btn-primary w-100 mt-3" disabled={loading}>
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
    </>
  );


      
    

}

export default EditStudent;