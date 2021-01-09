import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h5>
        <Link className="navbar-brand" to="/about" style={{ color: '#FFF' }} >Cr3ative</Link>
        Copyright 2021</h5>
    </footer>
  );
}

export default Footer;
