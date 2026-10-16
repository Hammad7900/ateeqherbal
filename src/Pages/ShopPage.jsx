import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api/woocommerce"; // API file ka sahi rasta dein

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        // API se saare products la rahe hain
        const allProducts = await fetchProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error("Products load karne mein masla aya:", error);
      }
      setLoading(false);
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "100px", fontSize: "20px", color: "#555" }}>
        Loading Products...
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#2E5C31", fontSize: "32px" }}>
        Shop All Products
      </h1>

      {products.length === 0 ? (
        <div style={{ textAlign: "center", fontSize: "18px", color: "#777", padding: "50px" }}>
          Abhi tak koi product available nahi hai.
        </div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
          {products.map((product) => (
            <div 
              key={product.id} 
              style={{ 
                width: "300px", 
                border: "1px solid #eee", 
                borderRadius: "12px", 
                overflow: "hidden", 
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0px)"}
            >
              {/* Product Image */}
              <img 
                src={product.image || "https://via.placeholder.com/300x250?text=No+Image"} 
                alt={product.name} 
                style={{ width: "100%", height: "250px", objectFit: "cover" }} 
              />
              
              {/* Product Info */}
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 style={{ margin: "0 0 10px 0", fontSize: "18px", color: "#333", lineHeight: "1.4", flexGrow: 1 }}>
                  {product.name}
                </h3>
                <h4 style={{ margin: "0 0 20px 0", color: "#27ae60", fontSize: "22px", fontWeight: "bold" }}>
                  Rs. {product.price?.toLocaleString()}
                </h4>
                
                {/* View Product Button */}
                <Link 
                  to={`/product/${product.id}`} 
                  style={{ 
                    display: "block", 
                    textAlign: "center", 
                    background: "#2E5C31", 
                    color: "#fff", 
                    padding: "12px", 
                    textDecoration: "none", 
                    borderRadius: "6px", 
                    fontWeight: "bold",
                    transition: "background 0.3s ease"
                  }}
                  onMouseOver={(e) => e.target.style.background = "#1f3d21"}
                  onMouseOut={(e) => e.target.style.background = "#2E5C31"}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;