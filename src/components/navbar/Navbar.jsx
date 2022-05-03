import React from "react";
import "../navbar/NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="">
        <h1>GLX TRVL</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/training">Training</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger">
        <FaBars style={{ color: "#fff" }} />
      </div>
    </div>
  );
};

export default Navbar;
