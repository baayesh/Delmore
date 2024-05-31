import React from "react";
import "../styles/header.css";
import logo from "../assets/logo/logo.png"

const Header = () => {
  return (
    <header className="header-container">
      <div className="container">
        <div className="header-content">
          <img src={logo} alt="logo" className="logo" />
          <nav className="nav">
            <div className="nav-list">
              <a href="/" className="nav-link">
                Home
              </a>
              <a href="/about" className="nav-link">
                About
              </a>
              <a href="/video" className="nav-link">
                Video
              </a>
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
