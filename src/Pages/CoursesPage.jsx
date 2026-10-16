import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api/woocommerce"; // API file ka path

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      setLoading(true);
      const allProducts = await fetchProducts();
      
      // Yahan filter laga hai: Sirf wo products lao jinki category "Course" ya "Courses" ho
      const filteredCourses = allProducts.filter((product) =>
        product.categories && product.categories.some((cat) => 
          cat.name.toLowerCase() === "course" || cat.name.toLowerCase() === "courses"
        )
      );
      
      setCourses(filteredCourses);
      setLoading(false);
    };
    
    loadCourses();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "100px", fontSize: "20px", color: "#555" }}>
        Loading Courses...
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#333", fontSize: "32px" }}>
        Our Premium Courses
      </h1>
      
      {courses.length === 0 ? (
        <div style={{ textAlign: "center", fontSize: "18px", color: "#777", padding: "50px" }}>
          Abhi tak koi course available nahi hai.
        </div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
          {courses.map((course) => (
            <div 
              key={course.id} 
              style={{ 
                width: "320px", 
                border: "1px solid #eee", 
                borderRadius: "12px", 
                overflow: "hidden", 
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                backgroundColor: "#fff",
                transition: "transform 0.3s ease"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0px)"}
            >
              {/* Course Image */}
              <img 
                src={course.image || "https://via.placeholder.com/320x200?text=No+Image"} 
                alt={course.name} 
                style={{ width: "100%", height: "220px", objectFit: "cover" }} 
              />
              
              {/* Course Info */}
              <div style={{ padding: "20px" }}>
                <h3 style={{ margin: "0 0 10px 0", fontSize: "20px", color: "#333", lineHeight: "1.4" }}>
                  {course.name}
                </h3>
                <h4 style={{ margin: "0 0 20px 0", color: "#27ae60", fontSize: "22px", fontWeight: "bold" }}>
                  Rs. {course.price.toLocaleString()}
                </h4>
                
                {/* View Details Button */}
                <Link 
                  to={`/product/${course.id}`} 
                  style={{ 
                    display: "block", 
                    textAlign: "center", 
                    background: "#333", 
                    color: "#fff", 
                    padding: "12px", 
                    textDecoration: "none", 
                    borderRadius: "6px", 
                    fontWeight: "bold",
                    transition: "background 0.3s ease"
                  }}
                  onMouseOver={(e) => e.target.style.background = "#555"}
                  onMouseOut={(e) => e.target.style.background = "#333"}
                >
                  View Course Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursesPage;