import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarItems from "./NavbarItems";
import NavbarButtons from "./NavbarButtons";
import Logo from "@/components/ui/logo/Logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="Navbar">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="block text-teal-600">
          <span className="sr-only">Home</span>

          <Logo />
        </Link>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <NavbarItems />
          </nav>
          <div className="flex items-center gap-4 ">
            <div className="hidden md:block">
              <NavbarButtons />
            </div>

            <Sheet>
              <SheetTrigger>
                <button
                  className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
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
              </SheetTrigger>
              <SheetContent className="h-full flex justify-center items-center ">
                <SheetHeader className="w-full">
                  <SheetDescription>
                    <NavbarItems />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      {/* Responsive Navbar Items */}
      {isOpen && <div className="md:hidden flex   "></div>}
    </header>
  );
}
