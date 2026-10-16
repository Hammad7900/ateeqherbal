import Hero from "../components/Hero";
import BestSellers from "../components/BestSellers";
import ShopByCategory from "../components/ShopByCategory";
import BooksSection from "../components/BooksSection";
import PromoBanner from "../components/PromoBanner";
import WhyTrust from "../components/WhyTrust";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <main>
      <Hero />

      <section id="best-sellers">
        <BestSellers />
      </section>

      <section id="shop">
        <ShopByCategory />
      </section>

      <section id="courses-books">
        <BooksSection />
      </section>

      <section id="promo">
        <PromoBanner />
      </section>

      <section id="why-us">
        <WhyTrust />
      </section>

      <section id="reviews">
        <Testimonials />
      </section>
    </main>
  );
}

export default Home;