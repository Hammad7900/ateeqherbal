import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import AboutPage from "./Pages/Aboutpage";
import CategoryPage from "./Pages/CategoryPage";
import ProductPage from "./Pages/ProductPage";
import BestSellersPage from "./Pages/Bestsellerspage";
import CartPage from "./Pages/CartPage";
import InfoListPage from "./Pages/InfoListPage";
import AuthPage from "./Pages/AuthPage";
import BlogPage from './Pages/BlogPage';
import BlogPost from './Pages/BlogPost';
import CheckoutPage from "./Pages/CheckoutPage";
import CoursesPage from './Pages/CoursesPage';
import ShopPage from './Pages/ShopPage';
import ContactPage from './Pages/ContactPage';

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollHandler />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collections" element={<CategoryPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/best-sellers" element={<BestSellersPage />} />
        <Route path="/cart" element={<CartPage />} />
        {/* /courses se InfoListPage hata kar sirf CoursesPage kar diya hai */}
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/books" element={<InfoListPage title="Books" />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/signup" element={<AuthPage mode="signup" />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;