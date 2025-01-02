import ProfileMenu from "@/components/custom/profile_menu/ProfileMenu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMenu } from "react-icons/hi";
import Logo from "@/components/ui/logo/Logo";
import SidebarItems from "../../sidebar/sidebar_items/SidebarItems";
import SidebarFooter from "../../sidebar/sidebar_footer/SidebarFooter";

const SHEET_SIDES = ["left"];
export default function NavbarItems() {
  return (
    <div className="w-full flex justify-between flex-row-reverse items-center">
      <ProfileMenu />

      <div className="grid grid-cols-2 gap-2 lg:hidden">
        {SHEET_SIDES.map((side) => (
          <Sheet key={side} className="relative">
            <SheetTrigger asChild>
              <Button variant="outline">
                <HiMenu className="h-10 w-10 text-[#2b2e4a]" />
              </Button>
            </SheetTrigger>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="px-4 py-10">
                <SidebarItems />

                <SheetFooter className="absolute bottom-0 right-0 left-0 m-auto">
                  <SidebarFooter />
                </SheetFooter>
              </div>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </div>
  );
}
