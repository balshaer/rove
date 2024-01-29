import { Link } from "react-router-dom";
import NavbarButtons from "./NavbarButtons";

export default function NavbarItems() {
  return (
    <ul className="flex items-center gap-6 text-sm NavbarItems max-md:flex max-md:flex-col max-md:absolute max-md:h-[100vh] max-md:bg-white max-md:w-full max-md:z-50 max-md:justify-center max-md:text-lg max-md:animate__animated max-md:animate__fadeInLeft">
      <li>
        <Link
          to="/"
          className="text-[#2b2e4a] transition hover:text-[#2b2e4a]/75 font-bold"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to="/About"
          className="text-[#2b2e4a] transition hover:text-[#2b2e4a]/75 font-bold"
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
