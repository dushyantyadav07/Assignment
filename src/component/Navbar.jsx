import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"; // Import your SASS styles here

const NavBar = () => {
  return (
    <nav className="navbar p-2">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item  px-5">
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
