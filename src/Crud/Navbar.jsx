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

        {/* RIGHT CONTROLS (HAMBURGER + TOGGLE) */}
        <div className="d-flex align-items-center gap-2">

          

          {/* HAMBURGER */}
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
        </div>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto text-center gap-lg-3">

            <li className="nav-item">
              <NavLink
                to="/crud/add"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold" : ""}`
                }
              >
                ➕ Add User
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/crud/view/table"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold" : ""}`
                }
              >
                👁️ View Users
              </NavLink>
            </li>

          </ul>
        </div>
{/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-outline-secondary toggle-1"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
      </div>
    </nav>
  );
}

export default Navbar;
