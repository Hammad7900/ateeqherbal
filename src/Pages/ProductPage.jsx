import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProducts, fetchProductVariations } from "../api/woocommerce";
import { useCart } from "../context/CartContext"; 

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); 

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");
  
  const [activeAccordion, setActiveAccordion] = useState("description");

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      
      const products = await fetchProducts();
      let currentProduct = products.find((p) => p.id === id);
      
      if (currentProduct) {
        const variationsData = await fetchProductVariations(currentProduct.id);

        if (currentProduct.sizes && currentProduct.sizes.length > 0 && variationsData.length > 0) {
          const updatedSizes = currentProduct.sizes.map((sizeObj) => {
            const matchedVar = variationsData.find((v) => 
              v.attributes.some((attr) => attr.option === sizeObj.label)
            );
            return {
              label: sizeObj.label,
              price: matchedVar ? Number(matchedVar.price || 0) : sizeObj.price,
              variationId: matchedVar ? matchedVar.id : null
            };
          });
          currentProduct.sizes = updatedSizes;
        }

        setProduct(currentProduct);
        setMainImage(currentProduct.image);
        
        if (currentProduct.sizes && currentProduct.sizes.length > 0) {
          setSelectedVariant(currentProduct.sizes[0]);
        }
      }
      setLoading(false);
    };
    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart({
      id: `${product.id}-${selectedVariant ? selectedVariant.label : 'default'}`,
      productId: product.id,
      name: `${product.name} ${selectedVariant ? `(${selectedVariant.label})` : ''}`,
      price: selectedVariant ? selectedVariant.price : product.price,
      image: mainImage || product.image,
      qty: quantity,
      size: selectedVariant ? selectedVariant.label : null,
      variationId: selectedVariant ? selectedVariant.variationId : null
    });
    alert("Item added to cart!");
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout"); 
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  if (loading) return <div style={{ textAlign: "center", padding: "100px", fontSize: "20px" }}>Loading Product...</div>;
  if (!product) return <div style={{ textAlign: "center", padding: "100px", fontSize: "20px" }}>Product not found!</div>;

  return (
    <div style={{ maxWidth: "1100px", margin: "40px auto", padding: "0 20px", display: "flex", flexWrap: "wrap", gap: "40px", fontFamily: "sans-serif" }}>
      
      {/* Product Image & Gallery Section */}
      <div style={{ flex: "1 1 400px" }}>
        <img 
          src={mainImage || product.image} 
          alt={product.name} 
          style={{ width: "100%", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", objectFit: "cover", transition: "0.3s" }} 
        />
        
        {product.images && product.images.length > 1 && (
          <div style={{ display: "flex", gap: "10px", marginTop: "15px", flexWrap: "wrap" }}>
            {product.images.map((imgUrl, index) => (
              <img 
                key={index}
                src={imgUrl}
                alt={`Gallery ${index}`}
                onClick={() => setMainImage(imgUrl)}
                style={{
                  width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px", cursor: "pointer",
                  border: mainImage === imgUrl ? "2px solid #27ae60" : "1px solid #ddd",
                  opacity: mainImage === imgUrl ? 1 : 0.6, transition: "0.3s"
                }}
                onMouseOver={(e) => { e.target.style.opacity = 1; }}
                onMouseOut={(e) => { if (mainImage !== imgUrl) e.target.style.opacity = 0.6; }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info Section */}
      <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <h1 style={{ fontSize: "28px", color: "#333", margin: 0 }}>{product.name}</h1>
        
        <h2 style={{ fontSize: "24px", color: "#27ae60", margin: 0, fontWeight: "bold" }}>
          Rs. {selectedVariant ? selectedVariant.price.toLocaleString() : product.price.toLocaleString()}
        </h2>

        {/* Variations Buttons */}
        {product.sizes && product.sizes.length > 0 && (
          <div>
            <h4 style={{ margin: "0 0 10px 0", color: "#555" }}>Select Weight / Size:</h4>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {product.sizes.map((variant, index) => {
                const isSelected = selectedVariant?.label === variant.label;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedVariant(variant)}
                    style={{
                      padding: "10px 20px",
                      border: isSelected ? "2px solid #27ae60" : "1px solid #ccc",
                      backgroundColor: isSelected ? "#27ae60" : "#fff",
                      color: isSelected ? "#fff" : "#333",
                      borderRadius: "5px", cursor: "pointer", fontWeight: isSelected ? "bold" : "normal", transition: "all 0.3s ease",
                    }}
                  >
                    {variant.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Quantity */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px", marginTop: "10px" }}>
          <span style={{ fontWeight: "bold", color: "#555" }}>Quantity:</span>
          <div style={{ display: "flex", border: "1px solid #ccc", borderRadius: "5px", overflow: "hidden" }}>
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} style={{ padding: "10px 15px", background: "#eee", border: "none", cursor: "pointer", fontSize: "16px" }}>-</button>
            <span style={{ padding: "10px 20px", background: "#fff", display: "flex", alignItems: "center", fontWeight: "bold" }}>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} style={{ padding: "10px 15px", background: "#eee", border: "none", cursor: "pointer", fontSize: "16px" }}>+</button>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
          <button onClick={handleAddToCart} style={{ flex: 1, padding: "15px", background: "#333", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}>Add to Cart</button>
          <button onClick={handleBuyNow} style={{ flex: 1, padding: "15px", background: "#27ae60", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}>Order Now (Checkout)</button>
        </div>

        {/* ACCORDION TABS (Professional Setup) */}
        <div style={{ marginTop: "30px", borderTop: "2px solid #eee", paddingTop: "10px" }}>
          
          {/* Description Button */}
          {product.description && (
            <div style={{ borderBottom: "1px solid #eee" }}>
              <button 
                onClick={() => toggleAccordion("description")}
                style={{ width: "100%", background: "none", border: "none", padding: "15px 0", textAlign: "left", fontSize: "18px", fontWeight: "bold", color: "#333", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                Description 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: activeAccordion === "description" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {activeAccordion === "description" && (
                <div dangerouslySetInnerHTML={{ __html: product.description }} style={{ color: "#555", lineHeight: "1.6", paddingBottom: "15px" }} />
              )}
            </div>
          )}

          {/* Ingredients Button */}
          {product.ingredients && (
            <div style={{ borderBottom: "1px solid #eee" }}>
              <button 
                onClick={() => toggleAccordion("ingredients")}
                style={{ width: "100%", background: "none", border: "none", padding: "15px 0", textAlign: "left", fontSize: "18px", fontWeight: "bold", color: "#333", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                Ingredients 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: activeAccordion === "ingredients" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {activeAccordion === "ingredients" && (
                <div style={{ color: "#555", lineHeight: "1.8", paddingBottom: "15px", whiteSpace: "pre-wrap" }}>
                  {product.ingredients}
                </div>
              )}
            </div>
          )}

          {/* How to Use Button */}
          {product.howToUse && (
            <div style={{ borderBottom: "1px solid #eee" }}>
              <button 
                onClick={() => toggleAccordion("howToUse")}
                style={{ width: "100%", background: "none", border: "none", padding: "15px 0", textAlign: "left", fontSize: "18px", fontWeight: "bold", color: "#333", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                How to Use 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: activeAccordion === "howToUse" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {activeAccordion === "howToUse" && (
                <div style={{ color: "#555", lineHeight: "1.8", paddingBottom: "15px", whiteSpace: "pre-wrap" }}>
                  {product.howToUse}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default ProductPage;