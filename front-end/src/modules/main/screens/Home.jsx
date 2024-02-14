import Footer from "@/components/global/website/footer/Footer";
import Navbar from "@/components/global/website/navbar/Navbar";
import Banner from "@/components/global/website/Home/banner/Banner";
import FeaturedProducts from "@/components/global/website/Home/featured_products/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div>
        <Banner />

        <FeaturedProducts />
      </div>

      <Footer />
    </div>
  );
}
