import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-new.png";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
          <span>Ashmeet Kaur</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
          <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link>
          <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;