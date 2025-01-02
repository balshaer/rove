import NavbarItems from "./navbar_items/NavbarItems";

export default function Navbar() {
  return (
    <header className="bg-[#fafafa]  shadow-sm">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12"></div>
          <div className="md:flex md:items-center md:gap-12 w-full">
            <nav aria-label="Global" className="block w-full">
              <NavbarItems />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
