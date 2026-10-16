import React from "react";
import "./WhyTrust.css";

const items = [
  {
    no: "01",
    title: "Natural quality",
    text: "Carefully selected herbs, sourced and processed with strict quality checks.",
  },
  {
    no: "02",
    title: "Fast delivery",
    text: "Your order is packed fresh and delivered quickly to your doorstep.",
  },
  {
    no: "03",
    title: "Fair pricing",
    text: "Honest prices on every product, with no hidden charges.",
  },
  {
    no: "04",
    title: "Easy WhatsApp support",
    text: "Ask questions or track your order directly on WhatsApp anytime.",
  },
];

function WhyTrust() {
  return (
    <section className="why-trust">
      <div className="wt-inner">
        <h2 className="wt-title">Why customers trust Ateeq Herbal</h2>

        <p className="wt-subtitle">
          Pure herbal products, honest sourcing and a promise to look after
          every customer like family.
        </p>

        <div className="wt-grid">
          {items.map((item) => (
            <article className="wt-card" key={item.no}>
              <span className="wt-number">{item.no}</span>
              <h3 className="wt-card-title">{item.title}</h3>
              <p className="wt-card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyTrust;