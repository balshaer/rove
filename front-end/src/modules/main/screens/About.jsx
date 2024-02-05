import Navbar from "@/components/global/website/navbar/Navbar";
import Footer from "@/components/global/website/Footer/Footer";
import Announcement from "@/components/custom/announcement/Announcement";

export default function About() {
  return (
    <div>
      <Announcement />

      <Navbar />

      <section className="animate__animated animate__fadeIn">
        <h1>content</h1>
      </section>

      <Footer />
    </div>
  );
}
