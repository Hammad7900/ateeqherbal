import React from "react";
import { Link } from "react-router-dom";
import "./BooksSection.css";

const items = [
  {
    title: "Treatment Courses",
    text: "Mukammal ilaj ke liye special medicine courses",
    link: "/category/courses",
    className: "is-courses",
  },
  {
    title: "Books",
    text: "Read our herbal wellness books",
    link: "/category/books",
    className: "is-books",
  },
];

function BooksSection() {
  return (
    <section className="books-section">
      <div className="books-grid">
        {items.map((item) => (
          <Link
            to={item.link}
            className={`books-card ${item.className}`}
            key={item.title}
          >
            <h3 className="books-title">{item.title}</h3>
            <span className="books-text">{item.text}</span>
            <span className="books-link">
              Explore <span className="books-arrow">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BooksSection;