import { Link } from "react-router-dom";
import ButtonOutline from "@/components/custom/buttons/ButtonOutline";
import Button from "@/components/custom/buttons/Button";
import BannerCarousel from "@/components/custom/banner_carousel/BannerCarousel";

export default function Banner() {
  return (
    <div
      className="bg-[#eeeeee] max-md:h-max max-md:px-4 max-md:m-auto max-md:py-10 h-max "
      id="home"
    >
      <div className="mx-auto max-w-screen-xl flex items-center justify-between p-5 max-md:h-max  text-start h-[80vh] max-md:flex-col max-md:text-center max-md:items-center max-md:justify-center max-md:gap-8 ">
        <div className="w-1/2 max-md:w-full max-w-xl text-start  flex items-start justify-center max-md:text-center max-md:items-center max-md:justify-center  flex-col h-full">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-[#2b2e4a]">
            Elevate Your Style
            <strong className="font-extrabold text-[#040320] sm:block boujee-text ">
              <span className="text-[#040320]">With</span>

              <span className="ps-2 ">Rove</span>
            </strong>
          </h1>
          <p className="mt-4 max-md:mt-4 sm:text-xl/relaxed text-[#666a7b]">
            Explore our curated collection of fashion-forward items that
            redefine your wardrobe.
          </p>
          <div className="mt-8 max-md:mt-4  flex flex-wrap justify-center gap-4">
            <Link to="/Register">
              <Button
                className="h-full bg-[#040320] hover:bg-[#040320c2]"
                height="100%"
                text="Get Started"
              />
            </Link>

            <Link to="/About">
              <ButtonOutline text="Learn More" />
            </Link>
          </div>
        </div>

        <BannerCarousel />
      </div>
    </div>
  );
}
