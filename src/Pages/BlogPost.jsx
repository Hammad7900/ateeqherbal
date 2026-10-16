import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogsData } from "./BlogPage"; // BlogPage se data mangwa rahe hain

const BlogPost = () => {
  const { id } = useParams(); // URL se id nikalne ke liye
  
  // Jis blog par click kiya hai, usay dhoond rahe hain
  const blog = blogsData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div style={{ textAlign: "center", padding: "100px", fontSize: "20px" }}>Blog nahi mila!</div>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto", padding: "0 20px", fontFamily: "sans-serif" }}>
      <Link to="/blog" style={{ color: "#2E5C31", textDecoration: "none", fontWeight: "bold", marginBottom: "20px", display: "inline-block" }}>
        ← Back to Blogs
      </Link>

      <img 
        src={blog.image} 
        alt={blog.title} 
        style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "15px", marginBottom: "30px" }} 
      />

      <div style={{ display: "flex", gap: "15px", alignItems: "center", marginBottom: "20px" }}>
        <span style={{ background: "#e8f5e9", color: "#2E5C31", padding: "5px 15px", borderRadius: "20px", fontWeight: "bold", fontSize: "14px" }}>
          {blog.category}
        </span>
        <span style={{ color: "#888", fontSize: "14px" }}>{blog.date}</span>
      </div>

      <h1 style={{ color: "#333", fontSize: "36px", marginBottom: "30px", lineHeight: "1.3" }}>
        {blog.title}
      </h1>

      <div style={{ color: "#444", fontSize: "18px", lineHeight: "1.8", borderBottom: "1px solid #eee", paddingBottom: "40px", marginBottom: "40px" }}>
        {blog.content}
      </div>

      <div style={{ textAlign: "center" }}>
        <h3 style={{ marginBottom: "20px" }}>Hamari Products Dekhein</h3>
        <Link 
          to="/shop" 
          style={{ background: "#2E5C31", color: "white", padding: "12px 30px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "16px" }}
        >
          Go to Shop
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;