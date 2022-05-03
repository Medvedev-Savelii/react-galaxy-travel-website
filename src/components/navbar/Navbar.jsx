import React, { useState } from "react";
import "../navbar/NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="header">
      <Link to="">
        <h1>GLX TRVL</h1>
      </Link>
      <ul className={nav ? "nav-menu active" : "nav-menu"}>
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
      <div className="hamburger" onClick={handleClick}>
        {!nav ? (
          <FaBars style={{ color: "#fff" }} className="icon" />
        ) : (
          <FaTimes style={{ color: "#fff" }} className="icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
