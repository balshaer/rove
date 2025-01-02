import Copyright from "./Copyright";
import FooterSections from "./FooterSections";
import FooterDescription from "./FooterDescription";
import FooterLogo from "./FooterLogo";

export default function Footer() {
  return (
    <footer className="bg-[#141414]  text-white ">
      <div className="mx-auto container px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="w-full flex justify-between max-md:flex-col">
          <div>
            <FooterLogo />

            <FooterDescription />
          </div>

          <div>
            <FooterSections />
          </div>
        </div>
        <div className="mt-12 border-t  border-[#ffffff43]  pt-6">
          <Copyright />
        </div>
      </div>
    </footer>
  );
}
