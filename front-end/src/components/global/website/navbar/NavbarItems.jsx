/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import NavbarButtons from "./NavbarButtons";
import Logo from "@/components/ui/logo/Logo";

const NavbarItems = () => {
  return (
    <ul className="h-full w-full flex items-center justify-center max-md:flex-col gap-4 font-medium">
      <span className="max-md:hidden">
        <Logo />
      </span>

      <NavItemScroll to="aboutus" label="ABOUT US" />

      <NavItem to="/products" label="Products" />

      <NavItemScroll to="partners" label="PARTNERS" />
      <NavItemScroll to="ContactUs" label="CONTACT" />

      <div className="hidden max-md:block max-md:w-full max-md:max-w-60">
        <NavbarButtons />
      </div>
    </ul>
  );
};

const NavItem = ({ to, label }) => (
  <li className="relative">
    <Link
      to={to}
      className="text-[#2b2e4a] text-sm uppercase hoverd font-semibold hover:bg-[#eeeeee] p-2 rounded-lg"
    >
      {label}
    </Link>
  </li>
);

const NavItemScroll = ({ to, label }) => (
  <li className="relative cursor-pointer">
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      className="text-[#2b2e4a]  text-sm  uppercase hoverd font-semibold hover:bg-[#eeeeee] p-2 rounded-lg"
    >
      {label}
    </ScrollLink>
  </li>
);

export default NavbarItems;
