import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProducts, fetchCategories } from "../api/woocommerce";
import "./Categorypage.css";

function CategoryPage() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategoryData = async () => {
      setLoading(true);
      try {
        const [allProducts, allCategories] = await Promise.all([
          fetchProducts(),
          fetchCategories(),
        ]);

        if (slug) {
          // Slug ko lowercase kar ke safe matching
          const safeSlug = slug.toLowerCase();
          const currentCat = allCategories.find((cat) => cat.slug.toLowerCase() === safeSlug);
          
          if (currentCat) {
            setCategoryName(currentCat.name);
            // Product ko Category ki ID ya Slug dono se match karna
            const filtered = allProducts.filter((p) =>
              p.categories?.some((c) => c.id === currentCat.id || c.slug.toLowerCase() === safeSlug)
            );
            setProducts(filtered);
          } else {
            setCategoryName(slug.replace("-", " "));
            // Fallback filter
            const filtered = allProducts.filter((p) =>
              p.categories?.some((c) => c.slug.toLowerCase() === safeSlug)
            );
            setProducts(filtered);
          }
        } else {
          setCategoryName("All Collections");
          setProducts(allProducts);
        }
      } catch (error) {
        console.error("Error loading category page:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCategoryData();
  }, [slug]);

  if (loading) {
    return (
      <section className="cp">
        <h2>Loading...</h2>
      </section>
    );
  }

  if (!categoryName) {
    return (
      <section className="cp">
        <h2>Category nahi mili</h2>
        <Link to="/">Home par wapas jayein</Link>
      </section>
    );
  }

  return (
    <section className="cp">
      <h1 className="cp-title" style={{ textTransform: "capitalize" }}>{categoryName}</h1>

      {products.length === 0 ? (
        <p className="cp-empty">Is category mein abhi koi product nahi hai.</p>
      ) : (
        <div className="cp-grid">
          {products.map((p) => (
            <Link to={`/product/${p.id}`} className="cp-card" key={p.id}>
              <div className="cp-img">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.visibility = "hidden")}
                  />
                )}
                {p.badge && <span className="cp-badge">{p.badge}</span>}
              </div>
              <div className="cp-info">
                <span className="cp-name">{p.name}</span>
                <span className="cp-price">Rs.{p.price.toLocaleString()}</span>
                <span className="cp-rating">
                  <span aria-hidden="true">★★★★★</span> {p.reviews || 0} reviews
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default CategoryPage;