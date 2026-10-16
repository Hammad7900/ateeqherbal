import React from "react";
import { Link } from "react-router-dom";
import { products as allProducts } from "../data/products";
import "./Bestsellerspage.css";

// data/products.js se sirf bestSeller: true wale products
const products = allProducts.filter((p) => p.bestSeller);

function BestSellersPage() {
  return (
    <main className="bsl-page">
      <Link to="/" className="bsl-back">
        ← Back to Home
      </Link>

      <div className="bsl-heading">
        <h1 className="bsl-title">BEST SELLERS</h1>
        <span className="bsl-line" />
      </div>

      <div className="bsl-grid">
        {products.map((item) => (
          <article className="bsl-card" key={item.id}>
            {/* poora card click karne par single product page khulega */}
            <Link to={`/product/${item.id}`} className="bsl-link">
              <div className="bsl-image">
                {item.badge && (
                  <span
                    className={`bsl-badge ${item.badge === "New" ? "is-new" : ""}`}
                  >
                    {item.badge}
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.visibility = "hidden")}
                />
              </div>

              <div className="bsl-info">
                <h2 className="bsl-name">{item.name}</h2>

                <div className="bsl-rating">
                  <span
                    className="bsl-stars"
                    style={{ "--fill": `${(item.rating / 5) * 100}%` }}
                    role="img"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    ★★★★★
                  </span>
                  <span className="bsl-reviews">({item.reviews})</span>
                </div>

                <p className="bsl-price">Rs.{item.price.toLocaleString()}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

export default BestSellersPage;