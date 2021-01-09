import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {

  const location = useLocation();

  if(location.pathname !== "/" && location.pathname !== "/signup" && location.pathname !== "/login" && location.pathname !== "/profile/editor")
  {

  return (
    <ul className="nav nav-tabs">

      <li className="nav-item">
        <Link
          to="/profile"
          className={location.pathname === "/profile" ? "nav-link active" : "nav-link"}
        >
          Profile
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/forum"
          className={location.pathname === "/forum" ? "nav-link active" : "nav-link"}
        >
          Forum
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/dashboard"
          className={location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}
        >
          Dashboard
        </Link>
      </li>
    </ul>
  );

  }
  else
  {
     return null;
  }
}

export default NavTabs;
