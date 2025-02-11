import React, { useState } from "react";
import "./header.css";
import logo from "../assets/react.svg";
import menu from "../assets/burger-bar.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="logo-wrapper">
          <div className="logo-container">
            <img src={logo} alt="Logo" />
          </div>
          <div className="title">
            <h3>React Jobs</h3>
          </div>
        </div>

        {/* Desktop Navigation */}
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
              <Link className="nav-links" to="/job/addJob">
                Add-job
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="hamburger" onClick={handleClick}>
          <img src={menu} alt="Menu" />
        </div>
      </div>

      {/* Mobile Modal */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <button className="close-btn" onClick={closeMenu}>
              &times;
            </button>
            <ul className="mobile-menu-links">
              <li>
                <Link className="nav-links" to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/jobs" onClick={closeMenu}>
                  Jobs
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="" onClick={closeMenu}>
                  Add-job
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
