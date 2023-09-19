import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Data from "./Data.json";

export default function Home() {
  const [animateText, setAnimateText] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateText(true);
    }, 1000);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`home-page ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="left">
        <Navbar isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <div className="right">
        <div className="header">
          <div className="header-col-1">
            <div className="input">
              <button>O</button>{" "}
              <input
                type="text"
                placeholder="Search for templates, projects, etc..."
              />
              <button>O</button>
              <button>O</button>
            </div>
            <div className="button-and-coin">
              <button>Create Content</button>
              <div className="coins-field">
                <img src="Images/coins.svg" alt="Coins" />
                <span>20</span>
              </div>
            </div>
          </div>
          <div className="header-col-2">
            <button>
              <img src="Images/calender.svg" alt="Calender" />
            </button>
            <button>
              <img src="Images/bell.svg" alt="Notifications" />
            </button>
            <button>
              <img
                src="https://square-vn.com/app/dscms/assets/images/person-1.jpg?v=1653932875"
                alt="User DP"
              />
            </button>
          </div>
        </div>
        <div className="head">
          <div className="part-1">
            <button
              onClick={toggleMenu}
              className={`menu-button ${isMenuOpen ? "active" : ""}`}
            >
              {isMenuOpen ? (
                <img src="Images/menu_close.svg" alt="" id="menu-icon" />
              ) : (
                <img src="Images/menu.png" alt="" id="menu-icon" />
              )}
            </button>

            <div className="head-logo">
              <img src="https://www.retink.io/LOGO.svg" alt="Retink Logo" />
            </div>
            <button>
              <img
                src="https://square-vn.com/app/dscms/assets/images/person-1.jpg?v=1653932875"
                alt="User Profile Pic"
                id="dp-icon"
              />
            </button>
          </div>
          <div className="part-2">
            <input
              type="name"
              placeholder="Search for templates, projects, etc..."
            />
          </div>
        </div>
        <div className="body">
          <div className="row-1">
            <div className="row-1-r1">
              <h1 className={animateText ? "fade-in-animation" : ""}>
                Hey James!
              </h1>
              <select>
                <option>Zara Ventures</option>
              </select>
            </div>
            <div className="row-1-r2">
              <div className="row-1-r2-c1">
                <span>Let's create something awesome today</span>
                <button type="submit">Start Creating</button>
              </div>
              <div className="row-1-r2-c2">
                <span>
                  You should have more engagement by 6 pm today; try posting
                  then.
                </span>
                <span>
                  Try our SEO optimization tool to increase engagement by 40%
                </span>
              </div>
            </div>
          </div>
          <div className="row-2">
            <h2>Most Popular Tools</h2>
            <p>Explore the trending tools to create your copies fast.</p>
          </div>

          <div className="row-3">
            {Data.Data.map((category, index) => (
              <div key={index} className="row-3-row">
                <h3>{category.title}</h3>
                <div className="cards">
                  {category.cards.map((card, cardIndex) => (
                    <div key={cardIndex} className="card">
                      <div className="card-row-1">
                        <img src={card.editIcon} alt="O" />
                        <img src={card.growthIcon} alt="O" />
                      </div>
                      <div className="card-row-2">
                        <span>{card.title}</span>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
