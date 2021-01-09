import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h4>Copyright 2021 <Link className="" to="/about" style={{ color: '#FFF' }} >Cr3ative</Link>
      </h4>
    </footer >
  );
}

export default Footer;
