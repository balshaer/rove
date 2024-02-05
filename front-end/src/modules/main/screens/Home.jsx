import Footer from "@/components/global/website/footer/Footer";
import Navbar from "@/components/global/website/navbar/Navbar";
import Banner from "@/components/global/website/Home/banner/Banner";
import Announcement from "@/components/custom/announcement/Announcement";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />

      <div className="animate__animated animate__fadeIn">
        <Banner />
      </div>

      <Footer />
    </div>
  );
}
