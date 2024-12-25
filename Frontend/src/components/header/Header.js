import React from "react";
import "./Header.css";
import { BellIcon, EmailIcon } from "../../assets/Icons";

const Header = ({title}) => {
  return (
    <div className="header" style={{ margin: "0px 35px" }}>
      <div className="title">{title}</div>
      <div className="icons">
        <EmailIcon/>
        <BellIcon/>
        <div className="profile">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="profile-image"
          />
          <span className="dropdown-icon">▾</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
