import { Link } from "react-router-dom";

export default function NavbarItems() {
  return (
    <ul className="flex items-center gap-6 text-sm NavbarItems">
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
    </ul>
  );
}
