/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import NavbarButtons from "./NavbarButtons";

const NavbarItems = () => {
  return (
    <ul className="h-full w-full flex items-center justify-center max-md:flex-col gap-4 font-medium">
      <NavItem to="/" label="Home" />
      <NavItem to="/products" label="Products" />
      <div className="hidden max-md:block max-md:w-full max-md:max-w-60">
        <NavbarButtons />
      </div>
    </ul>
  );
};

const NavItem = ({ to, label }) => (
  <li className="relative">
    <Link to={to} className="text-[#2b2e4a] hoverd">
      {label}
    </Link>
  </li>
);

export default NavbarItems;
