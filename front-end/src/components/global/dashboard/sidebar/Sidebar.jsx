import Logo from "@/components/ui/logo/Logo";
import SidebarFooter from "./sidebar_footer/SidebarFooter";
import SidebarItems from "./sidebar_items/SidebarItems";

export default function Sidebar() {
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-[#fafafa] max-md:w-full">
      <div className="px-4 py-6">
        <span className="grid h-10 w-32 place-content-center  ">
          <Logo />
        </span>
        <SidebarItems />
      </div>
      <SidebarFooter />
    </div>
  );
}
