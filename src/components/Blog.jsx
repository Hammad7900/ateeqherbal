import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/blogPosts";
import "./Blog.css";

function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-inner">
        <div className="blog-head">
          <h2 className="blog-heading">From Our Blog</h2>
          <p className="blog-sub">Herbal tips, recipes and wellness guides</p>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <div className="blog-thumb">
                {post.image ? (
                  <img src={post.image} alt={post.title} loading="lazy" />
                ) : (
                  <span className="blog-thumb-fallback" aria-hidden="true">
                    🌿
                  </span>
                )}
              </div>

              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>

                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>

                <Link to={`/blog/${post.slug}`} className="blog-readmore">
                  Read more <span className="blog-arrow">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;