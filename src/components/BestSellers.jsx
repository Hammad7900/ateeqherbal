import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { fetchBestSellers } from "../api/woocommerce"; 
import "./BestSellers.css";

const Stars = ({ rating }) => (
  <span
    className="bs-stars"
    style={{ "--fill": `${(rating / 5) * 100}%` }}
    role="img"
    aria-label={`${rating} out of 5 stars`}
  >
    ★★★★★
  </span>
);

const Arrow = ({ dir }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="bs-arrow-icon">
    <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
  </svg>
);

function BestSellers() {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchBestSellers();
        setProducts(data);
      } catch (error) {
        console.error("Best sellers fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateButtons();
    window.addEventListener("resize", updateButtons);
    return () => window.removeEventListener("resize", updateButtons);
  }, [updateButtons, products]);

  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".bs-card");
    const gap = 18;
    const step = card ? card.offsetWidth + gap : el.clientWidth / 2;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const hideBrokenImage = (e) => {
    e.currentTarget.style.visibility = "hidden";
  };

  if (loading) {
    return <div style={{ textAlign: "center", padding: "50px 0" }}>Loading Best Sellers...</div>;
  }

  if (products.length === 0) {
    return null; 
  }

  return (
    <section className="best-sellers">
      <div className="bs-heading">
        <h2 className="bs-title">BEST SELLERS</h2>
        <span className="bs-line" />
      </div>

      <div className="bs-wrap">
        <button
          type="button"
          className="bs-nav bs-prev"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Previous products"
        >
          <Arrow dir="left" />
        </button>

        <div className="bs-track" ref={trackRef} onScroll={updateButtons}>
          {products.map((item) => {
            // Updated image extraction based on formatProduct in woocommerce.js
            const imageSrc = item.image ? item.image : ""; 
            const rating = item.rating || 5; 
            const reviews = item.reviews || 0;
            const price = item.price ? Number(item.price).toLocaleString() : "0";

            return (
              <article className="bs-card" key={item.id}>
                <Link to={`/product/${item.id}`} className="bs-image">
                  {item.featured && ( 
                    <span className="bs-badge is-new">Featured</span>
                  )}
                  <img
                    src={imageSrc}
                    alt={item.name}
                    loading="lazy"
                    onError={hideBrokenImage}
                  />
                </Link>

                <div className="bs-info">
                  <h3 className="bs-name">
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                  </h3>

                  <div className="bs-rating">
                    <Stars rating={rating} />
                    <span className="bs-reviews">({reviews})</span>
                  </div>

                  <p className="bs-price">Rs.{price}</p>
                </div>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className="bs-nav bs-next"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Next products"
        >
          <Arrow dir="right" />
        </button>
      </div>
    </section>
  );
}

export default BestSellers;