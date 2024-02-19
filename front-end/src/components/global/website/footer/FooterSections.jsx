/* eslint-disable react/prop-types */
import { Link as ScrollLink } from "react-scroll";

const FooterLink = ({ to, label, duration = 500 }) => (
  <li>
    <ScrollLink
      to={to}
      smooth={true}
      duration={duration}
      className="text-[#ffffff] cursor-pointer transition hover:text-[#ffffff]/75"
    >
      {label}
    </ScrollLink>
  </li>
);

const FooterSections = () => (
  <div className="flex justify-start text-start items-start w-full gap-24">
    <div className="text-center sm:text-left">
      <p className="text-lg font-bold text-[#ffffff] ">IMPORTANT LINKS</p>
      <ul className="mt-8 space-y-4 text-sm list-disc">
        <FooterLink to="home" label="BEGINNING" />
        <FooterLink to="partners" label="PARTNERS" />
        <FooterLink to="aboutus" label="ABOUT US" />
        <FooterLink to="contact" label="CONTACT" />
      </ul>
    </div>
  </div>
);

export default FooterSections;
