import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <p>Welcome to <span></span>
        <Link className="navbar-brand" to="/">
          Cr3ative
      </Link>
      </p>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/dashboard"
              className={window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profileeditor"
              className={window.location.pathname === "/profileeditor" ? "nav-link active" : "nav-link"}
            >
              Profile Editor
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/collabinfo"
              className={window.location.pathname === "/collabinfo" ? "nav-link active" : "nav-link"}
            >
              Collab Info
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/forum"
              className={window.location.pathname === "/forum" ? "nav-link active" : "nav-link"}
            >
              Forum
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
