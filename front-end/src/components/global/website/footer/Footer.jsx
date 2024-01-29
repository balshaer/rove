import Copyright from "./Copyright";
import SocailIcons from "./SocailIcons";
import FooterSections from "./FooterSections";
import FooterDescription from "./FooterDescription";
import FooterLogo from "./FooterLogo";

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] border ">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <FooterLogo />

            <FooterDescription />

            <SocailIcons />
          </div>

          <FooterSections />
        </div>
        <div className="mt-12 border-t pt-6">
          <Copyright />
        </div>
      </div>
    </footer>
  );
}
