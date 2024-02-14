import Footer from "@/components/global/website/footer/Footer";
import Navbar from "@/components/global/website/navbar/Navbar";
import Banner from "@/components/global/website/Home/banner/Banner";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div>
        <Banner />
      </div>

      <Footer />
    </div>
  );
}
