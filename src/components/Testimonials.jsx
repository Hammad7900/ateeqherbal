import React from "react";
import "./Testimonials.css";

const reviews = [
  {
    name: "Ayesha Khan",
    city: "Lahore",
    rating: 5,
    text: "Akseer-e-Qalb (Jawahar Mohra) walid sahab ke liye mangwayi thi, dil ki ghabrahat aur kamzori mein bohat shifa mili. Packing bhi saaf thi aur delivery time par aayi.",
  },
  {
    name: "Bilal Ahmed",
    city: "Karachi",
    rating: 5,
    text: "Dawa-e-Jinsing ka istemal shuru kiya hai, jismani thakawat aur pathon ki kamzori mein bohat behtareen asar raha. Quality mujhe dosri jagah se behtar lagi, zaroor dobara order karunga.",
  },
  {
    name: "Usman Ali",
    city: "Islamabad",
    rating: 5,
    text: "Hub-e-Nafay aur Ateeq Herbal ki dawayein waqai 100% khalis aur asardar hain. WhatsApp par support ne foran jawab diya aur behtareen rehnumai ki.",
  },
];

const Stars = ({ rating }) => (
  <div className="tm-stars" role="img" aria-label={`${rating} out of 5 stars`}>
    {"★".repeat(rating)}
    <span className="tm-stars-off">{"★".repeat(5 - rating)}</span>
  </div>
);

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="tm-inner">
        <h2 className="tm-title">What customers say</h2>
        <span className="tm-line" />

        <div className="tm-grid">
          {reviews.map((item) => (
            <article className="tm-card" key={item.name}>
              <span className="tm-quote" aria-hidden="true">
                “
              </span>

              <Stars rating={item.rating} />

              <p className="tm-text">{item.text}</p>

              <div className="tm-author">
                <span className="tm-avatar">{item.name.charAt(0)}</span>
                <div>
                  <p className="tm-name">{item.name}</p>
                  <p className="tm-city">{item.city}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;