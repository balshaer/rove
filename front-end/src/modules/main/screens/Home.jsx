import Footer from "@/components/global/website/footer/Footer";
import Navbar from "@/components/global/website/navbar/Navbar";
import Banner from "@/components/global/website/Home/banner/Banner";
import FeaturedProducts from "@/components/global/website/Home/featured_products/FeaturedProducts";
import Products from "@/components/global/website/Home/products/Products";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div>
        <Banner />

        <FeaturedProducts />

        <Products />
      </div>

      <Footer />
    </div>
  );
}
