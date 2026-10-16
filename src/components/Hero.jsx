import React from "react";
import { Link } from "react-router-dom";
import heroBannerImage from "../assets/hero-bg.jpeg";
import "./Hero.css";

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M10 21c5.5-2.5.8-6.4 3-10" />
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
  </svg>
);

const FlaskIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path d="M18 6h12" />
    <path d="M20 6v14L8 38c-1.5 3 .3 5 3 5h26c2.7 0 4.5-2 3-5L28 20V6" />
    <path d="M14 31h20" />
    <path d="M12 38h24" />
  </svg>
);

const RabbitIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path d="M41 24C41 21 38 18 34 18C30 18 27 21 26 25C22 26 16 29 14 35C12 38 12 42 15 42H36C38 42 39 40 37 38C35 36 36 33 37 30C39 29 41 27 41 24Z" />
    <path d="M28 19C25 12 25 5 28 5C31 5 32 12 32 18" />
    <path d="M33 18.5C34 12 37 7 39.5 8.5C41.5 10 38 15 36 20" />
    <path d="M13 33C9 31 6 34 8 38C9 40 12 40 14 40" />
    <path d="M19 41C17 36 21 32 26 34C29 36 28 40 27 42" />
    <circle cx="36" cy="23" r="0.8" />
  </svg>
);

const DropIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path d="M24 5C17 16 11 23 11 31a13 13 0 0 0 26 0c0-8-6-15-13-26z" />
    <path d="M17 32c0 4 3 7 7 7" />
  </svg>
);

const benefits = [
  {
    icon: <LeafIcon />,
    title: "Natural Ingredients",
    description: "Safe & toxin-free",
  },
  {
    icon: <FlaskIcon />,
    title: "Clinically Tested",
    description: "Dermatologically proven",
  },
  {
    icon: <RabbitIcon />,
    title: "Cruelty Free",
    description: "We never test on animals",
  },
  {
    icon: <DropIcon />,
    title: "For All Skin Types",
    description: "Gentle & effective care",
  },
];

function Hero() {
  return (
    <section className="herbal-hero" id="home">
      <div className="hero-main">
        {/* Left Side: Clean Brand Text & Modern Button */}
        <div className="hero-copy">
          <div className="hero-brand-badge">🌿 ATEEQ HERBAL</div>

          <h1>
            Nature's Goodness <br />
            <span>For a Better You.</span>
          </h1>

          <p className="hero-description">
            100% Natural — Saffron | Pearl | Amber | Rare Herbs. <br />
            Pure Unani & herbal care crafted for your everyday wellness.
          </p>

          <Link to="/shop" className="hero-shop-btn">
            SHOP NOW →
          </Link>
        </div>

        {/* Right Side: Smart Cropped Product Showcase */}
        <div className="hero-product">
          <div className="hero-product-frame">
            <img
              src={heroBannerImage}
              alt="Ateeq Herbal Products"
              className="hero-cropped-bottles"
            />
          </div>
        </div>
      </div>

      {/* Bottom Benefits Bar */}
      <div className="hero-benefits">
        {benefits.map((benefit, index) => (
          <div className="benefit-item" key={index}>
            <div className="benefit-icon">{benefit.icon}</div>
            <div className="benefit-text">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;