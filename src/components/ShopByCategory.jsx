import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../api/woocommerce";
import "./ShopByCategory.css";

const TitleLeaf = ({ flip }) => (
  <svg
    className={`title-leaf ${flip ? "flip" : ""}`}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M4 20C4 10 10 4 21 4c0 10-6 16-15 16" />
    <path d="M4 20L15 9" />
  </svg>
);

function ShopByCategory() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Component load hote hi WooCommerce se Categories mangwana
  useEffect(() => {
    const loadCategories = async () => {
      setLoading(true);
      try {
        const data = await fetchCategories();
        // "Uncategorized" ko hide karne ke liye filter
        const validCategories = data.filter(
          (cat) => cat.slug !== "uncategorized" && cat.name !== "Uncategorized"
        );
        setCategories(validCategories);
      } catch (error) {
        console.error("Error loading categories:", error);
      } finally {
        setLoading(false);
      }
    };
    loadCategories();
  }, []);

  const hideBrokenImage = (e) => {
    e.currentTarget.style.visibility = "hidden";
  };

  // Jab tak data aa raha hai
  if (loading) {
    return <div style={{ textAlign: "center", padding: "50px 0" }}>Loading Categories...</div>;
  }

  // Agar koi category nahi mili
  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="shop-category">
      <h2 className="shop-category-title">
        <TitleLeaf />
        <span>SHOP BY CATEGORY</span>
        <TitleLeaf flip />
      </h2>

      <div className="shop-category-grid">
        {categories.map((item) => {
          // WooCommerce ki category image nikalna
          const imageSrc = item.image && item.image.src ? item.image.src : "";

          return (
            <Link to={`/category/${item.slug}`} className="category-card" key={item.id}>
              <div className="category-image">
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt={item.name}
                    loading="lazy"
                    onError={hideBrokenImage}
                  />
                )}
              </div>

              <div className="category-info">
                <span className="category-name">{item.name}</span>
                <span className="category-link">
                  Shop Now <span className="category-arrow">→</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default ShopByCategory;