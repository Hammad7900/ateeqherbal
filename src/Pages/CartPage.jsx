import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartPage.css";

const FREE_SHIPPING_MIN = 499;

function CartPage() {
  const { items, updateQty, removeFromCart, clearCart, cartCount, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <section className="ct ct-empty">
        <h1>Your cart is empty</h1>
        <p>Looks like you haven't added any products yet.</p>
        <Link to="/collections" className="ct-btn">
          Start Shopping
        </Link>
      </section>
    );
  }

  const remaining = FREE_SHIPPING_MIN - cartTotal;

  return (
    <section className="ct">
      <div className="ct-head">
        <h1>Shopping Cart ({cartCount})</h1>
        <button type="button" className="ct-clear" onClick={clearCart}>
          Clear Cart
        </button>
      </div>

      <div className="ct-grid">
        {/* ---------- Items ---------- */}
        <ul className="ct-list">
          {items.map((item) => (
            <li className="ct-item" key={item.id}>
              <div className="ct-thumb">
                {item.image && <img src={item.image} alt={item.name} />}
              </div>

              <div className="ct-info">
                <h3>{item.name}</h3>
                <p className="ct-price">Rs.{item.price.toLocaleString()}</p>

                <div className="ct-qty">
                  <button
                    type="button"
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button
                    type="button"
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="ct-side">
                <p className="ct-line">
                  Rs.{(item.price * item.qty).toLocaleString()}
                </p>
                <button
                  type="button"
                  className="ct-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* ---------- Summary ---------- */}
        <aside className="ct-summary">
          <h2>Order Summary</h2>

          <div className="ct-row">
            <span>Items</span>
            <span>{cartCount}</span>
          </div>
          <div className="ct-row ct-total">
            <span>Total</span>
            <span>Rs.{cartTotal.toLocaleString()}</span>
          </div>

          <p className="ct-ship">
            {remaining > 0
              ? `Add Rs.${remaining.toLocaleString()} more to qualify for free shipping`
              : "✓ You qualify for free shipping"}
          </p>

          {/* WhatsApp ki jagah Direct Checkout ka link */}
          <Link to="/checkout" className="ct-btn">
            Proceed to Checkout
          </Link>

          <Link to="/collections" className="ct-continue">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </section>
  );
}

export default CartPage;