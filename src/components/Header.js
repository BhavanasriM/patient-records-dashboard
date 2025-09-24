import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Jarurat Care</h1>
        </div>
        <nav className="nav">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
          <Link
            to="/patients"
            className={
              location.pathname === "/patients" ? "nav-link active" : "nav-link"
            }
          >
            Patients
          </Link>
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "nav-link active" : "nav-link"
            }
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
