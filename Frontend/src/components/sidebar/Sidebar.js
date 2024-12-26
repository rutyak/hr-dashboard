import React, { useState } from "react";
import "./Sidebar.css";
import {
  AttendanceIcon,
  CandidateIcon,
  EmployeeIcon,
  LeavesIcon,
  Logo,
  LogoutIcon,
  SearchIcon,
} from "../../assets/Icons";
import { Link } from "react-router-dom";
import Logout from "../../pages/authentication/logout/Logout";

const Sidebar = ({ setTitle, openMenu, setOpenMenu }) => {
  const [activeMenu, setActiveMenu] = useState(""); // State to track the active menu item

  function handleCloseMenu(type) {
    setActiveMenu(type); // Set the active menu item
    if (window.innerWidth <= 1024) {
      setOpenMenu(false);
    }
    setTitle(type);
  }

  return (
    <div className={openMenu ? "sidebar" : "closeMenu"}>
      <div className="logo">
        <Logo />
      </div>
      <div className="search">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="menu">
        <p className="section-title">Recruitment</p>
        <Link
          to="/dashboard"
          className={`menu-item ${activeMenu === "Candidates" ? "active" : ""}`}
          onClick={() => handleCloseMenu("Candidates")}
        >
          <CandidateIcon />
          <span className="text">Candidates</span>
        </Link>
        <p className="section-title">Organization</p>
        <Link
          to="/dashboard/employees"
          className={`menu-item ${activeMenu === "Employees" ? "active" : ""}`}
          onClick={() => handleCloseMenu("Employees")}
        >
          <EmployeeIcon />
          <span className="text">Employees</span>
        </Link>
        <Link
          to="/dashboard/attendance"
          className={`menu-item ${activeMenu === "Attendance" ? "active" : ""}`}
          onClick={() => handleCloseMenu("Attendance")}
        >
          <AttendanceIcon />
          <span className="text">Attendance</span>
        </Link>
        <Link
          to="/dashboard/leaves"
          className={`menu-item ${activeMenu === "Leaves" ? "active" : ""}`}
          onClick={() => handleCloseMenu("Leaves")}
        >
          <LeavesIcon />
          <span className="text">Leaves</span>
        </Link>
        <p className="section-title">Others</p>
        <div
          className={`menu-item ${activeMenu === "Logout" ? "active" : ""}`}
          onClick={() => handleCloseMenu("Logout")}
        >
          <LogoutIcon />
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
