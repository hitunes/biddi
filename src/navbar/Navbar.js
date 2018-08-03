import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-title">BidiiBuild</div>
      <div className="nav-right">
        <span>
          <img src="/images/menu.png" alt="menu-btn" />
        </span>
        <span>
          <img src="/images/side-menu.png" alt="menu-btn" />
        </span>
      </div>
    </div>
  );
};

export const NavList = () => {
  return (
    <div className="navlist-wrapper">
      <ul className="navlist-list">
        <li>Dashboard</li>
        <li>Inventory</li>
        <li>Purchase orders</li>
        <li>bills</li>
        <li>reciepts</li>
        <li>stock control</li>
        <li>reports</li>
      </ul>
    </div>
  );
};
