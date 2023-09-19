// Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = ({ isOpen, toggleMenu }) => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="logo">
        <img src="Images/logo.svg" alt="Retink Logo" />
      </div>
      <div className="menu">
        <div className="menu-1">
          <button>O</button>
          <button>O</button>
        </div>
        <div className="menu-2">
          <button>O</button>
          <button>O</button>
        </div>
        <button className="close-button" onClick={toggleMenu}>
          X
        </button>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? "Close" : "Menu"}
      </button>
    </div>
  );
};

export default Navbar;
