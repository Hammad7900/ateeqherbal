import React, { useState, useEffect } from "react";
import { FaShoppingBag, FaCheck } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "./AddToCartButton.css";

// Use: <AddToCartButton product={product} />
// product: { id, name, price (number), image }
const AddToCartButton = ({ product }) => {
  const { items, addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  // is product ki cart mein kitni quantity hai
  const inCart = items.find((i) => i.id === product.id)?.qty || 0;

  // 2 second baad "Added" message wapas normal ho jaye
  useEffect(() => {
    if (!justAdded) return;
    const timer = setTimeout(() => setJustAdded(false), 2000);
    return () => clearTimeout(timer);
  }, [justAdded]);

  const handleClick = (e) => {
    // agar card Link ke andar ho to page navigate na ho
    e.preventDefault();
    e.stopPropagation();

    addToCart({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.image,
    });
    setJustAdded(true);
  };

  return (
    <div className="atc-wrap">
      <button
        type="button"
        className={`atc-btn ${justAdded ? "atc-added" : ""}`}
        onClick={handleClick}
      >
        {justAdded ? (
          <>
            <FaCheck /> Added to Cart
          </>
        ) : (
          <>
            <FaShoppingBag /> Add to Cart
          </>
        )}
      </button>

      {inCart > 0 && (
        <p className="atc-note" aria-live="polite">
          {inCart} in your cart
        </p>
      )}
    </div>
  );
};

export default AddToCartButton;