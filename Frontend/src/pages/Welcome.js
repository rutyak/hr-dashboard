import React from "react";
import "./Welcome.css";
import AuthImage from "../assets/image.png";
import { Logo } from "../assets/Icons";
import { Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="container">
        <div className="auth-container">
          <Logo/>
          <Outlet/>
        </div>
        <img src={AuthImage} alt="AuthImage" className="authImage" />
      </div>
    </>
  );
};

export default Welcome;
