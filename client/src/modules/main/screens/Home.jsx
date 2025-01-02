import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Banner />
      <MovingBar />
      <AboutUs />
      <Stat />
      <Products />
      <OurShowRoom />
      <ContactUs />
      <Footer />
    </div>
  );
}
