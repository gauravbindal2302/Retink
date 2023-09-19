import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="Images/logo.svg" alt="Retink Logo" />
      </div>
      <div className="menu">
        <div className="menu-1">
          <button>
            <img src="Images/home.svg" alt="Home" id="icon" />
          </button>
          <button>
            <img src="Images/grid.svg" alt="Grid" id="icon" />
          </button>
        </div>
        <div className="menu-2">
          <button>
            <img src="Images/settings.svg" alt="Settings" id="icon" />
          </button>
          <button>
            <img src="Images/export.svg" alt="Export" id="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
