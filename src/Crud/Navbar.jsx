import { Link, NavLink } from "react-router-dom";
import Banner from "../Banner";

function Navbar() {
  return (
    <>
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">

        {/* LOGO */}
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          CRUD<span className="text-warning">App</span>
        </NavLink>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3 text-center">

            <li className="nav-item">
              <NavLink
                to="/crud/add"
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? "active fw-semibold" : ""}`
                }
              >
                ➕ Add User
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/crud/view/table"
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? "active fw-semibold" : ""}`
                }
              >
                👁️ View Users
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
</div>
    </>
  );
}

export default Navbar;
