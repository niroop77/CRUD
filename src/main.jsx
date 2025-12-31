import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'

// Components
import Navbar from './Crud/Navbar'
import Adduser from './Crud/Adduser'
import Viewuser from './Crud/Viewuser'
import Tableview from './Crud/Tableview'
// Layout
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

// Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <CrudLayout />,
    children: [
      {
        path: 'crud/add',
        element: <Adduser />,
      },
      {
        path: 'crud/view',
        element: <Viewuser />,
      },
      {
        path: 'crud/view/table',
        element: <Tableview />,
      },
    ],
  },
]);

// Render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
