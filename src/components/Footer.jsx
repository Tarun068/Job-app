import React from "react";
import "./footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="wrapper">
      <div className="footer-container">
        <h2 className="rectMail">react.dev@gmail.com</h2>
        <h2 className="tagName">@creation by react dev pvt</h2>
        <div className="icons">
          <FaInstagram size={30} color="#E4405F" />
          <FaLinkedin size={30} color="#0A66C2" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
