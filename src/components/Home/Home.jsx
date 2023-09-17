import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import data from "./Data.json"; // Import the JSON data

export default function Home() {
  const headings = data.headings;
  const cards = data.cards;
  const mediaCards = data.mediaCards;

  return (
    <>
      <div className="home-page">
        <Navbar />
        <div className="home-container">
          <div className="r1">
            <div className="r1-c1">
              <h1>{headings.heading1}</h1>
              <h1>
                <span>{headings.heading2}</span>
              </h1>
              <h2>{headings.subheading}</h2>
              <h3>
                <span>{headings.cta}</span>
              </h3>
              <div className="input-field">
                <input type="name" placeholder="Business Name" />
                <h3>would like a beta invite to</h3>
                <input type="name" placeholder="Email Address" />
                <h3>when it's ready!</h3>
              </div>
              <div className="buttons">
                <button>Notify Me</button>
                <button>Sign Up as a Freelance Partner</button>
              </div>
            </div>
            <div className="r1-c2">
              <img src="Images/avatar.png" alt="Retink Avatar" />
            </div>
          </div>
          <div className="r2">
            <h1> Retink Content Solution for Your Business</h1>
            <iframe
              src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
              title=" "
            ></iframe>
          </div>
          <div className="r3">
            <div className="cards">
              {cards.map((card, index) => (
                <div className="card" key={index}>
                  <img src={card.image} alt={`Card-${index + 1} Icon`} />
                  <span>{card.title}</span>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
            <div className="text">
              <h2>Transform Your Creation Process</h2>
              <p>
                With a new approach to ordering content, you can now stop
                juggling multiple documents and meetings and start publishing
                content faster and on demand.
              </p>
              <h2>Activate Your Business Growth With RetinkContent</h2>
              <p>
                Save time and maintain your brand identity within your budget
                range within your budget range and access multiple content
                services like:
              </p>
            </div>
            <div className="media-cards">
              {mediaCards.map((mediaCard, index) => (
                <div className="media-card" key={index}>
                  <img src={mediaCard.image} alt={`Media-Card-${index + 1}`} />
                  <span>{mediaCard.title}</span>
                  <p>{mediaCard.description}</p>
                </div>
              ))}
            </div>
            <div className="sign-up">
              <h2>Sign Up for The BETA to See More</h2>
              <form>
                <input type="name" placeholder="Business Name" />
                <input type="name" placeholder="Email Address" />
                <div className="sign-up-buttons">
                  <button>Notify Me</button>
                  <button>Sign Up as a Freelance Partner</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
