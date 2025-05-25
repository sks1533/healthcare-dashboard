import React from "react";
import { navigationLinks } from "../data/navigationLinks";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <nav className="sidebar" aria-label="Primary navigation">
      <h2 className="sidebar-title">General</h2>
      <ul className="nav-list">
        {navigationLinks.map(({ label, iconClass }, i) => (
          <li key={i}>
            <a href="#" className="nav-link" tabIndex={0}>
              <i className={iconClass} aria-hidden="true"></i>
              <span className="nav-label">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
