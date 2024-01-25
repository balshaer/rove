import { Link } from "react-router-dom";
import Button from "@/components/custom/buttons/Button";
import ButtonOutline from "@/components/custom/buttons/ButtonOutline";
import NavbarItems from "./NavbarItems";

export default function Navbar() {
  return (
    <header className=" Navbar">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="block text-teal-600">
          <span className="sr-only">Home</span>
          Logo
        </Link>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <NavbarItems />
          </nav>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link to="/Login">
                <Button text="Login" />
              </Link>
              <Link to="/Register">
                <ButtonOutline text="Register" />
              </Link>
            </div>
            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
