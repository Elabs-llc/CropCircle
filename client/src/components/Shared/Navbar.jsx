import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import PropTypes from "prop-types";
import { useState } from "react";
import "./Navbar.css";
import menu from "../../assets/menu.svg";

const Navbar = ({ navLinks, bgcolor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header style={{ backgroundColor: bgcolor }}>
      <img src={menu} alt className="menu" onClick={toggleMenu}></img>
      <div className="logo">CropCircle</div>
      <nav className={`nav ${isOpen ? "active" : ""}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  bgcolor: PropTypes.string,
};

export default Navbar;

