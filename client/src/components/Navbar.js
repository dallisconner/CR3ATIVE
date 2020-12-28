import React from "react";
import "../styles/Navbar.css";
import Logo from "../styles/CR3ATIVE_logo_mini.png"

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/"><img src={Logo} alt="logo"/></a>
    </nav>
  );
}

export default Navbar;
