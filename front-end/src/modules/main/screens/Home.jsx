import Footer from "@/components/global/website/footer/Footer";
import Navbar from "@/components/global/website/navbar/Navbar";
import Banner from "@/components/global/website/Home/banner/Banner";
import Announcement from "@/components/custom/announcement/Announcement";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />

      <div>
        <Banner />


        
      </div>

      <Footer />
    </div>
  );
}
