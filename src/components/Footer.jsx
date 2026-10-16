import React from "react";
import "./Footer.css";

const WHATSAPP_NUMBER = "923016215826";
const EMAIL = "unaniherbalmedicine2@gmail.com";

function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="ah-grand-footer" id="contact-footer">
        {/* 1. CLEAN LAYERED WAVY TOP */}
        <div className="ah-wave-wrapper">
          <svg
            className="ah-wave-svg"
            viewBox="0 0 1440 110"
            preserveAspectRatio="none"
          >
            <path
              fill="#c5a059"
              fillOpacity="0.35"
              d="M0,35 C360,115 720,-15 1080,65 C1260,95 1380,45 1440,20 L1440,110 L0,110 Z"
            />
            <path
              fill="#132a1c"
              d="M0,65 C420,5 840,115 1260,35 C1350,20 1400,45 1440,55 L1440,110 L0,110 Z"
            />
          </svg>
        </div>

        {/* 2. MAIN FOOTER BODY */}
        <div className="ah-footer-main">
          <div className="ah-footer-container">
            
            {/* GRAND TOP CTA BANNER */}
            <div className="ah-consult-banner">
              <div className="ah-consult-text">
                <span className="ah-consult-tag">✦ FREE HERBAL ADVICE</span>
                <h3>Kisi Marz ya Dawa ke Bare Mein Mashwara Chahiye?</h3>
                <p>
                  Hamare mahir Hakeem se WhatsApp par muft rabta karein aur apne
                  masle ke mutabiq 100% khalis Unani nuskha janein.
                </p>
              </div>
              <div className="ah-consult-action">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Assalam-o-Alaikum%20Ateeq%20Herbal!%20Mujhe%20herbal%20dawa%20ke%20bare%20mein%20mashwara%20chahiye.`}
                  target="_blank"
                  rel="noreferrer"
                  className="ah-gold-btn"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>

            {/* THREE COLUMNS SECTION */}
            <div className="ah-cols-wrap">
              
              {/* Column 1: Brand & Trust Badges */}
              <div className="ah-col ah-col-brand">
                <div className="ah-gold-pill">🌿 100% KHALIS UNANI DAWAKHANA</div>
                <h2 className="ah-brand-title">Ateeq Herbal</h2>
                <p className="ah-brand-desc">
                  Pure herbal care for everyday wellness. Prepared with rare
                  herbs, original saffron, pearl, and natural extracts for your
                  healthy & energetic life.
                </p>
                <div className="ah-trust-badges">
                  <span className="ah-badge-item">✓ 100% Natural</span>
                  <span className="ah-badge-item">✓ Lab Tested</span>
                  <span className="ah-badge-item">✓ Zero Side Effects</span>
                </div>
              </div>

              {/* Column 2: Active Navigation & Actions */}
              <div className="ah-col ah-col-links">
                <h3 className="ah-col-heading">Active Links</h3>
                <ul className="ah-link-list">
                  <li>
                    <a href="#home" onClick={scrollToTop}>
                      <span className="ah-arrow">›</span> Home (Top Banner)
                    </a>
                  </li>
                  <li>
                    <a href="#shop">
                      <span className="ah-arrow">›</span> All Herbal Products
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Assalam-o-Alaikum!%20Mujhe%20Ateeq%20Herbal%20ki%20products%20order%20karni%20hain.`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="ah-arrow">›</span> Order via WhatsApp
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: High-Contrast Contact Cards (Call option removed) */}
              <div className="ah-col ah-col-contact">
                <h3 className="ah-col-heading">Direct Contact</h3>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="ah-contact-card"
                >
                  <span className="ah-card-icon">💬</span>
                  <span className="ah-card-info">
                    <small>WhatsApp Support (24/7)</small>
                    <strong>+92 301 6215826</strong>
                  </span>
                </a>

                <a href={`mailto:${EMAIL}`} className="ah-contact-card">
                  <span className="ah-card-icon">✉</span>
                  <span className="ah-card-info">
                    <small>Official Email Support</small>
                    <strong>{EMAIL}</strong>
                  </span>
                </a>

                <div className="ah-delivery-note">
                  🚚 <strong>All Pakistan Cash on Delivery</strong> Available!
                </div>
              </div>

            </div>

            {/* BOTTOM COPYRIGHT & BACK TO TOP */}
            <div className="ah-footer-bottom">
              <p className="ah-copyright">
                © {new Date().getFullYear()} <strong>Ateeq Herbal</strong>. All
                rights reserved.
              </p>
              <a
                href="#home"
                onClick={scrollToTop}
                className="ah-top-btn"
              >
                Back to Top ↑
              </a>
            </div>

          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className="wa-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.6c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1.1 1.1-3.9-.3-.4A10.6 10.6 0 1 1 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5.1.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z" />
        </svg>
      </a>
    </>
  );
}

export default Footer;