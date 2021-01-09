import React from "react";
import {useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../styles/CR3ATIVE_logo_mini.png"

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {

  const location = useLocation();

  if(location.pathname !== "/" && location.pathname !== "/signup" && location.pathname !== "/login" && location.pathname !== "/profile/editor")
  {

  return (
    <nav className="navbar">
      <a href="/"><img src={Logo} alt="logo"/></a>
    </nav>
  );
  }

  else
  {
    return null;
  }
}

export default Navbar;
