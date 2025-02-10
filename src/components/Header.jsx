import React from "react";
import "./header.css";
import logo from "../assets/react.svg";
import menu from "../assets/burger-bar.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="logo-wrapper">
          <div className="logo-container">
            <img src={logo} alt="" />
          </div>
          <div className="title">
            <h3>React Jobs</h3>
          </div>
        </div>
        <div className="nav-bar-container">
          <ul className="nav-bar-links">
            <li>
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/jobs">
                Jobs
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="">
                Add-job
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <img src={menu} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
