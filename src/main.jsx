import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";

// Components
import Navbar from "./Crud/Navbar";
import Home from "./Home";
import Adduser from "./Crud/Adduser";
import Viewuser from "./Crud/Viewuser";
import Tableview from "./Crud/Tableview";
import EditStudent from "./Crud/EditStudent";

// Contexts
import UserContext from "./UserContext";
import { ThemeProvider } from "./ThemeContext";

/* ROUTES */
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/crud/add", element: <Adduser /> },
  { path: "/crud/view", element: <Viewuser /> },
  { path: "/crud/view/table", element: <Tableview /> },
  { path: "/crud/edit/:id", element: <EditStudent /> },
]);

const userName = "Ajit";

/* RENDER */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContext.Provider value={userName}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </UserContext.Provider>
  </StrictMode>
);
