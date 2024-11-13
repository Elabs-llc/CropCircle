import React from "react";
import { Link } from "react-router-dom"; 
import {PropTypes} from 'prop-types';
import './Footer.css';


const Footer = ({ links }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} CropCircle All rights reserved</p>
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>
          Email: <a href="mailto:info@cropcircle.com">info@cropcircle.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
        </p>
      </div>
      <ul>
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
      <ul className="footer-links">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Footer;
