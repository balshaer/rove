import Footer from "@/components/global/website/footer/Footer";
import Navbar from "@/components/global/website/navbar/Navbar";
import Banner from "@/components/global/website/Home/banner/Banner";
import OurShowRoom from "@/components/global/website/Home/featured_products/OurShowRoom";
import Products from "@/components/global/website/Home/products/Products";
import Stat from "@/components/global/website/Home/stat/Stat";
import MovingBar from "@/components/custom/moving_bar/MovingBar";
import AboutUs from "@/components/global/website/Home/about-us/AboutUs";
import ContactUs from "@/components/global/website/Home/contact-us/ContactUs";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />

      <div>
        <Banner />
        <MovingBar />

        <AboutUs />
        <Stat />
        <Products />

        <OurShowRoom />

  <ContactUs />
      </div>

      <Footer />
    </div>
  );
}
