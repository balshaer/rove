import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarItems from "./NavbarItems";
import NavbarButtons from "./NavbarButtons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "@/components/ui/logo/Logo";
import CommerceCart from "@/components/custom/commerce-cart/CommerceCart";
import Cookies from "js-cookie";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const token = Cookies.get("Bearer");

  return (
    <header className="Navbar max-md:px-10 m-auto ">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 p-0   ">
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <NavbarItems />
          </nav>
          <div className="flex items-center gap-4  max-md:w-full max-md:justify-between">
            <div className="hidden md:block ">
              <NavbarButtons />
            </div>

            <div className="absolute top-0 right-0 left-0 m-auto  flex justify-between items-center h-16 px-4 md:hidden  ">
              <div className="h-full w-max  justify-center items-center hidden max-md:flex">
                <Logo />
              </div>

              <div className="flex justify-center items-center">
                {token && (
                  <div className="me-4  md:hidden">
                    <CommerceCart />
                  </div>
                )}

                <Sheet>
                  <SheetTrigger className="max-md:w-full">
                    <button
                      className="block  rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
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
        </div>
      </div>
      {isOpen && <div className="md:hidden flex"></div>}
    </header>
  );
}
