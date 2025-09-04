// Navbar.js (updated)
import React, { useState } from "react";
import "../Styles/Navbar.css";
import Button from "./Button";
import Logo from "./Logo";
import { navItems } from "../Common/Content";
import { useTheme } from "../Context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Logo />

        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={item.link} className="nav-link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-buttons">
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </button>
          <Button variant="outline">Login</Button>
          <Button variant="primary">Sign Up</Button>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon">
            {isMenuOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </span>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-menu">
            {navItems.map((item, index) => (
              <li key={index} className="mobile-nav-item">
                <a href={item.link} className="mobile-nav-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-buttons">
            <button onClick={toggleTheme} className="theme-toggle mobile-theme-toggle">
              {isDarkMode ? (
                <i className="fa-solid fa-sun"></i>
              ) : (
                <i className="fa-solid fa-moon"></i>
              )}
            </button>
            <Button variant="outline">Login</Button>
            <Button variant="primary">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;