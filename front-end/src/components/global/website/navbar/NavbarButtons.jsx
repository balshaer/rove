import { Link } from "react-router-dom";
import ButtonOutline from "@/components/custom/buttons/ButtonOutline";
import Button from "@/components/custom/buttons/Button";
import Cookies from "js-cookie";
import ProfileMenu from "@/components/custom/profile_menu/ProfileMenu";
import CommerceCart from "@/components/custom/commerce-cart/CommerceCart";
export default function NavbarButtons() {
  const token = Cookies.get("Bearer");

  return (
    <div className=" max-lg:px-5 max-md:mt-0  gap-2 sm:flex max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:w-[100%] max-md:gap-2">
      {token && (
        <div className="flex flex-row-reverse items-center justify-center z-50 ">
          <ProfileMenu />

          <div className="max-md:hidden">
            <CommerceCart />
          </div>
        </div>
      )}

      {!token && (
        <>
          <Link to="/Login" className="max-md:w-full">
            <Button
              height="100%"
              width=""
              text="Login"
              className="max-md:w-full bg-[#040320] hover:bg-[#040320]"
            />
          </Link>
          <Link to="/Register" className="max-md:w-full">
            <ButtonOutline text="Register" className="max-md:w-full" />
          </Link>
        </>
      )}
    </div>
  );
}
