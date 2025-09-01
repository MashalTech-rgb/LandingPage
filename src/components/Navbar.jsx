import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img src="/images/Main Logo.png" alt="Nexcent Logo" />
          <span>Nexcent</span>
        </div>

        {/* Desktop */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#service" className="nav-link">Service</a></li>
          <li className="nav-item"><a href="#feature" className="nav-link">Feature</a></li>
          <li className="nav-item"><a href="#product" className="nav-link">Product</a></li>
          <li className="nav-item"><a href="#testimonial" className="nav-link">Testimonial</a></li>
          <li className="nav-item"><a href="#faq" className="nav-link">FAQ</a></li>
        </ul>

        {/* Login/Signup Buttons - Desktop */}
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign up</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
           <span className='menu-icon'><i class="fa-solid fa-bars"></i></span> 
          ) : (
        <span className='menu-icon'><i class="fa-solid fa-xmark"></i> </span>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-menu">
            <li className="mobile-nav-item"><a href="#home" className="mobile-nav-link">Home</a></li>
            <li className="mobile-nav-item"><a href="#service" className="mobile-nav-link">Service</a></li>
            <li className="mobile-nav-item"><a href="#feature" className="mobile-nav-link">Feature</a></li>
            <li className="mobile-nav-item"><a href="#product" className="mobile-nav-link">Product</a></li>
            <li className="mobile-nav-item"><a href="#testimonial" className="mobile-nav-link">Testimonial</a></li>
            <li className="mobile-nav-item"><a href="#faq" className="mobile-nav-link">FAQ</a></li>
          </ul>
          <div className="mobile-nav-buttons">
            <button className="mobile-login-btn">Login</button>
            <button className="mobile-signup-btn">Sign up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
