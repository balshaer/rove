import { Link } from "react-router-dom";
import NavbarButtons from "./NavbarButtons";

export default function NavbarItems() {
  return (
    <ul className="flex items-center gap-6 text-sm NavbarItems max-md:flex max-md:flex-col max-md:absolute max-md:h-[100vh] max-md:bg-white max-md:w-full max-md:z-50 max-md:justify-center max-md:text-lg max-md:animate__animated max-md:animate__fadeInLeft">
      <li className="relative">
        <Link
          to="/"
          className="text-[#2b2e4a]   font-bold  before:w-0 before:absolute before:bottom-[-2px] before:left-0 before:bg-[#2b2e4a] before:h-[0.5px]  hover:before:w-full transition-all  "
        >
          Home
        </Link>
      </li>

      <li className="relative">
        <Link
          to="/About"
          className="text-[#2b2e4a]   font-bold  before:w-0 before:absolute before:bottom-[-2px] before:left-0 before:bg-[#2b2e4a] before:h-[0.5px]  hover:before:w-full transition-all  "
        >
          About
        </Link>
      </li>

      <div className="hidden max-md:block max-md:w-full max-md:max-w-60">
        <NavbarButtons />
      </div>
    </ul>
  );
}
