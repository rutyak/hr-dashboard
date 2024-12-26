import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Welcome from "./pages/Welcome";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Main from "./pages/Main";
import Candidates from "./pages/candidates/Candidates";
import Employees from "./pages/employees/Employees";
import Attendance from "./pages/attendance/Attendance";
import Leaves from "./pages/leaves/Leaves";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Candidates />, 
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "attendance",
        element: <Attendance />, 
      },
      {
        path: "leaves",
        element: <Leaves />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
