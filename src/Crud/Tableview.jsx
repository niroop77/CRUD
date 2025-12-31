import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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

      const deleteStudent = (id) => {

        if(window.confirm("Are you sure to delete ?")) {
 console.log("In")
            axios.delete('https://69537a1da319a928023b9138.mockapi.io/api/students/'+id).then((res) => {
                console.log(res)
                nav("/crud/view/table")
            }).catch((err) => {
                    alert(err);
            });
        }

      }
    
    return(
       <div className="container mt-4">
      <h3 className="text-center text-primary mb-4">
        <i className="bi bi-people-fill me-2"></i>
        Table View
      </h3>
      <div className="table-responsive">
<table className="table table-hover">
    <thead>
        <tr>
        <th>
            ID
        </th>
        <th>
            Name
        </th>
        <th>
            Mobile
        </th>
        <th>
            Address
        </th>
         <th>
            Options
        </th>
        </tr>
    </thead>
    <tbody>
       {
        students.map((student) =>{
            return(
                <tr key={student.id}>
                    <td>
                        {student.student_id}
                    </td>
                    <td>
                        {student.first_name}{student.last_name}
                    </td>
                    <td>
                        {student.mobile}
                    </td>
                    <td>
                        {student.address}
                    </td>
                    <td>
                        <Link  onClick={() => deleteStudent(student.id)} className="btn btn-danger">Delete</Link>
                    </td>
                </tr>
            )
        })
       }
    </tbody>
    <tfoot>
       <tr>
        <th>
            ID
        </th>
        <th>
            Name
        </th>
        <th>
            Mobile
        </th>
        <th>
            Address
        </th>
         <th>
            Options
        </th>
        </tr>
    </tfoot>
</table>
      </div>
      </div>
    )
}
export default Tableview;