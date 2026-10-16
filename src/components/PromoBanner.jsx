import React from "react";
import { Link } from "react-router-dom";
import "./PromoBanner.css";

function PromoBanner() {
  const hideBrokenImage = (e) => {
    e.currentTarget.style.visibility = "hidden";
  };

  return (
    <section className="promo-banner">
      <div className="promo-inner">
        <div className="promo-content">
          <h2 className="promo-title">
            Pure Herbal Care{" "}
            <br />
            For Your Everyday Wellness
          </h2>

          <p className="promo-text">
            Our products are made with carefully selected herbs{" "}
            <br />
            to support your health naturally.
          </p>

          <Link to="/collections" className="promo-btn">
            EXPLORE COLLECTION
          </Link>
        </div>

        <div className="promo-image">
          <img
            src="/images/promo-banner.png"
            alt="Herbal capsules, mortar and wooden spoon with fresh herbs"
            loading="lazy"
            onError={hideBrokenImage}
          />
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;