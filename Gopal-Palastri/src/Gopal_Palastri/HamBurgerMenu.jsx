import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="dopamine-menu-container">
      <div className={`dopamine-hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="dopamine-bar"></div>
        <div className="dopamine-bar"></div>
        <div className="dopamine-bar"></div>
      </div>
      
      {/* This overlay is only visible when the menu is open */}
      {isOpen && <div className="dopamine-overlay" onClick={closeMenu}></div>}

      <nav className={`dopamine-menu ${isOpen ? 'open' : ''}`}>
        <ul className="dopamine-menu-list">
          <li className="dopamine-menu-item">
            <a href="#">Home</a>
          </li>
          <li className="dopamine-menu-item">
            <a href="#">My Appointments</a>
          </li>
          <li className="dopamine-menu-item">
            <a href="#">My Checkups</a>
          </li>
          <li className="dopamine-menu-item">
            <a href="#">Medicines Bought</a>
          </li>
          <li className="dopamine-menu-item">
            <a href="#">History</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;