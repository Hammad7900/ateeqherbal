import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const accountRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  // account menu ke bahar click karne par band ho jaye
  useEffect(() => {
    if (!accountOpen) return;
    const onClickOutside = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [accountOpen]);

  const handleLogout = () => {
    logout();
    setAccountOpen(false);
    closeMenu();
    navigate("/");
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get("search")?.toString().trim();

    if (query) {
      window.location.hash = `search=${encodeURIComponent(query)}`;
      setSearchOpen(false);
    }
  };

  return (
    <header className="ah-sticky-header">
      {/* Moving Top Announcement Ticker Bar (Sticky + Smooth Scrolling) */}
      <div className="ah-topbar">
        <div className="ah-ticker-track">
          <div className="ah-ticker-group">
            <span className="ah-ticker-item">
              🌿 <strong>Ateeq Herbal</strong> — 100% Khalis & Original Unani Dawakhana
            </span>
            <span className="ah-ticker-dot">✦</span>
            <span className="ah-ticker-item">
              🚚 Fast Cash on Delivery Available All Over Pakistan
            </span>
            <span className="ah-ticker-dot">✦</span>
            <span className="ah-ticker-item">
              ✨ Prepared with Rare Herbs, Pure Saffron, Pearl & Amber
            </span>
            <span className="ah-ticker-dot">✦</span>
            <span className="ah-ticker-item">
              📞 Free Hakeem Consultation on WhatsApp: <strong>+92 301 6215826</strong>
            </span>
            <span className="ah-ticker-dot">✦</span>
          </div>

          {/* Seamless loop ke liye duplicate group */}
          <div className="ah-ticker-group" aria-hidden="true">
            <span className="ah-ticker-item">
              🌿 <strong>Ateeq Herbal</strong> — 100% Khalis & Original Unani Dawakhana
            </span>
            <span className="ah-ticker-dot">✦</span>
            <span className="ah-ticker-item">
              🚚 Fast Cash on Delivery Available All Over Pakistan
            </span>
            <span className="ah-ticker-dot">✦</span>
            <span className="ah-ticker-item">
              ✨ Prepared with Rare Herbs, Pure Saffron, Pearl & Amber
            </span>
            <span className="ah-ticker-dot">✦</span>
            <span className="ah-ticker-item">
              📞 Free Hakeem Consultation on WhatsApp: <strong>+92 301 6215826</strong>
            </span>
            <span className="ah-ticker-dot">✦</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="ah-navbar" aria-label="Main navigation">
        <div className="ah-navbar-inner">
          {/* Brand Logo */}
          <Link
            to="/"
            className="ah-brand"
            aria-label="Ateeqherbal home"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="Ateeqherbal Natural Care"
              className="ah-logo"
            />
          </Link>

          {/* Navigation Links */}
          <div className={`ah-nav-links ${menuOpen ? "ah-nav-open" : ""}`}>
            <Link
              to="/"
              className={`ah-nav-link ${pathname === "/" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              to="/shop"
              className={`ah-nav-link ${pathname === "/shop" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Shop All
            </Link>

            <div className="ah-nav-item">
              <Link to="/collections" className="ah-nav-link" onClick={closeMenu}>
                Collections
                <FaChevronDown className="ah-chevron" />
              </Link>

              <div className="ah-dropdown">
                <Link to="/courses" onClick={closeMenu}>
                  Courses
                </Link>
                <Link to="/category/digestive-health" onClick={closeMenu}>
                  Digestive Health
                </Link>
                <Link to="/category/heart-health" onClick={closeMenu}>
                  Heart Health
                </Link>
                <Link to="/category/liver-care" onClick={closeMenu}>
                  Liver Care
                </Link>
                <Link to="/category/mens-health" onClick={closeMenu}>
                  Men's Health
                </Link>
                <Link to="/category/womens-health" onClick={closeMenu}>
                  Women's Health
                </Link>
              </div>
            </div>

            <Link
              to="/about"
              className={`ah-nav-link ${pathname === "/about" ? "active" : ""}`}
              onClick={closeMenu}
            >
              About Us
            </Link>

            <Link to="/blog" className="ah-nav-link" onClick={closeMenu}>
              Blog
            </Link>

            <Link
              to="/courses"
              className={`ah-nav-link ${pathname === "/courses" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Courses
            </Link>

            <Link
              to="/contact"
              className={`ah-nav-link ${pathname === "/contact" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="ah-nav-actions">
            <button
              type="button"
              className="ah-icon-btn"
              aria-label="Search products"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              <FaSearch />
            </button>

            {user ? (
              <div className="ah-account" ref={accountRef}>
                <button
                  type="button"
                  className="ah-icon-btn"
                  aria-label="My account"
                  aria-expanded={accountOpen}
                  onClick={() => setAccountOpen((prev) => !prev)}
                >
                  <FaUser />
                </button>

                {accountOpen && (
                  <div className="ah-account-menu" role="menu">
                    <p className="ah-account-name">{user.name}</p>
                    <p className="ah-account-email">{user.email}</p>
                    <button type="button" onClick={handleLogout} role="menuitem">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="ah-icon-btn" aria-label="Login">
                <FaUser />
              </Link>
            )}

            <Link to="/cart" className="ah-icon-btn" aria-label="Shopping bag">
              <FaShoppingBag />
              <span className="ah-cart-count">{cartCount}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="ah-menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Search Panel */}
        <div
          className={`ah-search-panel ${searchOpen ? "ah-search-visible" : ""}`}
        >
          <form className="ah-search-form" onSubmit={handleSearch}>
            <FaSearch aria-hidden="true" />

            <input
              type="search"
              name="search"
              placeholder="Search natural and herbal products..."
              aria-label="Search products"
            />

            <button type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;