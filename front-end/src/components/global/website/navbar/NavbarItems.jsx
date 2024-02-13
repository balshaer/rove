import { Link } from "react-router-dom";
import NavbarButtons from "./NavbarButtons";

export default function NavbarItems() {
  return (
    <ul className=" h-full w-full flex items-center justify-center flex-col gap-4">
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
