import React from "react";
import ReactDOM from "react-dom/client";
import Welcome from "./pages/Welcome";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import StudentManagement from "./pages/student/StudentManagement";
// import TeacherManagement from "./pages/teacher/TeacherManagement";
// import ClassManagement from "./pages/class/ClassManagement";
// import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Main from "./pages/Main";
import Candidates from "./pages/candidates/Candidates";
import Employees from "./pages/employees/Employees";
import Attendance from "./pages/attendance/Attendance";
import Leaves from "./pages/leaves/Leaves";
// import Analytics from "./pages/analytics/Analytics";
// import Welcome from "./pages/Welcome";
// import SignUp from "./pages/authentication/SignUp";
// import Login from "./pages/authentication/Login";
// import Main from "./pages/Main";
// import ForgetPassword from "./pages/authentication/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
    children: [
      {
        path: "",
        element: <Login/>,
      },
      {
        path: "register",
        element: <Register/>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Main/>,
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
    <ToastContainer />
    <RouterProvider router={router}>
        <Welcome/>
    </RouterProvider>
  </React.StrictMode>
);
