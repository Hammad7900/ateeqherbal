import React from "react";
import { Link } from "react-router-dom";
import "./Aboutpage.css";

const values = [
  {
    title: "Pure & Natural",
    text: "We focus on herbs and natural ingredients, chosen for their quality and traditional use in everyday wellness.",
  },
  {
    title: "Carefully Selected",
    text: "Every product starts with carefully selected herbs, so you can feel confident about what goes into your daily routine.",
  },
  {
    title: "Made with Care",
    text: "From preparation to packing, we pay attention to the small details so each product reaches you fresh and well kept.",
  },
];

function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <p className="about-eyebrow">ABOUT US</p>
        <h1 className="about-title">
          Natural Care,
          <br />
          Rooted in Tradition
        </h1>
        <p className="about-lead">
          Ateeqherbal brings pure herbal products to your home, so you can
          support your health the natural way.
        </p>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="about-story-text">
          <h2>Our Story</h2>
          <p>
            Ateeqherbal was created with a simple idea: everyday wellness
            should be natural, honest and easy to follow. We bring together
            time-tested herbs and simple preparations that people have trusted
            for generations.
          </p>
          <p>
            Our range includes supplements, herbal powders, essential oils,
            herbal teas and personal care products. Along the way, we also
            share courses, books and articles so you can learn how to use
            herbs with confidence.
          </p>
        </div>

        <div className="about-story-card">
          <span className="about-quote-mark">“</span>
          <p>Pure herbal care for your everyday wellness.</p>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <h2 className="about-section-title">What We Stand For</h2>
        <div className="about-values-grid">
          {values.map((item) => (
            <article className="about-value-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="about-cta">
        <h2>Ready to begin your herbal journey?</h2>
        <div className="about-cta-buttons">
          <Link to="/collections" className="about-btn">
            Shop Products
          </Link>
          <Link to="/#contact-footer" className="about-btn is-outline">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;