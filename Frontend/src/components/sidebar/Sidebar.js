import React, { useEffect } from "react";
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
  const handleCloseMenu = (type) => {
    setTitle(type);
    if (window.innerWidth <= 1024) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpenMenu(true);
      } else {
        setOpenMenu(false);
      }
    };

    // Set menu state on initial render
    handleResize();

    // Add event listener for screen resizing
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setOpenMenu]);

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
          className="menu-item"
          onClick={() => handleCloseMenu("Candidates")}
        >
          <CandidateIcon />
          <span className="text">Candidates</span>
        </Link>
        <p className="section-title">Organization</p>
        <Link
          to="/dashboard/employees"
          className="menu-item"
          onClick={() => handleCloseMenu("Employees")}
        >
          <EmployeeIcon />
          <span className="text">Employees</span>
        </Link>
        <Link
          to="/dashboard/attendance"
          className="menu-item"
          onClick={() => handleCloseMenu("Attendance")}
        >
          <AttendanceIcon />
          <span className="text">Attendance</span>
        </Link>
        <Link
          to="/dashboard/leaves"
          className="menu-item"
          onClick={() => handleCloseMenu("Leaves")}
        >
          <LeavesIcon />
          <span className="text">Leaves</span>
        </Link>
        <p className="section-title">Others</p>
        <div className="menu-item" onClick={() => handleCloseMenu("Logout")}>
          <LogoutIcon />
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
