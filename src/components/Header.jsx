import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="app-logo">Healthcare.</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." aria-label="Search" />
        <i className="fas fa-search search-icon"></i>
      </div>
      <div className="header-right">
        <button aria-label="Notifications" title="Notifications" className="icon-button">
          <i className="fas fa-bell"></i>
        </button>
        <button aria-label="Add new" title="Add new" className="add-button">+</button>
        <img
          alt="Profile avatar of a male doctor with teal background"
          className="profile-img"
          src="https://png.pngtree.com/png-clipart/20230904/original/pngtree-profile-picture-vector-illustration-16-png-image_10845763.png"
          width="40"
          height="40"
        />
      </div>
    </header>
  );
}

export default Header;
