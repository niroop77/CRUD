import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top shadow ${
        theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
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

            {/* THEME TOGGLE */}
            <li className="nav-item">
              <button
                onClick={toggleTheme}
                className="btn btn-sm btn-outline-secondary ms-lg-3"
              >
                {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
