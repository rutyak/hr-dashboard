import React from "react";
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
import Logout from "../logout/Logout";

const Sidebar = ({setTitle}) => {

  return (
    <div className="sidebar">
      <div className="logo">
        <Logo />
      </div>
      <div className="search">
        <div className="search-icon">
          <SearchIcon/>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="menu">
        <p className="section-title">Recruitment</p>
        <Link to="/dashboard" className="menu-item" onClick={()=> setTitle("Candidates")}>
          <CandidateIcon />
          <span className="text">Candidates</span>
        </Link>
        <p className="section-title">Organization</p>
        <Link to="/dashboard/employees" className="menu-item" onClick={()=> setTitle("Employees")}>
          <EmployeeIcon />
          <span className="text">Employees</span>
        </Link>
        <Link to="/dashboard/attendance" className="menu-item" onClick={()=> setTitle("Attendance")}>
          <AttendanceIcon />
          <span className="text">Attendance</span>
        </Link>
        <Link to="/dashboard/leaves" className="menu-item" onClick={()=> setTitle("Leaves")}>
          <LeavesIcon />
          <span className="text">Leaves</span>
        </Link>
        <p className="section-title">Others</p>
        <div className="menu-item">
          <LogoutIcon />
          <Logout/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
