import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { createOrder } from "../api/woocommerce";
import "./CartPage.css"; 

function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "unaniherbalmedicine2@gmail.com",
    phone: "",
    address: "",
    city: "Lahore",
    postcode: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderResult, setOrderResult] = useState(null); 
  const [orderedItems, setOrderedItems] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Checkout page ke liye calculation (Cart items se)
  const totalItemsCount = items.reduce((sum, item) => sum + Number(item.qty || 1), 0);
  const deliveryCharges = totalItemsCount > 0 ? 250 + (totalItemsCount - 1) * 100 : 0;
  const subTotal = items.reduce((sum, item) => sum + (Number(item.price) * Number(item.qty || 1)), 0);
  const finalTotal = subTotal + deliveryCharges;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Items ki copy save kar li (yehi invoice par items dikhata hai)
    const currentItems = [...items];
    setOrderedItems(currentItems); 

    const lineItems = currentItems.map((item) => ({
      product_id: parseInt(item.id, 10), 
      quantity: Number(item.qty || 1),
    }));

    const orderData = {
      payment_method: "cod",
      payment_method_title: "Cash on Delivery",
      status: "processing", 
      set_paid: false,
      billing: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        address_1: formData.address,
        city: formData.city,
        postcode: formData.postcode,
        country: "PK",
        phone: formData.phone,
      },
      shipping: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        address_1: formData.address,
        city: formData.city,
        postcode: formData.postcode,
        country: "PK",
      },
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Dynamic Shipping",
          total: deliveryCharges.toString(), 
        }
      ],
      line_items: lineItems,
    };

    const result = await createOrder(orderData);

    if (result && result.id) {
      setOrderResult(result); 
      clearCart(); 
    } else {
      alert("Order place karne mein masla aa raha hai. Dobara koshish karein.");
    }
    setIsSubmitting(false);
  };

  // JAB ORDER CONFIRM HO JAYE (INVOICE SCREEN)
  if (orderResult) {
    // Seedha orderedItems se hisab lagayein taake kabhi 0 na ho!
    const invItemsCount = orderedItems.reduce((sum, item) => sum + Number(item.qty || 1), 0);
    const invSubTotal = orderedItems.reduce((sum, item) => sum + (Number(item.price) * Number(item.qty || 1)), 0);
    const invDelivery = invItemsCount > 0 ? 250 + (invItemsCount - 1) * 100 : 0;
    const invFinalTotal = invSubTotal + invDelivery;

    return (
      <section className="ct" style={{ maxWidth: "700px", margin: "40px auto", padding: "30px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <h1 style={{ color: "green", fontSize: "28px", marginBottom: "10px" }}>Order Successful! 🎉</h1>
        </div>

        {/* Invoice Box */}
        <div style={{ border: "2px dashed #ddd", padding: "20px", borderRadius: "8px", backgroundColor: "#fafafa" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
            <div>
              <strong>Order ID:</strong> #{orderResult.id}
            </div>
            <div>
              <strong>Payment:</strong> Cash on Delivery
            </div>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <h3 style={{ fontSize: "16px", marginBottom: "8px", color: "#333" }}>Customer Details:</h3>
            <p style={{ margin: "3px 0", fontSize: "14px" }}><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
            <p style={{ margin: "3px 0", fontSize: "14px" }}><strong>Phone:</strong> {formData.phone}</p>
            <p style={{ margin: "3px 0", fontSize: "14px" }}><strong>Email:</strong> {formData.email}</p>
            <p style={{ margin: "3px 0", fontSize: "14px" }}><strong>Address:</strong> {formData.address}, {formData.city} ({formData.postcode})</p>
          </div>

          <h3 style={{ fontSize: "16px", marginBottom: "10px", color: "#333", borderTop: "1px solid #ddd", paddingTop: "12px" }}>Ordered Items:</h3>
          {orderedItems.map((item, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px" }}>
              <span>{item.name} (x{item.qty})</span>
              <strong>Rs.{(Number(item.price) * Number(item.qty)).toLocaleString()}</strong>
            </div>
          ))}

          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px", color: "#555", borderTop: "1px solid #eee", paddingTop: "8px" }}>
            <span>Delivery Charges:</span>
            <strong>Rs.{invDelivery.toLocaleString()}</strong>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", marginTop: "12px", borderTop: "1px solid #ddd", paddingTop: "10px" }}>
            <strong>Total Amount:</strong>
            <strong style={{ color: "green" }}>Rs.{invFinalTotal.toLocaleString()}</strong>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link to="/" className="ct-btn" style={{ padding: "12px 30px", backgroundColor: "#2e7d32", color: "#fff", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}>
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="ct ct-empty">
        <h1>Your cart is empty</h1>
        <Link to="/collections" className="ct-btn">Start Shopping</Link>
      </section>
    );
  }

  return (
    <section className="ct" style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ marginBottom: "30px", textAlign: "center" }}>Secure Checkout</h1>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        
        {/* Order Summary */}
        <div style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "10px" }}>
          <h2 style={{ marginBottom: "15px" }}>Order Summary</h2>
          {items.map((item) => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <span>{item.name} (x{item.qty})</span>
              <strong>Rs.{(Number(item.price) * Number(item.qty)).toLocaleString()}</strong>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", color: "#555" }}>
            <span>Delivery Charges ({totalItemsCount} item{totalItemsCount > 1 ? 's' : ''}):</span>
            <strong>Rs.{deliveryCharges.toLocaleString()}</strong>
          </div>
          <hr style={{ margin: "15px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.2rem" }}>
            <strong>Total Amount:</strong>
            <strong>Rs.{finalTotal.toLocaleString()}</strong>
          </div>
        </div>

        {/* Checkout Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <h2 style={{ marginBottom: "10px" }}>Shipping Details</h2>
          
          <div style={{ display: "flex", gap: "15px" }}>
            <input required type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
            <input required type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>
          
          <input required type="email" name="email" placeholder="Email Address (For order receipt)" value={formData.email} onChange={handleInputChange} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          
          <input required type="tel" name="phone" placeholder="Phone Number (e.g. 03001234567)" onChange={handleInputChange} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          
          <input required type="text" name="address" placeholder="Complete Delivery Address" onChange={handleInputChange} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          
          <div style={{ display: "flex", gap: "15px" }}>
            <input required type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
            <input required type="text" name="postcode" placeholder="Postal Code (e.g. 54000)" onChange={handleInputChange} style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>

          <button 
            type="submit" 
            className="ct-btn" 
            disabled={isSubmitting}
            style={{ marginTop: "20px", padding: "15px", fontSize: "1.1rem", opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? "not-allowed" : "pointer", border: "none" }}
          >
            {isSubmitting ? "Processing..." : "Place Order (Cash on Delivery)"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default CheckoutPage;