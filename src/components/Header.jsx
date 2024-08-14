import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav id="topnav" className="defaultscroll is-sticky">
      <div className="container relative">
        <div className="menu-extras">
          <div className="menu-item">
            <a
              className={`navbar-toggle ${menuOpen ? "open" : ""}`}
              id="isToggle"
              onClick={toggleMenu}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            {/* Company Logo Text */}
            <span className="company-logo-text">Company Logo</span>
          </div>
        </div>
        <div id="navigation" style={{ display: menuOpen ? "block" : "none" }}>
          {/* Navigation Menu */}
          <ul className="navigation-menu nav-light">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/aboutus"}>About</Link>
            </li>
            <li>
              <a href="#faq" className="sub-menu-item" onClick={closeMenu}>
                FAQ
              </a>
            </li>
            <li>
              <Link to={"/contactus"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
          {/* End navigation menu */}
        </div>
        {/* End navigation */}
      </div>
      {/* End container */}
    </nav>
  );
};
