import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p>Copyright
      <Link className="navbar-brand" to="/about">
          Cr3ative
        </Link>
        2021</p>
    </footer>
  );
}

export default Footer;
