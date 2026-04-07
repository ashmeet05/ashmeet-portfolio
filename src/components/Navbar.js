import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo-new.png";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const isActive = (path) => location.pathname === path ? "active" : "";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
          <span>Ashmeet Kaur</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={isActive("/")}>Home</Link>
          <Link to="/about" className={isActive("/about")}>About</Link>
          <Link to="/projects" className={isActive("/projects")}>Projects</Link>
          <Link to="/services" className={isActive("/services")}>Services</Link>
          <Link to="/contact" className={isActive("/contact")}>Contact</Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className={isActive("/dashboard")}>Dashboard</Link>
              <button onClick={handleLogout} className="nav-logout-btn">Sign Out</button>
            </>
          ) : (
            <Link to="/signin" className={isActive("/signin")}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
