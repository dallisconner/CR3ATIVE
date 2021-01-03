import React from "react";

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="navbar-nav">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="navbar-nav-item">{children}</li>;
}
