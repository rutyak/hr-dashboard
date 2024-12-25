import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
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
import store from "./store";
import "./index.css";

// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />, // This should be the root element for this path
    children: [
      {
        path: "",
        element: <Login />, // Login form route
      },
      {
        path: "register",
        element: <Register />, // Registration form route
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Main />, // Main dashboard component
    children: [
      {
        path: "",
        element: <Candidates />, // Candidates list route
      },
      {
        path: "employees",
        element: <Employees />, // Employees list route
      },
      {
        path: "attendance",
        element: <Attendance />, // Attendance management route
      },
      {
        path: "leaves",
        element: <Leaves />, // Leaves management route
      },
    ],
  },
]);

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
