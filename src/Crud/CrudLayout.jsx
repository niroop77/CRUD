import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

function CrudLayout() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default CrudLayout;
