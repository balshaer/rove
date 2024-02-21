import Footer from "@/components/global/website/footer/Footer";
import Navbar from "@/components/global/website/navbar/Navbar";
import Banner from "@/components/global/website/Home/banner/Banner";
import OurShowRoom from "@/components/global/website/Home/featured_products/OurShowRoom";
import Products from "@/components/global/website/Home/products/Products";
import Stat from "@/components/global/website/Home/stat/Stat";
import MovingBar from "@/components/custom/moving_bar/MovingBar";
import AboutUs from "@/components/global/website/Home/about-us/AboutUs";
import ContactUs from "@/components/global/website/Home/contact-us/ContactUs";
import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import Logo from "@/components/ui/logo/Logo";

export default function Home() {
  const [showBlackScreen, setShowBlackScreen] = useState(false);

  useEffect(() => {
    const hasSeenModel = localStorage.getItem("hasSeenModel");

    if (!hasSeenModel) {
      setTimeout(() => {
        setShowBlackScreen(true);
        localStorage.setItem("hasSeenModel", "true");
      }, 2000);
    }
  }, []);

  function handleCloseModel() {
    setShowBlackScreen(false);
  }
  return (
    <div className="overflow-hidden">
      <Navbar />
      {showBlackScreen && (
        <div className="bg-[#000000c9] h-screen w-screen fixed z-50 inset-0 m-auto py-10 px-5 overflow-hidden  animate__animated  animate__fadeIn flex justify-center items-center flex-col">
          <div className="bg-white animate__animated  animate__slideInUp   text-black h-[250px] w-[500px] text-center p-5 rounded-lg flex justify-start items-center flex-col">
            <header className="h-10 w-full flex justify-end items-center">
              <div className="cursor-pointer h-full" onClick={handleCloseModel}>
                <HiX className="text-black" />
              </div>
            </header>

            <div className="w-full py-2 flex justify-center items-center pe-4">
              <Logo />
            </div>

            <h1 className="text-xl font-bold">Welcome To Rove 👋</h1>

            <p className="text-lg font-medium py-5">
              Explore a curated collection of premium clothing and watches for
              men. Immerse yourself in a world of sophistication and style
              tailored just for you.
            </p>
          </div>
        </div>
      )}
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
